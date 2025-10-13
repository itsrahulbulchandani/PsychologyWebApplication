# 🚀 Deployment Guide

## ⚠️ Important: Why Not GitHub Pages?

**GitHub Pages DOES NOT work** for this project because:
- ❌ Only supports static HTML/CSS/JS
- ❌ No server-side code support
- ❌ No API routes
- ❌ No payment processing backend

This project needs a **server** to run API routes for payments and calendar integration.

---

## ✅ Recommended: Deploy to Vercel (FREE)

Vercel is made by the creators of Next.js. It's the best option!

### Step-by-Step Deployment

#### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Create .gitignore (already created)

# Add all files
git add .

# Commit
git commit -m "Initial commit: Bhavana Counselling Website"

# Create repository on GitHub
# Go to: https://github.com/new
# Name it: bhavana-website
# Don't initialize with README

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/bhavana-website.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel Website (Easiest)**

1. Go to: https://vercel.com/
2. Sign up (use GitHub account)
3. Click **"Add New Project"**
4. Click **"Import Git Repository"**
5. Select your **bhavana-website** repository
6. Vercel auto-detects Next.js settings ✅
7. **IMPORTANT**: Add Environment Variables:
   
   Click **"Environment Variables"** and add:
   ```
   NEXT_PUBLIC_BASE_URL=https://your-site.vercel.app
   PHONEPE_MERCHANT_ID=your_merchant_id
   PHONEPE_SALT_KEY=your_salt_key
   PHONEPE_SALT_INDEX=1
   PHONEPE_API_ENDPOINT=https://api.phonepe.com/apis/hermes
   PHONEPE_DEMO_MODE=true  (remove this when you have real credentials)
   
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   GOOGLE_REDIRECT_URI=https://your-site.vercel.app/api/auth/google/callback
   GOOGLE_REFRESH_TOKEN=your_refresh_token
   ```

8. Click **"Deploy"**
9. Wait 2-3 minutes
10. Your site is live! 🎉

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts
# Link to existing project? No
# Project name? bhavana-website
# Directory? ./
# Override settings? No

# Deploy to production
vercel --prod
```

#### 3. Configure Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `bhavanacounselling.com`
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic, ~1 hour)

#### 4. Update Environment Variables

After deployment, update:

```bash
# In Vercel Dashboard → Settings → Environment Variables
# Update redirect URLs to your actual domain:

NEXT_PUBLIC_BASE_URL=https://bhavanacounselling.com
GOOGLE_REDIRECT_URI=https://bhavanacounselling.com/api/auth/google/callback
```

Also update in Google Cloud Console:
- OAuth redirect URI: `https://bhavanacounselling.com/api/auth/google/callback`

#### 5. Test Production Site

1. Visit your Vercel URL
2. Test all pages
3. **Test booking flow** (demo mode should work)
4. Check API routes are working

---

## 🔧 Alternative: Deploy to Netlify

### Steps:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build the site
npm run build

# Deploy
netlify deploy --prod

# Follow prompts
# Site name: bhavana-website
# Publish directory: .next
```

**Add Environment Variables:**
1. Go to: Netlify Dashboard → Site Settings → Environment Variables
2. Add all variables (same as Vercel list above)

---

## 🐳 Alternative: Deploy to Railway

Railway offers free tier with Docker support.

### Steps:

1. Go to: https://railway.app/
2. Sign up with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your repository
6. Railway auto-detects Next.js ✅
7. Add environment variables in Settings
8. Deploy!

---

## 🔒 Pre-Deployment Checklist

Before deploying to production:

### Security:
- [ ] `.env.local` is in `.gitignore` (never commit secrets!)
- [ ] All sensitive credentials are in environment variables
- [ ] HTTPS is enabled (automatic on Vercel/Netlify)

### Functionality:
- [ ] Test all pages locally
- [ ] Test booking flow
- [ ] Test payment (demo mode first)
- [ ] Verify email sending (if configured)
- [ ] Check mobile responsiveness

### Content:
- [ ] Update contact information
- [ ] Replace placeholder testimonials with real ones
- [ ] Add real qualifications
- [ ] Upload actual PDF resources
- [ ] Add your professional photo
- [ ] Review all text content

### Third-Party Services:
- [ ] PhonePe merchant account approved
- [ ] Google Calendar OAuth configured
- [ ] Redirect URIs updated with production domain
- [ ] PhonePe production API endpoint set

### Performance:
- [ ] Run: `npm run build` (check for errors)
- [ ] Test production build locally: `npm start`
- [ ] Check Lighthouse score

---

## 🌐 After Deployment

### 1. Update Google Calendar Redirect URI

In Google Cloud Console:
1. Go to Credentials → Your OAuth Client
2. Update Authorized redirect URIs:
   - Add: `https://your-domain.vercel.app/api/auth/google/callback`
   - Or: `https://yourdomain.com/api/auth/google/callback`
3. Save

### 2. Update PhonePe Redirect URL

In PhonePe Dashboard:
1. Update callback URL to your production domain
2. Test with PhonePe test credentials first
3. Then switch to live mode

### 3. Test Everything

- [ ] Home page loads
- [ ] All navigation works
- [ ] Booking calendar shows
- [ ] Payment flow completes
- [ ] Calendar events are created
- [ ] Emails are sent

### 4. Enable Analytics (Optional)

Add Google Analytics or Plausible:

```typescript
// In app/layout.tsx, add to <head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

---

## 🔄 Continuous Deployment

Once set up with Vercel or Netlify:

```bash
# Any push to main branch automatically deploys!
git add .
git commit -m "Update content"
git push

# Vercel/Netlify automatically:
# 1. Detects the push
# 2. Builds your site
# 3. Deploys to production
# 4. You get a notification
```

---

## 💰 Costs

### Free Forever (for moderate traffic):
- **Vercel**: 100GB bandwidth/month, unlimited deployments
- **Netlify**: 100GB bandwidth/month, 300 build minutes
- **Railway**: $5 credit/month (enough for small sites)

### Paid Services:
- **PhonePe**: Transaction fees (~2%)
- **Domain**: ~$10-15/year (optional, can use free .vercel.app)
- **Email service**: Free tier available (SendGrid, Resend)

---

## 📊 Monitoring

### Vercel Analytics (Free)
- Page views
- Performance metrics
- Error tracking

Enable in: Vercel Dashboard → Analytics

### Error Tracking
Consider adding:
- Sentry (free tier)
- LogRocket (free tier)

---

## 🆘 Troubleshooting Deployment

### Build Fails

**Error: Missing dependencies**
```bash
# Locally, check if build works:
npm run build

# If successful, should work on Vercel
```

**Error: Environment variables not found**
- Add them in Vercel Dashboard → Settings → Environment Variables
- Redeploy

### API Routes Return 404

**Check:**
- App Router structure is correct (`app/api/...`)
- Files are named `route.ts`
- Functions are exported properly

### Redirects Not Working

**Update:**
```javascript
// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}
```

---

## 🎉 Success!

Once deployed:
1. Share your link with friends for testing
2. Test on different devices
3. Gradually onboard real clients
4. Monitor for any issues

Your website is now live and accessible worldwide! 🌍

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Community: https://github.com/vercel/next.js/discussions

