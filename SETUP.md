# Setup Guide: PhonePe Payment & Google Calendar Integration

This guide will help you set up PhonePe payment gateway and Google Calendar integration for the booking system.

## 📱 PhonePe Setup

### Step 1: Get PhonePe Merchant Account

1. Visit [PhonePe Business](https://www.phonepe.com/business-solutions/payment-gateway/)
2. Sign up for a merchant account
3. Complete KYC verification
4. Once approved, access your PhonePe Dashboard

### Step 2: Get API Credentials

1. Log in to PhonePe Dashboard
2. Navigate to **API Keys** section
3. Note down:
   - Merchant ID
   - Salt Key
   - Salt Index

### Step 3: Configure Environment Variables

Add to your `.env.local` file:
```bash
PHONEPE_MERCHANT_ID=your_merchant_id_here
PHONEPE_SALT_KEY=your_salt_key_here
PHONEPE_SALT_INDEX=1
```

For testing, use sandbox URL:
```bash
PHONEPE_API_ENDPOINT=https://api-preprod.phonepe.com/apis/pg-sandbox
```

For production, use:
```bash
PHONEPE_API_ENDPOINT=https://api.phonepe.com/apis/hermes
```

## 📅 Google Calendar Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google Calendar API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

### Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google/callback` (for local development)
   - `https://yourdomain.com/api/auth/google/callback` (for production)
5. Save and note down:
   - Client ID
   - Client Secret

### Step 3: Get Refresh Token

1. Install Google's OAuth2 playground or use this method:

```bash
# Create a file get-refresh-token.js
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URI'
);

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('Authorize this app by visiting:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', async (code) => {
  rl.close();
  const { tokens } = await oauth2Client.getToken(code);
  console.log('Refresh Token:', tokens.refresh_token);
});
```

2. Run: `node get-refresh-token.js`
3. Visit the URL, authorize the app
4. Copy the refresh token

### Step 4: Configure Environment Variables

Add to your `.env.local` file:
```bash
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
```

## 🗄️ Database Setup (Optional but Recommended)

To store booking information, set up a database:

### Option 1: MongoDB (Recommended)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env.local`:
```bash
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/bhavana-bookings
```

### Option 2: PostgreSQL

Use services like:
- [Supabase](https://supabase.com/) (Free tier available)
- [Neon](https://neon.tech/) (Serverless Postgres)

## 🚀 Installation & Running

1. Copy environment variables:
```bash
cp .env.example .env.local
```

2. Fill in all the values in `.env.local`

3. Install dependencies:
```bash
npm install googleapis
```

4. Run development server:
```bash
npm run dev
```

5. Test the booking flow:
   - Go to http://localhost:3000/booking
   - Select a package
   - Choose date & time
   - Fill in details
   - Test payment (use PhonePe test cards in sandbox mode)

## 🧪 Testing PhonePe Integration

PhonePe provides test credentials for sandbox:

**Test Card Numbers:**
- Success: 4242 4242 4242 4242
- Failure: 4000 0000 0000 0002

**Test UPI:**
- success@ybl
- failure@ybl

## 📧 Email Notifications (Optional Enhancement)

To send booking confirmation emails, you can use:

### Option 1: Nodemailer with Gmail

```bash
npm install nodemailer
```

Add to `.env.local`:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### Option 2: Email Services
- [SendGrid](https://sendgrid.com/)
- [Resend](https://resend.com/)
- [Postmark](https://postmarkapp.com/)

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - it's in `.gitignore`
2. **Use environment-specific URLs** - sandbox for dev, production for live
3. **Validate all inputs** on both client and server
4. **Verify payment status** before creating calendar events
5. **Log all transactions** for debugging and auditing
6. **Use HTTPS** in production
7. **Rate limit API endpoints** to prevent abuse

## 🐛 Troubleshooting

### PhonePe Issues:
- **Invalid signature**: Check your salt key and index
- **Merchant not found**: Verify merchant ID
- **Payment failed**: Check sandbox test credentials

### Google Calendar Issues:
- **Authentication failed**: Regenerate refresh token
- **Calendar not found**: Ensure Calendar API is enabled
- **Permission denied**: Check OAuth scopes

### Common Errors:
- **CORS errors**: Check redirect URIs match exactly
- **Network errors**: Verify API endpoints are correct
- **Token expired**: Refresh tokens should not expire (check refresh token setup)

## 📞 Support

For issues:
1. Check the logs in terminal
2. Review environment variables
3. Test APIs individually using tools like Postman
4. Contact PhonePe support for payment issues
5. Check Google Cloud Console for Calendar API errors

## 🎯 Next Steps

After setup:
1. Test complete booking flow
2. Customize email templates
3. Add booking management dashboard
4. Implement booking cancellation
5. Add payment receipt generation
6. Set up analytics tracking

## 📚 Resources

- [PhonePe API Documentation](https://developer.phonepe.com/docs)
- [Google Calendar API Documentation](https://developers.google.com/calendar)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

