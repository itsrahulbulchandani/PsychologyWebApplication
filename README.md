# Bhavana Bulchandani - Counselling Psychologist Website

A modern, professional website for mental health counselling services with integrated PhonePe payment gateway and Google Calendar booking system.

Built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Key Features

### 🔥 Custom Booking System
- Interactive calendar with date and time selection
- **PhonePe payment integration** for secure payments
- **Automatic Google Calendar booking** after payment
- Real-time availability checking
- Email confirmations with Google Meet links

## Features

### 🏠 Home Page
- Eye-catching hero section with affordability tagline
- "How I Bring Change" section highlighting empathy, evidence-based approach, and accessibility
- Mental health misconceptions breakdown
- Client testimonials
- Multiple CTAs for booking sessions

### 📅 Booking Page
- Three pricing packages (Single, 3-Session, 5-Session) with discounts
- Interactive calendar for date/time selection
- **PhonePe payment gateway integration**
- **Automatic Google Calendar booking** after successful payment
- Google Meet link generation
- Booking confirmation emails
- Success and error handling pages

### 👤 About Page
- Professional qualifications and certifications
- Personal touch with hobbies and interests
- Therapeutic approach explanation
- Warm, human-centered design

### 📚 Resources Page
- Free downloadable resources (PDFs, guides, checklists)
- Premium resources for purchase (workbooks, audio, video courses)
- Newsletter subscription section
- Easy-to-use download and purchase flows

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Vercel, Netlify, or any Node.js host

## Getting Started

### Quick Start

1. Install dependencies:
```bash
npm install googleapis
```

2. Configure environment variables:
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your credentials:
# - PhonePe Merchant ID, Salt Key
# - Google Calendar API credentials
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### 🔧 Setup PhonePe & Google Calendar

**⚠️ IMPORTANT:** The booking system requires setup of:
1. **PhonePe Payment Gateway** - for processing payments
2. **Google Calendar API** - for automatic booking

See **[SETUP.md](./SETUP.md)** for detailed setup instructions.

### Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Configure Payment & Calendar (Required)

The booking system uses **PhonePe** for payments and **Google Calendar** for automatic booking.

Follow the complete setup guide in **[SETUP.md](./SETUP.md)** which covers:
- PhonePe merchant account setup
- Google Calendar API configuration
- Getting OAuth tokens
- Testing the payment flow

### 2. Update Contact Information

In `components/Footer.tsx`, update:
- Email address
- Phone number
- Location

### 3. Add Your Photo

Replace the placeholder icon in `app/about/page.tsx` with your actual photo:
```tsx
<img src="/your-photo.jpg" alt="Bhavana Bulchandani" className="w-48 h-48 rounded-full" />
```

### 4. Configure Resources

In `app/resources/page.tsx`:
- Upload your PDF files to the `/public` folder
- Update `downloadLink` properties with actual file paths
- Premium resources can use the same PhonePe integration

### 5. Update Qualifications

Edit `app/about/page.tsx` to reflect your actual:
- Degrees and institutions
- Graduation years
- Certifications
- Specializations

### 6. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```ts
colors: {
  primary: { /* your color palette */ },
  accent: { /* your accent colors */ },
}
```

## System Architecture

### Payment Flow
1. User selects package and date/time
2. Enters personal details
3. Clicks "Pay via PhonePe"
4. Redirected to PhonePe payment page
5. After successful payment → callback to `/api/payment/callback`
6. System creates Google Calendar event with Meet link
7. Sends confirmation email to user
8. Redirects to success page

### API Routes
- `/api/payment/initiate` - Initiates PhonePe payment
- `/api/payment/callback` - Handles payment completion
- `/api/availability` - Checks calendar availability

### Libraries Used
- **googleapis** - Google Calendar API integration
- **crypto** (Node.js) - PhonePe signature generation
- **lucide-react** - Beautiful icons

## Adding More Features

### Email Notifications
Add Nodemailer or use services like:
- SendGrid
- Resend
- Postmark

### Database for Bookings
Store booking data in:
- MongoDB Atlas (Recommended)
- PostgreSQL (Supabase/Neon)
- Firebase

### Analytics
Add tracking in `app/layout.tsx`:
- Google Analytics
- Plausible
- Mixpanel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── api/
│   │   ├── payment/
│   │   │   ├── initiate/route.ts    # PhonePe payment init
│   │   │   └── callback/route.ts    # Payment callback
│   │   └── availability/route.ts     # Calendar availability
│   ├── booking/
│   │   ├── page.tsx        # Booking page
│   │   ├── success/page.tsx # Success page
│   │   └── error/page.tsx   # Error page
│   ├── about/
│   │   └── page.tsx        # About me page
│   └── resources/
│       └── page.tsx        # Resources page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── BookingCalendar.tsx # Calendar component
├── lib/
│   ├── phonepe.ts          # PhonePe integration
│   └── googleCalendar.ts   # Google Calendar API
├── public/                 # Static files (PDFs)
└── .env.local             # Environment variables (add your keys)
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## License

Private - All rights reserved to Bhavana Bulchandani

## 🔐 Security Notes

- Never commit `.env.local` to git
- Use sandbox mode for testing PhonePe
- Validate all user inputs on server side
- Verify payment status before creating bookings
- Use HTTPS in production
- Rate limit API endpoints

## 🐛 Troubleshooting

See [SETUP.md](./SETUP.md) for detailed troubleshooting guide.

Common issues:
- **Payment fails**: Check PhonePe credentials and sandbox mode
- **Calendar not created**: Verify Google API credentials
- **CORS errors**: Check redirect URIs match exactly

## 📚 Documentation

- [SETUP.md](./SETUP.md) - Detailed setup guide for PhonePe & Google Calendar
- [PhonePe API Docs](https://developer.phonepe.com/docs)
- [Google Calendar API](https://developers.google.com/calendar)

## Support

For questions or issues, contact: bhavana@counselling.com

