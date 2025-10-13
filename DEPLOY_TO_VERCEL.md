# 🚀 Deploy to Vercel - Quick Guide

## ⚠️ GitHub Pages Won't Work

This website **cannot** be deployed to GitHub Pages because:
- ❌ It needs server-side code
- ❌ It has API routes for payments
- ❌ It requires backend processing

**Use Vercel instead** - it's **FREE** and takes 5 minutes! ⚡

---

## 🎯 Step-by-Step: Deploy to Vercel

### Step 1: Push to GitHub

```bash
# If you haven't already set up git remote:
# 1. Go to GitHub.com
# 2. Click "New Repository"
# 3. Name it: bhavana-website
# 4. DON'T initialize with README
# 5. Copy the commands shown, then run:

git remote add origin https://github.com/YOUR_USERNAME/bhavana-website.git
git branch -M main
git push -u origin main
```

Your code is now on GitHub! ✅

---

### Step 2: Sign Up for Vercel

1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. You're logged in! ✅

---

### Step 3: Import Your Project

1. On Vercel dashboard, click **"Add New Project"**
2. Click **"Import"** next to your **bhavana-website** repository
3. Vercel automatically detects it's a Next.js app ✅
4. **Configure:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)

---

### Step 4: Add Environment Variables

Click **"Environment Variables"** and add these:

```env
NEXT_PUBLIC_BASE_URL
https://your-project-name.vercel.app
(You'll update this after first deploy)

PHONEPE_DEMO_MODE
true

PHONEPE_MERCHANT_ID
DEMO_MERCHANT_ID

PHONEPE_SALT_KEY
DEMO_SALT_KEY

PHONEPE_SALT_INDEX
1

PHONEPE_API_ENDPOINT
https://api-preprod.phonepe.com/apis/pg-sandbox

GOOGLE_CLIENT_ID
(Leave empty for now, add later)

GOOGLE_CLIENT_SECRET
(Leave empty for now, add later)

GOOGLE_REDIRECT_URI
https://your-project-name.vercel.app/api/auth/google/callback

GOOGLE_REFRESH_TOKEN
(Leave empty for now, add later)
```

**Note:** Demo mode will work without real credentials!

---

### Step 5: Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes (watch the build logs - cool to see! 🎬)
3. You'll see: **"🎉 Congratulations!"**
4. Click **"Visit"** to see your live site!

Your website is now **LIVE** on the internet! 🌍

---

### Step 6: Update Base URL

1. Copy your Vercel URL (e.g., `bhavana-website.vercel.app`)
2. In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
3. Edit `NEXT_PUBLIC_BASE_URL`
4. Change to: `https://your-actual-url.vercel.app`
5. Click **"Redeploy"** button in Deployments tab

---

## 🎉 You're Done!

Your website is live at: `https://your-project-name.vercel.app`

### What Works Now:
✅ All pages (Home, Booking, About, Resources)
✅ Demo booking flow
✅ Demo payment simulation
✅ Responsive design
✅ HTTPS (automatic)
✅ Global CDN (fast worldwide)

### To Enable Later:
⏳ Real PhonePe payments (when you get merchant account)
⏳ Google Calendar integration (follow GOOGLE_CALENDAR_SETUP.md)

---

## 🔄 Making Updates

Whenever you make changes:

```bash
# Make changes to your code
# Then commit and push:

git add .
git commit -m "Update: describe your changes"
git push

# Vercel automatically:
# 1. Detects the push
# 2. Builds your site  
# 3. Deploys automatically
# 4. Site updates in 1-2 minutes!
```

---

## 🌐 Add Custom Domain (Optional)

1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. In Vercel: **Settings** → **Domains**
3. Add your domain: `bhavanacounselling.com`
4. Follow DNS instructions
5. Wait ~1 hour for SSL
6. Your site is now at your custom domain! ✅

---

## 💡 Pro Tips

### Free Vercel Features:
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth*
- ✅ Auto-scaling
- ✅ Preview deployments for every branch
- ✅ Rollback to any previous version
- ✅ Analytics (enable in settings)

*Fair use policy applies

### Preview Deployments:
Every push to a branch (not main) gets its own preview URL for testing!

```bash
git checkout -b test-changes
git push origin test-changes
# Vercel gives you a preview URL to test!
```

---

## 🐛 Troubleshooting

### Build Failed?

**Check build logs** in Vercel dashboard:
- Look for red error messages
- Usually missing dependencies or environment variables

**Test locally first:**
```bash
npm run build
npm start
# If it works locally, it should work on Vercel
```

### Site Shows Error?

**Check:**
1. Environment variables are set correctly
2. `NEXT_PUBLIC_BASE_URL` matches your Vercel URL
3. No `.env.local` committed to git (it's in .gitignore)

### Need Help?

- Vercel Support: https://vercel.com/support
- Vercel Docs: https://vercel.com/docs
- Next.js Discord: https://nextjs.org/discord

---

## 📊 Monitor Your Site

### Enable Analytics:
1. Vercel Dashboard → Your Project
2. **Analytics** tab
3. Click **"Enable"**
4. See visitors, performance, errors

### Check Logs:
- Vercel Dashboard → **Logs**
- See all API calls, errors, warnings
- Great for debugging!

---

## 💰 Pricing

**Free Tier Includes:**
- 100 GB bandwidth/month
- Unlimited sites
- Unlimited team members
- SSL certificates
- DDoS protection

**You only pay if you exceed free tier** (unlikely for small business site)

---

## ✅ Deployment Checklist

Before going fully live with real clients:

- [ ] Website deployed to Vercel ✅
- [ ] Custom domain added (optional)
- [ ] Test all pages work
- [ ] Test demo booking flow works
- [ ] Update contact information
- [ ] Replace testimonials with real ones
- [ ] Add your real photo
- [ ] Set up Google Calendar (follow guide)
- [ ] Set up PhonePe merchant account
- [ ] Test real payment flow
- [ ] Enable analytics
- [ ] Share with friends for testing
- [ ] Go live! 🎉

---

## 🎊 Success!

Your website is now:
- ✅ Live on the internet
- ✅ Accessible from anywhere
- ✅ Fast (global CDN)
- ✅ Secure (HTTPS)
- ✅ Auto-updates when you push to GitHub

**Share your link and start accepting bookings!** 🚀

---

Need the full deployment guide? See: **DEPLOYMENT.md**

