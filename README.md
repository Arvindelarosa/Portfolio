# Arvin M. Dela Rosa - Portfolio

A beautiful, responsive personal portfolio website built with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.

## Features

✨ **Modern Design**
- Dark theme with glassmorphism effects
- Beautiful gradient text and animations
- Smooth transitions throughout

📱 **Fully Responsive**
- Mobile-first approach
- Works perfectly on all devices
- Touch-friendly navigation

🎨 **Animations & Effects**
- Smooth scroll navigation
- Fade-in animations
- Hover effects on cards
- Progress bar animations
- Floating elements

🔧 **Technologies Used**
- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **CSS Frameworks:** Bootstrap 5.3, Tailwind CSS
- **Icons:** Font Awesome 6.4
- **No Build Tools Required:** Works directly in browser

## File Structure

```
myportfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS with animations
├── script.js           # JavaScript interactions
├── public/             # Static assets folder (for images)
└── DEPLOYMENT_GUIDE.md # Deployment instructions
```

## Quick Start

1. **Open the Portfolio**
   - Simply open `index.html` in your browser
   - No installation or build process needed!

2. **Customize Your Information**
   - Edit `index.html` and replace:
     - "Arvin M. Dela Rosa" → Your name
     - Email address → Your email
     - GitHub/LinkedIn URLs → Your profiles
     - Project descriptions → Your projects
     - Photo URL → Your photo

3. **Change the Photo**
   - Replace the placeholder image URL:
     ```html
     src="https://via.placeholder.com/300x300?text=Your+Photo"
     ```
   - Upload your photo and use its URL, or
   - Use a local image by replacing with: `src="path/to/your/photo.jpg"`

## Sections

### 1. **Home / About Me**
- Personal introduction
- Photo/profile image
- Biggest accomplishment
- Interests & goals

### 2. **Skills**
- Programming languages with proficiency levels
- Frameworks & libraries
- Tools & platforms

### 3. **Projects**
- E-Commerce Platform
- Task Management Mobile App
- (Edit to add your real projects)

### 4. **Reflection**
- Answers to 5 rubric questions
- Technology choices
- Challenges & achievements
- Future goals

### 5. **Contact**
- Contact information
- Social media links
- Contact form

## Customization

### Update Your Skills
Edit the skill cards in `index.html`:
```html
<li class="mb-3 d-flex justify-content-between align-items-center">
    <span>Your Skill</span>
    <div class="progress-bar-custom" style="width: 85%;">
        <div class="progress-fill" style="width: 85%;"></div>
    </div>
</li>
```

### Add Your Projects
Add new project cards by duplicating the project card structure:
```html
<div class="col-lg-6 col-md-12">
    <div class="project-card">
        <!-- Your project details -->
    </div>
</div>
```

### Change Colors
The main colors are defined in `styles.css`:
```css
:root {
    --primary-color: #06b6d4;    /* Cyan */
    --secondary-color: #3b82f6;  /* Blue */
    --accent-color: #8b5cf6;     /* Purple */
}
```

## Deployment

### Option 1: Deploy to Vercel (Recommended - Free!)
1. Push your files to GitHub
2. Go to https://vercel.com
3. Sign up and connect your GitHub repository
4. Click "Deploy"
5. Your portfolio is live!

### Option 2: Deploy to GitHub Pages (Free!)
1. Create a GitHub repository named `username.github.io`
2. Push your portfolio files
3. Your site is live at `https://username.github.io`

### Option 3: Deploy to Any Web Host
- Upload `index.html`, `styles.css`, and `script.js` to your hosting provider
- No backend required!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

✅ **Optimized for:**
- Fast loading (no build process needed)
- Low bandwidth usage
- Smooth animations
- Mobile performance

## Credits

- **Bootstrap:** https://getbootstrap.com
- **Tailwind CSS:** https://tailwindcss.com
- **Font Awesome:** https://fontawesome.com
- **Placeholder Images:** https://via.placeholder.com

## License

Free to use and modify for personal projects.

## Tips

1. **Add Your Photo**
   - Use a square photo for best results
   - Size: 300x300px recommended
   - Format: JPG, PNG, or WebP

2. **Update Contact Links**
   - Replace placeholder emails
   - Add real GitHub, LinkedIn, Twitter URLs

3. **Customize Reflection Answers**
   - Make them personal and detailed
   - Show your understanding of technologies

4. **Add More Projects**
   - Include real projects or academic work
   - Provide GitHub links and live demos

5. **Mobile Testing**
   - Test on your phone/tablet
   - Check all interactive elements

## Need Help?

- **Bootstrap Documentation:** https://getbootstrap.com/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **HTML Guide:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Guide:** https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**Happy Coding! 🚀**

Your portfolio is ready to showcase your skills to the world!
