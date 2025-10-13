'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { CreditCard, CheckCircle, XCircle, Loader } from 'lucide-react';

function DemoPaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get('txn');
  const [processing, setProcessing] = useState(false);

  const handlePaymentSuccess = async () => {
    setProcessing(true);
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to callback with success
    router.push(`/api/payment/callback?transactionId=${transactionId}&status=success`);
  };

  const handlePaymentFailure = () => {
    router.push('/booking/error?message=Payment cancelled');
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Demo Badge */}
          <div className="mb-6 text-center">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🎭 DEMO MODE - Test Payment
            </div>
          </div>

          {/* Payment Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="text-white" size={40} />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
            PhonePe Payment Gateway
          </h1>
          <p className="text-center text-gray-600 mb-8">
            This is a simulated payment page for testing purposes.
          </p>

          {/* Transaction Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="text-sm text-gray-600 mb-1">Transaction ID</div>
            <div className="font-mono text-xs text-gray-800 break-all">{transactionId}</div>
          </div>

          {/* Warning */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is a demo payment page. No actual payment will be processed. 
              To use real PhonePe payments, configure your credentials in the <code className="bg-blue-100 px-1 rounded">.env.local</code> file.
            </p>
          </div>

          {/* Action Buttons */}
          {!processing ? (
            <div className="space-y-4">
              <button
                onClick={handlePaymentSuccess}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <CheckCircle className="mr-2" size={20} />
                Simulate Successful Payment
              </button>

              <button
                onClick={handlePaymentFailure}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <XCircle className="mr-2" size={20} />
                Simulate Payment Failure
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <Loader className="animate-spin mx-auto mb-4 text-blue-600" size={40} />
              <p className="text-gray-600">Processing payment...</p>
            </div>
          )}

          {/* Info */}
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            In production, users will be redirected to the actual PhonePe payment page.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoPaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin text-blue-600" size={40} />
      </div>
    }>
      <DemoPaymentContent />
    </Suspense>
  );
}

