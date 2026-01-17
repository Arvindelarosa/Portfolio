# 🚀 UPLOAD PORTFOLIO TO GITHUB - AUTOMATED

## ✅ What You Need:

1. **GitHub Account**: https://github.com/Arvindelarosa ✅ (You have this)
2. **GitHub Repository**: https://github.com/Arvindelarosa/Portfolio ✅ (Created)
3. **Personal Access Token**: Follow the steps below

---

## 🔑 Step 1: Create GitHub Personal Access Token

1. **Go to**: https://github.com/settings/tokens
2. **Click**: "Generate new token (classic)"
3. **Fill in**:
   - Token name: `Portfolio Deployment`
   - Expiration: 90 days (or longer)
4. **Select Scopes** (checkboxes):
   - ✅ `repo` (full control of private repositories)
   - Other checkboxes can stay unchecked
5. **Click**: "Generate token"
6. **COPY THE TOKEN** (⚠️ Only shown once!)
   - Save it somewhere safe
   - You'll use this token

---

## ▶️ Step 2: Run Deployment Script

**Once you have your token:**

### Option A: Run Python Script (Easiest)
```bash
cd C:\myportfolio
python deploy-to-github.py
```

Then paste your token when asked.

### Option B: Upload Manually on GitHub

1. Go to: https://github.com/Arvindelarosa/Portfolio
2. Click: "Add file" → "Upload files"
3. Drag & drop all files from `C:\myportfolio`
4. SKIP these folders:
   - `.next/`
   - `node_modules/`
   - `.git/`
5. Click: "Commit changes"

---

## 📋 Personal Access Token Generation (Images Guide)

```
https://github.com/settings/tokens
    ↓
Click "Generate new token (classic)"
    ↓
Name: "Portfolio Deployment"
Expiration: 90 days
    ↓
Select "repo" scope ✅
    ↓
Click "Generate token"
    ↓
COPY THE TOKEN (save it!)
```

---

## 🎯 After Token is Created:

Run this command:
```bash
python deploy-to-github.py
```

Paste your token when prompted, and watch your portfolio upload! 🚀

---

## ✨ When Upload is Complete:

Your repository will be at:
```
https://github.com/Arvindelarosa/Portfolio
```

Then deploy to Vercel:
1. Go to: https://vercel.com/new
2. Select your GitHub repository
3. Click "Deploy"
4. **LIVE IN 2 MINUTES!** 🎉

---

## 🆘 Troubleshooting

**"Token is invalid"**
- Make sure you copied the FULL token
- Token expires if not used quickly
- Create a new one if needed

**"Repository not found"**
- Make sure URL is: `https://github.com/Arvindelarosa/Portfolio`
- Check repository exists and is PUBLIC

**"Permission denied"**
- Token needs `repo` scope selected
- Create a new token with correct permissions

---

## 📍 NEXT STEPS:

1. ✅ Create Personal Access Token (takes 2 minutes)
2. ✅ Run Python script
3. ✅ Wait for upload to complete
4. ✅ Go to Vercel and deploy
5. ✅ Get your LIVE portfolio URL!

---

**Your portfolio will be LIVE on Vercel in minutes!** 🚀

Repository: https://github.com/Arvindelarosa/Portfolio
