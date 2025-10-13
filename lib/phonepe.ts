// PhonePe Payment Integration
import crypto from 'crypto';

export interface PaymentPayload {
  merchantId: string;
  merchantTransactionId: string;
  merchantUserId: string;
  amount: number;
  redirectUrl: string;
  redirectMode: string;
  callbackUrl: string;
  mobileNumber?: string;
  paymentInstrument: {
    type: string;
  };
}

export class PhonePeService {
  private merchantId: string;
  private saltKey: string;
  private saltIndex: number;
  private apiEndpoint: string;
  private demoMode: boolean;

  constructor() {
    // These should be stored in environment variables
    this.merchantId = process.env.PHONEPE_MERCHANT_ID || 'DEMO_MERCHANT_ID';
    this.saltKey = process.env.PHONEPE_SALT_KEY || 'DEMO_SALT_KEY';
    this.saltIndex = parseInt(process.env.PHONEPE_SALT_INDEX || '1');
    this.apiEndpoint = process.env.PHONEPE_API_ENDPOINT || 'https://api-preprod.phonepe.com/apis/pg-sandbox';
    
    // Enable demo mode if credentials are not configured
    this.demoMode = process.env.PHONEPE_DEMO_MODE === 'true' || 
                    this.merchantId === 'DEMO_MERCHANT_ID' ||
                    this.merchantId === 'YOUR_MERCHANT_ID';
  }

  /**
   * Generate a unique transaction ID
   */
  generateTransactionId(): string {
    return `TXN${Date.now()}${Math.random().toString(36).substring(2, 9)}`;
  }

  /**
   * Create payment payload
   */
  createPaymentPayload(
    amount: number,
    mobileNumber: string,
    packageName: string,
    appointmentDate: string
  ): PaymentPayload {
    const merchantTransactionId = this.generateTransactionId();
    const merchantUserId = `USER${Date.now()}`;

    return {
      merchantId: this.merchantId,
      merchantTransactionId,
      merchantUserId,
      amount: amount * 100, // Convert to paise
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/callback`,
      redirectMode: 'POST',
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/callback`,
      mobileNumber,
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };
  }

  /**
   * Generate X-VERIFY header
   */
  generateXVerify(base64Payload: string): string {
    const stringToHash = base64Payload + '/pg/v1/pay' + this.saltKey;
    const sha256Hash = crypto.createHash('sha256').update(stringToHash).digest('hex');
    return `${sha256Hash}###${this.saltIndex}`;
  }

  /**
   * Initiate payment
   */
  async initiatePayment(payload: PaymentPayload): Promise<{ success: boolean; data?: any; error?: string }> {
    // DEMO MODE: Simulate payment without calling actual PhonePe API
    if (this.demoMode) {
      console.log('🎭 DEMO MODE: Simulating PhonePe payment...');
      console.log('Payment Details:', {
        amount: payload.amount / 100,
        transactionId: payload.merchantTransactionId,
        mobile: payload.mobileNumber,
      });
      
      // Simulate a demo payment page URL
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const demoPaymentUrl = `${baseUrl}/demo-payment?txn=${payload.merchantTransactionId}`;
      
      return {
        success: true,
        data: {
          paymentUrl: demoPaymentUrl,
          transactionId: payload.merchantTransactionId,
        },
      };
    }

    // PRODUCTION MODE: Call actual PhonePe API
    try {
      const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
      const xVerify = this.generateXVerify(base64Payload);

      const response = await fetch(`${this.apiEndpoint}/pg/v1/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify,
        },
        body: JSON.stringify({
          request: base64Payload,
        }),
      });

      const data = await response.json();

      if (data.success) {
        return {
          success: true,
          data: {
            paymentUrl: data.data.instrumentResponse.redirectInfo.url,
            transactionId: payload.merchantTransactionId,
          },
        };
      } else {
        return {
          success: false,
          error: data.message || 'Payment initiation failed',
        };
      }
    } catch (error) {
      console.error('PhonePe payment error:', error);
      return {
        success: false,
        error: 'Failed to initiate payment. Check your PhonePe credentials.',
      };
    }
  }

  /**
   * Check payment status
   */
  async checkPaymentStatus(merchantTransactionId: string): Promise<{ success: boolean; data?: any }> {
    // DEMO MODE: Simulate successful payment
    if (this.demoMode) {
      console.log('🎭 DEMO MODE: Simulating successful payment status check...');
      return {
        success: true,
        data: {
          state: 'COMPLETED',
          transactionId: merchantTransactionId,
          paymentInstrument: {
            type: 'DEMO',
          },
        },
      };
    }

    // PRODUCTION MODE: Check actual PhonePe payment status
    try {
      const stringToHash = `/pg/v1/status/${this.merchantId}/${merchantTransactionId}${this.saltKey}`;
      const sha256Hash = crypto.createHash('sha256').update(stringToHash).digest('hex');
      const xVerify = `${sha256Hash}###${this.saltIndex}`;

      const response = await fetch(
        `${this.apiEndpoint}/pg/v1/status/${this.merchantId}/${merchantTransactionId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-VERIFY': xVerify,
            'X-MERCHANT-ID': this.merchantId,
          },
        }
      );

      const data = await response.json();
      return {
        success: data.success,
        data: data.data,
      };
    } catch (error) {
      console.error('Payment status check error:', error);
      return {
        success: false,
      };
    }
  }
}

export const phonePeService = new PhonePeService();

