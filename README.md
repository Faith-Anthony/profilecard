#  Profile Card - Faith Anthony

A sleek, modern, and aesthetic profile card built with **HTML**, **CSS**, and **Vanilla JavaScript**. This is a professional-grade UI component showcasing a portfolio-style profile with real-time updates.

##  Features

- **Responsive Design** - Mobile-first approach, works seamlessly from 320px to 1200px+
- **Modern Aesthetic** - Clean, minimal design with subtle animations and smooth transitions
- **Dark Mode Support** - Automatic light/dark theme based on system preferences
- **Accessibility** - WCAG AA compliant with keyboard navigation and screen reader support
- **Real-time Updates** - Live millisecond counter using `Date.now()`
- **Social Links** - Quick access to social media profiles (GitHub, X, LinkedIn, Instagram)
- **Interactive Elements** - Smooth hover effects and touch-friendly buttons
- **No Dependencies** - Pure vanilla JavaScript, no frameworks or libraries required

## 📁 Project Structure

```
profilecard/
├── index.html          # Main HTML file with semantic markup
├── styles.css          # Complete styling with CSS variables
├── script.js           # Vanilla JavaScript functionality
├── images/             # Profile image directory
│   └── profile.jpg     # Your profile picture here
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Open in Browser (Easiest)
1. Navigate to the project folder
2. Double-click `index.html`
3. Your profile card opens in the default browser

### Option 2: Local Server (Recommended)

**Using Python 3:**
```bash
cd f:\HNG\Profilecard
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Python 2:**
```bash
cd f:\HNG\Profilecard
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
cd f:\HNG\Profilecard
http-server
```

**Using VS Code Live Server:**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## 📸 Adding Your Profile Picture

1. **Create/Locate Image**
   - Recommended: 400x400 pixels or larger
   - Formats: `.jpg`, `.png`, or `.webp`
   - Keep file size under 500KB

2. **Add to Project**
   - Place your image in the `images/` folder
   - Rename to `profile.jpg` (or update src in HTML if different name)

3. **Update HTML (if needed)**
   ```html
   <img 
       data-testid="test-user-avatar"
       src="images/your-filename.jpg" 
       alt="Faith Anthony, Frontend developer" 
       class="profile-avatar"
   >
   ```

## 🧪 Testing

### Required Test IDs
The component includes all necessary `data-testid` attributes for automated testing:

| Element | Test ID |
|---------|---------|
| Root Container | `test-profile-card` |
| User Name | `test-user-name` |
| User Bio | `test-user-bio` |
| Time Display | `test-user-time` |
| Avatar Image | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| GitHub Link | `test-user-social-github` |
| X Link | `test-user-social-twitter` |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |

### Manual Testing Checklist

**Functionality:**
- [ ] Millisecond counter updates every 1 second
- [ ] Social links open in new tab (`target="_blank"`)
- [ ] All links are keyboard accessible (Tab navigation)
- [ ] Hover effects work on all interactive elements

**Responsive:**
- [ ] Mobile layout (320px) - vertical stack
- [ ] Tablet layout (640px) - no breaks
- [ ] Desktop layout (1200px+) - side-by-side layout
- [ ] No horizontal scrolling on any screen size

**Accessibility:**
- [ ] Good color contrast (WCAG AA)
- [ ] Avatar has descriptive alt text
- [ ] Focus visible styles appear on Tab
- [ ] Dark mode respects system preferences
- [ ] Works with keyboard-only navigation

**Visual:**
- [ ] Social icons display correctly (no text labels)
- [ ] Avatar has blue border, no gradient
- [ ] Smooth transitions on hover
- [ ] Clean, minimal aesthetic

### Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Content Details

### Profile Information
- **Name:** Faith Anthony
- **Role:** Frontend Developer
- **Bio:** Frontend developer passionate about building clean, responsive, and accessible web interfaces.

### Hobbies
- Coding
- Music
- Travelling
- Hanging out with friends

### Dislikes
- Slow internet
- Too much noise

### Social Links
- GitHub: `https://github.com/Faith-Anthony`
- X: `https://x.com/Fainoch`
- LinkedIn: `https://linkedin.com/in/faith-enoch`
- Instagram: `https://instagram.com`

## 🎨 Design System

### Color Palette
- **Primary Accent:** Blue (`#0066ff`)
- **Background:** Off-white (`#fcfbf7`) / Dark (`#0f0f0f`)
- **Text Primary:** Near-black (`#1a1a1a`) / Light (`#f5f5f5`)
- **Text Secondary:** Gray (`#666666`)

### Spacing Scale
- `xs`: 0.5rem
- `sm`: 0.75rem
- `md`: 1rem
- `lg`: 1.5rem
- `xl`: 2rem
- `2xl`: 2.5rem

### Border Radius
- Default: 12px
- Avatar: 50% (circular)
- Buttons: 8px

### Transitions
- Fast: 0.15s ease
- Base: 0.2s ease
- Slow: 0.3s ease

## 🔧 Customization

### Change Accent Color
Edit in `styles.css`:
```css
:root {
    --color-accent: #0066ff;  /* Change this to your color */
    --color-accent-hover: #0052cc;
}
```

### Modify Profile Information
Edit in `index.html`:
```html
<h1 data-testid="test-user-name" class="profile-name">Your Name</h1>
<p data-testid="test-user-bio" class="profile-bio">Your bio here</p>
```

### Add/Remove Social Links
Add new link in the social nav:
```html
<a href="url" target="_blank" rel="noopener noreferrer" class="social-link">
    <svg><!-- icon --></svg>
</a>
```

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

Layout adjusts automatically based on screen size.

## ♿ Accessibility Features

✅ Semantic HTML (`<article>`, `<section>`, `<nav>`, `<figure>`)
✅ WCAG AA color contrast compliance
✅ Keyboard navigation (Tab, Enter)
✅ Focus visible indicators
✅ Dark mode support
✅ Reduced motion support
✅ High contrast mode support
✅ Screen reader friendly
✅ Proper alt text on images
✅ Link target security (`rel="noopener noreferrer"`)

## 🎯 Performance

- **No external dependencies** - Pure HTML/CSS/JS
- **No runtime overhead** - < 1KB gzipped JavaScript
- **Optimized CSS** - CSS variables for efficient theming
- **Fast rendering** - Semantic HTML structure
- **Minimal repaints** - Efficient animations with GPU acceleration

## 📝 Notes

### Millisecond Counter
- Updates every 1 second using `setInterval()`
- Shows milliseconds since Unix Epoch (January 1, 1970)
- Formatted with commas for readability
- Automatically cleans up on page unload

### Browser Features Used
- CSS Custom Properties (Variables)
- CSS Grid & Flexbox
- CSS Media Queries
- JavaScript `Date.now()`
- JavaScript `setInterval()`
- Modern JavaScript (ES6)

## 🐛 Troubleshooting

**Images not loading?**
- Check file path in `src` attribute
- Ensure image is in `images/` folder
- Verify browser allows local file access

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Verify CSS file exists and is readable

**JavaScript not working?**
- Check console for errors (F12)
- Verify script.js is in project root
- Ensure `<script>` tag points to correct file

**Dark mode not working?**
- Check system preferences
- Try different browser
- Some browsers require explicit support

## 📄 License

This project is open source and free to use and modify.

## 👤 Author

**Faith Anthony** - Frontend Developer

---

**Happy coding! 🚀**
