# 🔐 GitHub Authentication Setup

## The Problem

GitHub stopped accepting passwords in 2021. You need to use either:
1. **Personal Access Token (PAT)** - Easier, recommended
2. **SSH Keys** - More secure, one-time setup

---

## ✅ Solution 1: Personal Access Token (Easiest)

### Step 1: Create a Personal Access Token

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: **"Bhavana Website Deploy"**
4. Set expiration: **90 days** (or "No expiration" for convenience)
5. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (if you'll use GitHub Actions)
6. Scroll down and click **"Generate token"**
7. **COPY THE TOKEN NOW** - you won't see it again! 
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Use Token to Push

```bash
# First time pushing:
git push -u origin main

# When prompted for username: enter your GitHub username
# When prompted for password: PASTE THE TOKEN (not your password!)
```

### Step 3: Save Credentials (Mac)

```bash
# Tell git to remember the token:
git config --global credential.helper osxkeychain

# Now push:
git push -u origin main

# Enter username and token one more time
# Git will remember it for future pushes!
```

---

## ✅ Solution 2: SSH Keys (More Secure)

### Step 1: Check if You Have SSH Keys

```bash
ls -al ~/.ssh

# Look for files like:
# id_rsa.pub
# id_ed25519.pub
```

### Step 2: Generate New SSH Key (if needed)

```bash
# Generate key:
ssh-keygen -t ed25519 -C "your-email@example.com"

# Press Enter to accept default location
# Enter a passphrase (or leave empty)
```

### Step 3: Copy SSH Key

```bash
# Copy the public key:
cat ~/.ssh/id_ed25519.pub

# Or use pbcopy on Mac:
pbcopy < ~/.ssh/id_ed25519.pub
```

### Step 4: Add to GitHub

1. Go to: **https://github.com/settings/keys**
2. Click **"New SSH key"**
3. Title: **"MacBook Pro"** (or your device name)
4. Paste the key
5. Click **"Add SSH key"**

### Step 5: Test Connection

```bash
ssh -T git@github.com

# Should see: "Hi username! You've successfully authenticated..."
```

### Step 6: Change Remote to SSH

```bash
# Change from HTTPS to SSH:
git remote set-url origin git@github.com:YOUR_USERNAME/bhavana-website.git

# Now push:
git push -u origin main
```

---

## 🚀 Quick Commands

### If you haven't created GitHub repo yet:

```bash
# 1. Go to GitHub.com
# 2. Click "+" → "New repository"
# 3. Name: bhavana-website
# 4. Make it Private (recommended for now)
# 5. Don't initialize with README
# 6. Click "Create repository"

# 7. Then run (replace YOUR_USERNAME):
git remote add origin https://github.com/YOUR_USERNAME/bhavana-website.git
git branch -M main
git push -u origin main
# Use your token as password when prompted!
```

### If repo already exists:

```bash
# Check current remote:
git remote -v

# If it shows HTTPS, use token as password
# Or switch to SSH (see above)

git push -u origin main
```

---

## 🐛 Common Errors & Fixes

### Error: "Support for password authentication was removed"

**Fix:** Use Personal Access Token instead of password

```bash
# When prompted for password, paste your token
# Token looks like: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Error: "Permission denied (publickey)"

**Fix:** SSH key not set up correctly

```bash
# Generate and add SSH key (see Solution 2 above)
# Or switch to HTTPS with token:
git remote set-url origin https://github.com/YOUR_USERNAME/bhavana-website.git
```

### Error: "Repository not found"

**Fix:** Check repository name and URL

```bash
# Verify remote URL:
git remote -v

# Update if wrong:
git remote set-url origin https://github.com/YOUR_USERNAME/bhavana-website.git
```

### Error: "fatal: refusing to merge unrelated histories"

**Fix:** Force push (only if it's a new repo)

```bash
git push -u origin main --force
# Only use --force if you're sure!
```

---

## 📋 Complete Setup Checklist

- [ ] Created GitHub account
- [ ] Created Personal Access Token OR SSH key
- [ ] Created repository on GitHub (bhavana-website)
- [ ] Added remote: `git remote add origin ...`
- [ ] Pushed code: `git push -u origin main`
- [ ] Verified code appears on GitHub
- [ ] Ready to deploy to Vercel!

---

## 💡 Pro Tips

### Save Token Securely

**Don't save in a file!** Your token gives full access to your repos.

**Mac:** Use Keychain Access
```bash
git config --global credential.helper osxkeychain
```

**Windows:** Use Credential Manager
```bash
git config --global credential.helper wincred
```

### Use SSH for Better Security

Once set up, SSH is more secure and convenient than tokens.

### Multiple GitHub Accounts?

Use SSH config to manage multiple accounts:

```bash
# Edit ~/.ssh/config
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_work

Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_personal
```

---

## 🆘 Still Having Issues?

### Option 1: Try GitHub Desktop

Download: https://desktop.github.com/
- No command line needed
- Handles authentication automatically
- Drag and drop to commit

### Option 2: Use GitHub CLI

```bash
# Install:
brew install gh  # Mac
winget install --id GitHub.cli  # Windows

# Login:
gh auth login

# Push:
gh repo create bhavana-website --private
git push -u origin main
```

### Option 3: Skip GitHub, Deploy Directly

You can deploy to Vercel without GitHub:

```bash
# Install Vercel CLI:
npm install -g vercel

# Deploy:
vercel

# Follow prompts
# Your site will be live!
```

---

## ✅ Success Checklist

After successful push:

- [ ] Go to: https://github.com/YOUR_USERNAME/bhavana-website
- [ ] See all your files
- [ ] See green checkmark for latest commit
- [ ] Now ready to deploy to Vercel!

---

## 🚀 Next: Deploy to Vercel

Once code is on GitHub:

1. Go to: https://vercel.com/
2. Sign up with GitHub
3. Import bhavana-website repository
4. Add environment variables
5. Deploy!

See: **DEPLOY_TO_VERCEL.md**

