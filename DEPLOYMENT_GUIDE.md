# 🚀 Deploy Your Portfolio to Vercel (Free!)

## Step 1: Create GitHub Account (if you don't have one)
- Go to https://github.com
- Click "Sign up"
- Complete the registration

---

## Step 2: Install Git
**Windows:**
1. Download from: https://git-scm.com/download/win
2. Run the installer
3. Accept all default options
4. Close and reopen PowerShell

**Verify installation:**
```bash
git --version
```

---

## Step 3: Configure Git (First time only)
```bash
git config --global user.name "Arvin M. Dela Rosa"
git config --global user.email "your-email@example.com"
```

---

## Step 4: Initialize Git & Commit Your Code
Navigate to your portfolio folder and run:

```bash
cd C:\myportfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

---

## Step 5: Create a GitHub Repository
1. Go to https://github.com/new
2. Repository name: `myportfolio` (or any name)
3. Description: "My Professional Portfolio - Arvin M. Dela Rosa"
4. Choose **Public** (so it's accessible)
5. Click "Create repository"

---

## Step 6: Push Code to GitHub
Copy the commands from GitHub (after creating repo) and run in PowerShell:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/myportfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 7: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign up" → Choose "Continue with GitHub"
3. Authorize Vercel
4. Click "Import Project"
5. Select your `myportfolio` repository
6. Framework: **Next.js** (auto-detected)
7. Click "Deploy"

**Wait 1-2 minutes for deployment...**

---

## Step 8: Get Your Live URL
After deployment completes, you'll see:
```
✅ Deployment Complete
🔗 Visit: https://myportfolio-xxxxx.vercel.app
```

**Share this URL with anyone!**

---

## ✨ Your Portfolio Features

### 📱 Fully Responsive
- Works on mobile, tablet, desktop
- Touch-friendly navigation

### 🎨 Beautiful Design
- Dark mode with glassmorphism
- Smooth animations
- Gradient text effects

### 🔗 Easy Navigation
- Smooth scrolling between sections
- Fixed navigation header
- One-click project links to GitHub

### 📊 Complete Sections
- **Home/About** - Your intro & accomplishments
- **Skills** - All your technical skills with proficiency levels
- **Projects** - Your 2 real projects with GitHub links
- **Reflection** - Answers to all 5 rubric questions
- **Footer** - Social links & contact info

---

## 🔄 Making Updates

**After you make changes locally:**

```bash
cd C:\myportfolio
git add .
git commit -m "Update portfolio description"
git push
```

Vercel will automatically redeploy within 1 minute! ✨

---

## 🆘 Troubleshooting

**Problem: "git not recognized"**
- Restart PowerShell after installing Git
- Try: `refreshenv` in PowerShell

**Problem: "Authentication failed"**
- Use GitHub Personal Access Token instead of password
- Go to: https://github.com/settings/tokens
- Select `repo` scope, copy token
- Paste when asked for password

**Problem: Deployment fails**
- Check build logs on Vercel dashboard
- Ensure all files are committed: `git status`
- Try: `npm run build` locally to test

---

## 📞 Need Help?
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Next.js Docs: https://nextjs.org/docs

---

**Your portfolio will be live in minutes! 🎉**
