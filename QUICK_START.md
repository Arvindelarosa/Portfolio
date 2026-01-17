# 🚀 Quick Start & Deployment Guide

## ⚡ Quick Start (30 seconds)

```bash
# 1. Navigate to project
cd c:\myportfolio

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

**Done!** Portfolio is live locally. ✅

---

## 📦 Build for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start
```

---

## ☁️ Deploy to Vercel (Recommended - FREE)

### Step 1: Push to GitHub
```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. **Done!** Your portfolio is live at `https://your-project.vercel.app`

**Benefits**:
- ✅ Free hosting
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ SSL certificate included
- ✅ Edge Network CDN
- ✅ Serverless functions ready

---

## 🔧 Customization Quick Reference

### Change Name
```tsx
// src/components/Hero.tsx (line 30)
<span className="gradient-text">YOUR NAME</span>

// src/components/Footer.tsx (line 11)
<p>© {currentYear} YOUR NAME.</p>

// src/components/Navigation.tsx (line 20)
// Change "AMD" to your initials
```

### Change Accomplishment
```tsx
// src/components/Hero.tsx (lines 42-50)
<div className="glass p-6">
  <h3>🏆 Your Accomplishment Here</h3>
  <p>Your accomplishment description...</p>
</div>
```

### Change Skills
```tsx
// src/components/Skills.tsx (lines 30-50)
const programmingLanguages = [
  { name: "JavaScript", level: 95 },
  { name: "Your Skill", level: XX },
  // Add more...
];

const toolsAndFrameworks = [
  { name: "React", level: 90 },
  // Add more...
];
```

### Add/Edit Projects
```tsx
// src/components/Projects.tsx (lines 35-80)
const projects = [
  {
    title: "Your Project Name",
    role: "Your Role",
    description: "Project description...",
    techStack: ["Tech1", "Tech2", "Tech3"],
    link: "https://project-link.com",
    github: "https://github.com/yourrepo",
    color: "from-blue-500 to-cyan-500",
  },
  // Add more projects...
];
```

### Update Reflection Answers
```tsx
// src/components/Reflection.tsx (lines 30-70)
const reflections = [
  {
    question: "What technologies did I use and why?",
    answer: "Your detailed answer here...",
    icon: "🛠️",
  },
  // All 5 questions...
];
```

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: "#3b82f6",  // Change blue
  glow: "#60a5fa",    // Change glow
}
```

### Change Fonts
Edit `app/layout.tsx`:
```tsx
import { Inter, Poppins } from "next/font/google";

const customFont = Poppins({
  subsets: ["latin"],
});
```

---

## 📋 Pre-Deployment Checklist

- [ ] All personal details updated (name, skills, projects)
- [ ] Reflection section completed (all 5 questions answered)
- [ ] Links point to correct GitHub/projects
- [ ] Social media links added (optional)
- [ ] No console errors (`npm run dev` → open DevTools F12)
- [ ] Responsive design tested (F12 → toggle device toolbar)
- [ ] All animations working smoothly
- [ ] Load times acceptable (DevTools → Network)

---

## 🔗 Add Your Social Links

### Add GitHub Link
```tsx
// src/components/Hero.tsx & Footer.tsx
<motion.a
  href="https://github.com/YOUR_USERNAME"
  // ... rest of code
>
  <FaGithub size={24} />
</motion.a>
```

### Add LinkedIn Link
```tsx
// src/components/Hero.tsx & Footer.tsx
<motion.a
  href="https://linkedin.com/in/YOUR_PROFILE"
  // ... rest of code
>
  <FaLinkedin size={24} />
</motion.a>
```

### Add Email Link
```tsx
// Footer already has this
<motion.a href="mailto:your.email@example.com" ... >
```

---

## 🎯 What to Include for Rubric

### For Presentation/Submission:

1. **Link to Live Portfolio**
   ```
   https://your-project.vercel.app
   ```

2. **GitHub Repository Link**
   ```
   https://github.com/YOUR_USERNAME/portfolio
   ```

3. **Design Decisions Document**
   - Explain glassmorphism choice
   - Explain color scheme
   - Explain animation purpose
   - Reference: [DESIGN_JUSTIFICATION_GUIDE.md](DESIGN_JUSTIFICATION_GUIDE.md)

4. **Technical Stack Explanation**
   - Why Next.js?
   - Why React?
   - Why Tailwind CSS?
   - Why Framer Motion?

5. **Screenshots**
   - Desktop view
   - Mobile view
   - Tablet view

6. **Feature Walkthrough**
   - Navigation works
   - Animations trigger
   - Responsive design
   - Reflection section complete

---

## 🐛 Troubleshooting

### "npm run dev" gives error
```bash
# Install dependencies
npm install

# If still error, clear node_modules
rm -r node_modules package-lock.json
npm install
```

### Animations not working
- Check browser DevTools console for errors (F12)
- Ensure Framer Motion installed: `npm install framer-motion`
- Hard refresh browser (Ctrl+Shift+R)

### Styles look wrong
- Check if Tailwind CSS built: `npm run build`
- Verify globals.css imported in layout.tsx
- Hard refresh browser cache

### Can't deploy to Vercel
- Ensure code is pushed to GitHub
- Check for build errors: `npm run build`
- Verify environment variables set (none needed for this project)

### Mobile view broken
- Open DevTools (F12)
- Click "Toggle device toolbar" (Ctrl+Shift+M)
- Test on different device sizes
- Check Tailwind responsive classes (md:, lg:)

---

## 📊 Performance Tips

### Optimize Images (if adding photos)
```tsx
import Image from "next/image";

<Image
  src="/your-photo.jpg"
  alt="Description"
  width={256}
  height={256}
  priority  // Only for above-fold images
/>
```

### Monitor Bundle Size
```bash
npm run build
# Check .next/static/chunks for file sizes
```

### Lighthouse Score
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Aim for 90+ scores

---

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build optimized version
npm start              # Start production server

# Linting
npm run lint           # Check code quality

# Clean
npm run clean          # Remove build files
rm -r node_modules    # Remove dependencies
```

---

## 🌍 Custom Domain (Optional)

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Enter your domain
5. Follow DNS configuration steps

**Cost**: Varies (register domain separately on Namecheap, GoDaddy, etc.)

---

## 📱 Mobile Optimization

### Test Mobile Experience
```bash
# Option 1: DevTools
F12 → Toggle device toolbar (Ctrl+Shift+M)

# Option 2: Actual device
npm run dev
# Access via: http://YOUR_IP:3000 (replace YOUR_IP)
```

### Common Mobile Issues
- ✅ Buttons are large enough (48x48px minimum)
- ✅ Text is readable (16px+)
- ✅ Spacing is comfortable (not cramped)
- ✅ Animations aren't choppy
- ✅ No horizontal scrolling

---

## 🔒 Security (Basic)

This portfolio doesn't handle sensitive data, but for future:

```bash
# Keep dependencies updated
npm audit
npm audit fix

# Use environment variables for secrets
# Create .env.local file (gitignore it)
NEXT_PUBLIC_API_URL=your_api_url
```

---

## 📈 Analytics (Optional)

### Add Google Analytics

```bash
npm install @next/google-analytics
```

Then add to `layout.tsx`:
```tsx
import GoogleAnalytics from "@next/google-analytics";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```

Set `NEXT_PUBLIC_GA_ID` in `.env.local`

---

## 📞 Get Help

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Vercel Support**: https://vercel.com/support

---

## ✅ Final Checklist Before Submission

- [ ] Portfolio runs without errors locally
- [ ] All sections complete and styled
- [ ] Personal information up to date
- [ ] Reflection section thoroughly answered
- [ ] Mobile version tested and works
- [ ] Animations smooth (60fps)
- [ ] Deployed to Vercel (or alternative)
- [ ] Links to GitHub and live site working
- [ ] Design decisions documented
- [ ] Ready for presentation

**You're ready to submit! 🎉**

---

**Need help? Check PORTFOLIO_DESIGN_GUIDE.md or README_SUBMISSION.md**
