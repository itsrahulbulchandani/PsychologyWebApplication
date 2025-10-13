# 📅 Google Calendar Integration - Complete Setup Guide

## How It Works

After a successful payment, the system **automatically**:

1. ✅ **Creates an event in YOUR Google Calendar** (the therapist's calendar)
2. 📧 **Sends the client an email** with:
   - Calendar invitation
   - Google Meet video link (automatically generated)
   - Appointment details
3. 🔔 **Sets up reminders** for both you and the client
4. 📱 **Syncs across all devices** (phone, laptop, tablet)

---

## 🎯 The Booking Flow

### Client Side:
```
1. Client selects package → 
2. Chooses date/time → 
3. Enters details → 
4. Pays via PhonePe → 
5. ✅ Gets confirmation email with Google Meet link
```

### Your Side (Therapist):
```
1. Payment confirmed → 
2. 🗓️ Event automatically added to YOUR Google Calendar → 
3. 📧 You get calendar notification → 
4. 🎥 Google Meet link auto-created → 
5. ⏰ Reminder sent 1 day before + 1 hour before
```

---

## 🔧 Setup Google Calendar Integration

### Step 1: Create Google Cloud Project

1. Go to: https://console.cloud.google.com/
2. Click **"New Project"**
3. Name it: "Bhavana Counselling"
4. Click **"Create"**

### Step 2: Enable Google Calendar API

1. In your project, go to **"APIs & Services" → "Library"**
2. Search for **"Google Calendar API"**
3. Click on it and press **"Enable"**

### Step 3: Create OAuth 2.0 Credentials

1. Go to **"APIs & Services" → "Credentials"**
2. Click **"Create Credentials" → "OAuth client ID"**
3. First time? Click **"Configure consent screen"**:
   - Choose **"External"** (unless you have Google Workspace)
   - App name: **"Bhavana Counselling Booking"**
   - User support email: **your-email@gmail.com**
   - Developer contact: **your-email@gmail.com**
   - Click **"Save and Continue"**
   - Scopes: Click **"Add or Remove Scopes"**
     - Search and add: `https://www.googleapis.com/auth/calendar`
     - Click **"Update"** → **"Save and Continue"**
   - Test users: Add your email
   - Click **"Save and Continue"**

4. Now go back to **"Credentials"** → **"Create Credentials" → "OAuth client ID"**
5. Application type: **"Web application"**
6. Name: **"Booking System"**
7. Authorized redirect URIs → Click **"Add URI"**:
   - For local testing: `http://localhost:3000/api/auth/google/callback`
   - For production: `https://yourdomain.com/api/auth/google/callback`
8. Click **"Create"**
9. **SAVE THESE VALUES:**
   - Client ID: `xxxxx.apps.googleusercontent.com`
   - Client Secret: `xxxxx`

### Step 4: Get Refresh Token

**Option A: Using Node.js Script (Easiest)**

1. Create a file `get-google-token.js` in your project:

```javascript
const { google } = require('googleapis');
const readline = require('readline');

// Paste your Client ID and Client Secret here
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
const REDIRECT_URI = 'http://localhost:3000/api/auth/google/callback';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// Generate auth URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent'
});

console.log('\n🔐 Step 1: Authorize this app by visiting this URL:\n');
console.log(authUrl);
console.log('\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Step 2: Enter the code from that page here: ', async (code) => {
  rl.close();
  
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ Success! Here are your tokens:\n');
    console.log('GOOGLE_CLIENT_ID=', CLIENT_ID);
    console.log('GOOGLE_CLIENT_SECRET=', CLIENT_SECRET);
    console.log('GOOGLE_REFRESH_TOKEN=', tokens.refresh_token);
    console.log('\n📋 Copy these values to your .env.local file!');
  } catch (error) {
    console.error('Error getting tokens:', error);
  }
});
```

2. Run it:
```bash
node get-google-token.js
```

3. Click the URL that appears
4. Sign in with YOUR Google account (the one you want to receive bookings)
5. Click **"Allow"**
6. Copy the code from the URL and paste it in the terminal
7. **COPY THE REFRESH TOKEN** that appears

**Option B: Using OAuth Playground**

1. Go to: https://developers.google.com/oauthplayground/
2. Click the ⚙️ (settings) icon in top right
3. Check **"Use your own OAuth credentials"**
4. Paste your Client ID and Client Secret
5. In left panel, find **"Calendar API v3"**
6. Select: `https://www.googleapis.com/auth/calendar`
7. Click **"Authorize APIs"**
8. Sign in with your Google account
9. Click **"Allow"**
10. Click **"Exchange authorization code for tokens"**
11. **COPY THE REFRESH TOKEN**

### Step 5: Configure Environment Variables

Open `.env.local` in your project and add:

```bash
# Google Calendar API
GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
```

**For Production:**
```bash
GOOGLE_REDIRECT_URI=https://yourdomain.com/api/auth/google/callback
```

### Step 6: Test It!

1. Restart your dev server:
```bash
npm run dev
```

2. Go to: http://localhost:3000/booking
3. Book a session
4. Complete demo payment
5. Check YOUR Google Calendar - the event should appear! 📅

---

## 🎥 What Gets Created in Google Calendar

### Event Details:
- **Title**: "Therapy Session - [Client Name]"
- **Duration**: 50 minutes
- **Description**: 
  - Package name
  - Payment ID
  - Amount paid
- **Location**: Google Meet (auto-generated)
- **Attendees**: 
  - You (therapist) - Organizer
  - Client - Guest
- **Reminders**:
  - Email 1 day before
  - Popup 1 hour before

### Google Meet Link:
- Automatically created by Google
- Unique for each session
- Sent to both you and client
- No setup needed - just click and join!

---

## 📧 Email Notifications

### Client Receives:
✉️ **From Google Calendar:**
- Subject: "Invitation: Therapy Session - [Their Name] @ [Date/Time]"
- Contains:
  - Date and time
  - Google Meet link
  - "Add to Calendar" button
  - Option to accept/decline

### You Receive:
✉️ **From Google Calendar:**
- Event added to your calendar
- Client's email and name
- Payment confirmation
- Google Meet link

---

## 🔍 Troubleshooting

### Issue: "Failed to create calendar event"

**Check 1:** Verify API is enabled
```
Go to: console.cloud.google.com
→ APIs & Services → Library
→ Search "Google Calendar API"
→ Should say "Manage" (not "Enable")
```

**Check 2:** Verify credentials in `.env.local`
```bash
# Make sure these are filled in:
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxx
GOOGLE_REFRESH_TOKEN=xxxxx
```

**Check 3:** Test refresh token
```bash
# Run this in terminal:
curl -d "client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&refresh_token=YOUR_REFRESH_TOKEN&grant_type=refresh_token" https://oauth2.googleapis.com/token
```

Should return an access token. If error, regenerate refresh token.

### Issue: "Invalid grant" or "Token expired"

**Solution:** Regenerate refresh token
- The refresh token might have expired
- Follow Step 4 again to get a new one
- Update `.env.local`

### Issue: Client not receiving email

**Check:**
1. Verify client's email is correct
2. Check their spam folder
3. Make sure `sendUpdates: 'all'` is in the calendar event code

---

## 🔒 Security Notes

1. **Never commit `.env.local`** to git
2. **Keep refresh token secret** - it gives full access to your calendar
3. **Use service account** for production (more secure)
4. **Enable 2FA** on your Google account
5. **Regularly review** OAuth apps in your Google account

---

## 🚀 Production Deployment

When deploying (Vercel, Netlify, etc.):

1. Add environment variables in your hosting dashboard
2. Update redirect URI to your domain
3. Update it in Google Cloud Console too
4. Test thoroughly before going live

---

## 💡 Advanced: Using Service Account (Recommended for Production)

Service accounts are more secure and don't require refresh tokens.

1. In Google Cloud Console → "Credentials"
2. "Create Credentials" → "Service Account"
3. Download JSON key file
4. Share your calendar with the service account email
5. Update code to use service account instead

This is more complex but better for production!

---

## ❓ FAQ

**Q: Does the client need a Google account?**
A: No! They'll receive an email with the Meet link. They can join as a guest.

**Q: Can I use a different calendar app?**
A: The system is built for Google Calendar, but you can modify the code for Outlook, Apple Calendar, etc.

**Q: What if I want to cancel a booking?**
A: You can delete the event from your Google Calendar, and it will notify the client.

**Q: Can multiple therapists use this?**
A: Yes! Each therapist needs their own OAuth credentials and .env setup.

**Q: Is the Google Meet link secure?**
A: Yes! Each session gets a unique, randomly generated Meet link.

---

## 📞 Need Help?

If you're stuck:
1. Check the error in terminal
2. Verify all environment variables
3. Test with OAuth Playground
4. Review Google Cloud Console logs

The system will fall back gracefully - even if calendar fails, the booking still succeeds and shows the success page.

