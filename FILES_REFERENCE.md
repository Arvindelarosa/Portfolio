# 📊 Portfolio Files Reference Guide

## 📂 File Organization & Purpose

### 📚 Documentation Files (Start Here!)

```
00_START_HERE.md
└─ Overview & Quick Next Steps
   ├─ What you've received
   ├─ Timeline to submission (67 min total)
   ├─ How to talk about your portfolio
   ├─ Rubric scoring confidence
   └─ STATUS: ✅ Read This First!

DELIVERY_SUMMARY.md
└─ Complete delivery confirmation
   ├─ What's included checklist
   ├─ Rubric coverage (100%)
   ├─ Next steps options
   └─ Verification checklist

INDEX.md
└─ Navigation hub for all documentation
   ├─ Quick navigation to all guides
   ├─ Portfolio features overview
   ├─ Rubric alignment
   ├─ Quick start commands
   └─ STATUS: ✅ Use as Reference

QUICK_START.md
└─ Setup, Customization & Deployment (5 min read)
   ├─ Quick start commands (30 sec)
   ├─ Build for production
   ├─ Deploy to Vercel (FREE)
   ├─ Customization quick reference
   ├─ Troubleshooting guide
   └─ STATUS: ✅ For Setup & Deployment

README_SUBMISSION.md
└─ How to Justify Your Design (For Rubric/Presentation)
   ├─ Design philosophy
   ├─ All component explanations
   ├─ Why each technology
   ├─ How to present design
   └─ STATUS: ✅ Before Presenting

PORTFOLIO_DESIGN_GUIDE.md
└─ Deep Design Theory & Architecture (For Understanding)
   ├─ Design philosophy (glassmorphism + dark mode)
   ├─ Component breakdown
   ├─ Animation strategy
   ├─ Color scheme & typography
   ├─ Responsive design strategy
   ├─ Performance optimizations
   └─ STATUS: ✅ For Design Deep Dive

DESIGN_JUSTIFICATION_GUIDE.md
└─ Complete Scripts for Explaining Design (Ready-to-Use)
   ├─ Glassmorphism explanation
   ├─ Dark mode justification
   ├─ Color choice reasoning
   ├─ Animation purposes
   ├─ Responsive design rationale
   ├─ Technology stack reasoning
   ├─ Unique vs. template differentiation
   └─ STATUS: ✅ Copy-Paste Scripts Ready

RUBRIC_DEFENSE_SCRIPTS.md
└─ Complete Rubric Question Answers (For Grading)
   ├─ Design approach scripts
   ├─ Color scheme justification
   ├─ Animation purposes
   ├─ Technical stack reasoning
   ├─ Full rubric answers with scripts
   ├─ One-minute elevator pitch
   └─ STATUS: ✅ Rubric-Ready Answers

SUBMISSION_PACKAGE_SUMMARY.md
└─ Complete Package Overview (Comprehensive)
   ├─ What you have breakdown
   ├─ Component breakdown
   ├─ Design system reference
   ├─ Animation strategy
   ├─ Rubric coverage matrix
   ├─ Deployment options
   └─ STATUS: ✅ Full Reference

THIS FILE: FILES_REFERENCE.md
└─ Quick lookup guide for all files
```

---

## 💻 Source Code Files

### `app/page.tsx`
**Purpose**: Main portfolio page integrating all components

```tsx
import Navigation from "@/src/components/Navigation";
import Hero from "@/src/components/Hero";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Reflection from "@/src/components/Reflection";
import Footer from "@/src/components/Footer";
```

**Contains**: All component imports and layout
**Customize**: Usually no changes needed (components handle content)

---

### `app/layout.tsx`
**Purpose**: Root layout with metadata

```tsx
export const metadata: Metadata = {
  title: "Arvin M. Dela Rosa - Full Stack Developer",
  description: "Professional portfolio showcasing...",
};
```

**Customize**:
- Change `title` to your portfolio title
- Change `description` for SEO

---

### `app/globals.css`
**Purpose**: Dark mode styles, glass effects, animations

```css
@import "tailwindcss";

/* Dark mode setup */
:root {
  --background: #0f172a;
  --foreground: #f1f5f9;
}

/* Glass containers */
.glass {
  @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-xl;
}

/* Animations */
@keyframes float { /* ... */ }
```

**Contains**:
- Dark mode color variables
- `.glass` and `.gradient-text` classes (used throughout)
- Animation definitions
- Responsive utilities

**Don't change unless**: You want to modify colors or animation timings

---

## 🧩 Component Files

### `src/components/Navigation.tsx`
**Purpose**: Fixed header with navigation

**Key Elements**:
```tsx
- Logo "AMD" (clickable → scrolls to home)
- Nav items: Home, Skills, Projects, Reflection
- Active indicator with animation
- Contact CTA button
- Glass effect container
- Sticky positioning at top
```

**Customize**:
- Line 10: Change "AMD" to your initials
- Line 18-22: Add/remove nav items
- Line 53: Change "Contact" button link

---

### `src/components/Hero.tsx`
**Purpose**: Hero/about section with introduction

**Key Elements**:
```tsx
- Animated background blobs
- Profile photo placeholder (initials + gradient)
- Main heading with gradient text
- Subheading (profession)
- Accomplishment card
- Interests card
- Tech stack pills
- CTA buttons
- Floating animation
```

**Customize** (Make These Changes):
- **Line 30**: `<span className="gradient-text">Your Name</span>`
- **Lines 42-50**: Update accomplishment card
- **Lines 51-60**: Update interests card
- **Lines 63-72**: Update tech stack pills
- **Replace photo**: Replace gradient/initials with `<Image>` tag

---

### `src/components/Skills.tsx`
**Purpose**: Show technical skills with categories

**Key Elements**:
```tsx
- Two-column layout
- Programming Languages category
- Tools/Frameworks/Platforms category
- Animated progress bars
- In-view triggers (animate when scrolled into view)
- Skill proficiency percentages
```

**Customize** (Make These Changes):
- **Lines 30-35**: Update `programmingLanguages` array
  ```tsx
  const programmingLanguages = [
    { name: "JavaScript", level: 95 },
    { name: "Your Skill", level: YY }, // Change these
  ];
  ```
- **Lines 37-42**: Update `toolsAndFrameworks` array
  ```tsx
  const toolsAndFrameworks = [
    { name: "React", level: 90 },
    { name: "Your Tool", level: YY }, // Change these
  ];
  ```

---

### `src/components/Projects.tsx`
**Purpose**: Showcase projects in grid layout

**Key Elements**:
```tsx
- Responsive grid (1-3 columns)
- Project cards with:
  - Gradient header background
  - Project title with emoji
  - Role label
  - Description
  - Tech stack tags (max 3 + counter)
  - Live and Code buttons
- Hover effects (lift, glow)
```

**Customize** (Make These Changes):
- **Lines 35-80**: Update `projects` array
  ```tsx
  const projects = [
    {
      title: "Your Project Name",
      role: "Your Role",
      description: "Project description here...",
      techStack: ["Tech1", "Tech2", "Tech3", "Tech4"],
      link: "https://project-url.com",
      github: "https://github.com/repo",
      color: "from-blue-500 to-cyan-500", // Pick a gradient
    },
    // Add more projects...
  ];
  ```

**Color Options for Projects**:
- `"from-blue-500 to-cyan-500"` - Blue
- `"from-purple-500 to-pink-500"` - Purple-Pink
- `"from-emerald-500 to-teal-500"` - Green
- `"from-orange-500 to-red-500"` - Orange-Red
- `"from-indigo-500 to-blue-500"` - Indigo-Blue

---

### `src/components/Reflection.tsx`
**Purpose**: Answer rubric reflection questions

**Key Elements**:
```tsx
- 5 reflection cards answering:
  1. What technologies and why?
  2. Which parts were easiest?
  3. Which parts were most challenging?
  4. What to learn next?
  5. What apps to build?
- Each card has:
  - Icon (emoji)
  - Question text
  - Answer text
  - Hover effects
```

**Customize** (MUST DO - Required for Rubric):
- **Lines 30-70**: Update `reflections` array
  ```tsx
  const reflections = [
    {
      question: "What technologies did I use and why?",
      answer: "I chose Next.js because... I used React because... " // Your detailed answer
      icon: "🛠️",
    },
    {
      question: "Which parts were easiest?",
      answer: "The design system was straightforward... " // Your answer
      icon: "✨",
    },
    {
      question: "Which parts were most challenging?",
      answer: "Complex animations were challenging... " // Your answer
      icon: "🎯",
    },
    {
      question: "What do I want to learn next?",
      answer: "I want to learn advanced animations... " // Your answer
      icon: "🚀",
    },
    {
      question: "What apps do I want to build?",
      answer: "I want to build AI-powered tools... " // Your answer
      icon: "💡",
    },
  ];
  ```

---

### `src/components/Footer.tsx`
**Purpose**: Footer with contact info and social links

**Key Elements**:
```tsx
- Three-column layout:
  - Brand info
  - Quick links
  - Contact CTA
- Social media links (GitHub, LinkedIn, Email)
- Copyright notice
- Responsive grid
```

**Customize**:
- **Line 11**: Your name in copyright
- **Line 17**: Add/remove quick links
- **Email link**: Change to your email
- **Social links**: Update GitHub and LinkedIn URLs

---

## ⚙️ Configuration Files

### `tailwind.config.ts`
**Purpose**: Tailwind CSS configuration with custom theme

```typescript
colors: {
  primary: "#0f172a",      // Dark navy
  secondary: "#1e293b",    // Slate
  accent: "#3b82f6",       // Blue
  glow: "#60a5fa"          // Light blue
}

boxShadow: {
  glow: "0 0 20px rgba(59, 130, 246, 0.5)",
  "glow-lg": "0 0 40px rgba(59, 130, 246, 0.6)",
  glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
}
```

**Customize**: Change colors to match your brand

---

### `package.json`
**Purpose**: Project metadata and dependencies

```json
{
  "name": "myportfolio",
  "dependencies": {
    "framer-motion": "^12.26.2",
    "next": "16.1.3",
    "react": "19.2.3",
    "react-icons": "^5.5.0"
  }
}
```

**Scripts**:
- `npm run dev` - Start dev server
- `npm run build` - Build production
- `npm start` - Start production server
- `npm run lint` - Check code quality

---

### `tsconfig.json`
**Purpose**: TypeScript configuration

**Contains**: Type checking settings (usually no changes needed)

---

## 📋 Edit Checklist

### Must Edit (Personalization)
- [ ] Hero.tsx - Your name (line 30)
- [ ] Hero.tsx - Accomplishment (lines 42-50)
- [ ] Hero.tsx - Interests (lines 51-60)
- [ ] Skills.tsx - Your skills (lines 30-42)
- [ ] Projects.tsx - Your projects (lines 35-80)
- [ ] Reflection.tsx - Your answers (lines 30-70) **← REQUIRED**
- [ ] Footer.tsx - Your name (line 11)

### Should Edit (Enhancement)
- [ ] app/layout.tsx - Page title & description
- [ ] Footer.tsx - Social links (GitHub, LinkedIn)
- [ ] Navigation.tsx - Logo initials (optional)
- [ ] Colors in tailwind.config.ts (optional)

### Can Ignore (Advanced)
- app/globals.css - Animation timings
- tailwind.config.ts - Advanced styling
- tsconfig.json - Type checking settings

---

## 📊 File Size Reference

| File | Purpose | Lines | Complexity |
|------|---------|-------|-----------|
| Hero.tsx | Hero section | ~120 | Medium |
| Skills.tsx | Skills grid | ~100 | Medium |
| Projects.tsx | Project cards | ~150 | Medium |
| Reflection.tsx | Reflection | ~120 | Low |
| Navigation.tsx | Header nav | ~80 | Low |
| Footer.tsx | Footer | ~90 | Low |
| globals.css | Styles | ~80 | Low |
| page.tsx | Main | ~15 | Very Low |
| layout.tsx | Layout | ~30 | Very Low |

---

## 🔍 Quick Find Guide

**Need to change your name?**
→ Search for "AMD" or "Arvin" in:
  - Hero.tsx (line 30)
  - Footer.tsx (line 11)
  - Navigation.tsx (logo)

**Need to add skills?**
→ Edit Skills.tsx lines 30-42

**Need to add projects?**
→ Edit Projects.tsx lines 35-80

**Need to answer reflection?**
→ Edit Reflection.tsx lines 30-70 **← IMPORTANT**

**Need to change colors?**
→ Edit tailwind.config.ts or globals.css

**Need to customize animations?**
→ Edit globals.css @keyframes section

---

## ✅ Pre-Submission File Checklist

- [ ] All 6 components present (Navigation, Hero, Skills, Projects, Reflection, Footer)
- [ ] All CSS files intact (globals.css)
- [ ] All configuration files present (tailwind.config.ts, tsconfig.json, next.config.ts)
- [ ] All 8 documentation files included
- [ ] Package.json with correct dependencies
- [ ] No broken imports
- [ ] No console errors when running `npm run dev`

---

## 📞 File Reference by Need

| Your Need | File to Edit |
|-----------|--------------|
| Change your name | Hero.tsx + Footer.tsx |
| Change accomplishment | Hero.tsx (lines 42-50) |
| Change interests | Hero.tsx (lines 51-60) |
| Add/edit skills | Skills.tsx (lines 30-42) |
| Add/edit projects | Projects.tsx (lines 35-80) |
| Answer reflection questions | **Reflection.tsx (lines 30-70)** ← REQUIRED |
| Change social links | Footer.tsx |
| Change colors | tailwind.config.ts |
| Change animations | globals.css |
| Change page title/description | app/layout.tsx |
| Understand design | PORTFOLIO_DESIGN_GUIDE.md |
| Prepare presentation | RUBRIC_DEFENSE_SCRIPTS.md |
| Deploy online | QUICK_START.md |

---

**You now have a complete file reference. Happy coding! 🚀**
