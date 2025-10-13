# 🚀 Quick Start Guide

## Current Status: ✅ Website is Running!

Your website is fully functional with **demo payment mode** enabled for testing.

## 🌐 Access Your Website

Open in browser: **http://localhost:3000**

---

## ⚡ Quick Test (No Setup Needed)

### 1. Test the Booking Flow (Demo Mode)

```bash
1. Go to: http://localhost:3000/booking
2. Select any package
3. Pick a date and time
4. Fill in your details
5. Click "Pay via PhonePe"
6. Click "Simulate Successful Payment"
7. See the success page! ✅
```

**Note:** No payment is actually processed. It's a demo!

---

## 📅 Enable Real Google Calendar (Optional)

To automatically create Google Calendar events with Meet links after payment:

### Option 1: Quick Setup (5 minutes)

```bash
1. Get Google OAuth credentials (see below)
2. Run: node get-google-token.js
3. Follow the prompts
4. Copy the credentials to .env.local
5. Restart server: npm run dev
```

### Option 2: Detailed Setup

See: **[GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md)**

### How to Get Google Credentials:

1. **Go to:** https://console.cloud.google.com/
2. **Create project** (if you don't have one)
3. **Enable Google Calendar API**:
   - APIs & Services → Library
   - Search "Google Calendar API"
   - Click Enable
4. **Create OAuth credentials**:
   - APIs & Services → Credentials
   - Create Credentials → OAuth client ID
   - Choose "Web application"
   - Add redirect URI: `http://localhost:3000/api/auth/google/callback`
   - Save Client ID and Client Secret
5. **Run the token generator**:
   ```bash
   node get-google-token.js
   ```
6. **Paste credentials** when prompted
7. **Follow the URL**, authorize, and paste the code
8. **Copy the output** to your `.env.local` file

---

## 💳 Enable Real PhonePe Payments (For Production)

Currently in **demo mode**. To enable real payments:

### 1. Get PhonePe Merchant Account

1. Visit: https://www.phonepe.com/business-solutions/payment-gateway/
2. Sign up and complete KYC
3. Get your:
   - Merchant ID
   - Salt Key
   - Salt Index

### 2. Update .env.local

```bash
# PhonePe Production
PHONEPE_MERCHANT_ID=your_real_merchant_id
PHONEPE_SALT_KEY=your_real_salt_key
PHONEPE_SALT_INDEX=1
PHONEPE_API_ENDPOINT=https://api.phonepe.com/apis/hermes
```

### 3. Restart Server

```bash
npm run dev
```

Demo mode will automatically disable when real credentials are detected.

---

## 📁 Project Structure

```
📦 Your Website
├── 🏠 Home (/)               - Landing page
├── 📅 Booking (/booking)     - Book sessions
├── 👤 About (/about)         - Your profile
└── 📚 Resources (/resources) - Free/paid resources
```

---

## ✨ What's Working Now

### ✅ Fully Functional:
- Beautiful, responsive design
- Navigation and routing
- Booking calendar (select date/time)
- Package selection
- Form validation
- Demo payment flow
- Success/error pages

### ⚠️ Requires Setup:
- Real PhonePe payments → See SETUP.md
- Google Calendar integration → See GOOGLE_CALENDAR_SETUP.md
- Email notifications (optional)
- Database storage (optional)

---

## 🎨 Customization Checklist

### Before Going Live:

- [ ] Update contact info in Footer (`components/Footer.tsx`)
- [ ] Add your photo in About page (`app/about/page.tsx`)
- [ ] Update qualifications and certifications
- [ ] Review and edit testimonials (make them real!)
- [ ] Add actual PDF resources to `/public` folder
- [ ] Set up PhonePe merchant account
- [ ] Configure Google Calendar
- [ ] Test entire booking flow
- [ ] Update pricing if needed
- [ ] Add your domain to environment variables

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for issues
npm run lint
```

---

## 📱 Test on Mobile

Your website is fully responsive! Test on:
- Phone (iOS/Android)
- Tablet
- Desktop

Access from any device on your network:
1. Get your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac)
2. Open: `http://YOUR_IP:3000`

---

## 🚀 Deploy to Production

### Recommended: Vercel (Free & Easy)

```bash
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Add environment variables
5. Deploy!
```

### Also Works With:
- Netlify
- Railway
- Render
- Any Node.js hosting

---

## 📚 Documentation

- **[README.md](./README.md)** - Full documentation
- **[SETUP.md](./SETUP.md)** - Detailed setup guide
- **[GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md)** - Google Calendar guide

---

## ❓ Common Questions

**Q: Is the website ready to use?**
A: Yes for testing! For real clients, set up PhonePe and Google Calendar.

**Q: Do I need Google Calendar?**
A: No, but it's highly recommended. Without it, you'll need to manually create appointments.

**Q: How much does PhonePe charge?**
A: PhonePe charges a small percentage per transaction (check their pricing).

**Q: Can I use a different payment gateway?**
A: Yes! The code is structured to make it easy to swap PhonePe with Razorpay, Stripe, etc.

**Q: Is my data secure?**
A: Payment processing is handled by PhonePe (PCI compliant). Your calendar uses OAuth2 (industry standard).

---

## 🆘 Need Help?

1. Check terminal for errors
2. Review documentation files
3. Search error messages online
4. Check Next.js docs: https://nextjs.org/docs

---

## 🎉 You're All Set!

The website is running and ready for testing. Take it for a spin and customize it to match your brand!

**Current URL:** http://localhost:3000

Enjoy! 🚀

