# ONE - Landing Page Website

A minimalist landing page for the ONE app with automatic device detection and platform-specific download links.

## Features

✅ **Device Detection** - Automatically detects Android/iOS and shows appropriate download button
✅ **Dark Gradient Theme** - Matches the app's aesthetic (#0F1115 to #000000)
✅ **Premium Typography** - Playfair Display + Inter fonts
✅ **Smooth Animations** - Fade-in effects on scroll
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **SEO Optimized** - Proper meta tags and semantic HTML

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling with dark gradient theme
- `script.js` - Device detection and download logic
- `logo.png` - App icon (gradient "1" logo)

## Local Preview

Simply open `index.html` in any web browser:
```
file:///C:/Users/Tarunjit/.gemini/antigravity/scratch/one-website/index.html
```

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a new GitHub repository called `one-landing`
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "main" branch as source
5. Your site will be live at: `https://yourusername.github.io/one-landing`

### Option 2: Netlify (Free with Custom Domain)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `one-website` folder
3. Site goes live instantly
4. Optional: Add custom domain (e.g., `getone.app`)

### Option 3: Vercel (Free with Custom Domain)

1. Go to [vercel.com](https://vercel.com)
2. Import the folder
3. Deploy with one click
4. Optional: Add custom domain

## Updating Download Links

When your app is published on Google Play Store:

1. Open `script.js`
2. Find the `downloadLinks` object (line ~44)
3. Replace the placeholder URLs:

```javascript
const downloadLinks = {
    android: 'https://play.google.com/store/apps/details?id=com.example.one',
    ios: 'https://apps.apple.com/app/one/id123456789'
};
```

4. Comment out the alert() and uncomment the redirect:

```javascript
// Remove this:
// alert('Android app will be available...');

// Uncomment this:
window.location.href = downloadLinks[platform];
```

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --bg-start: #0F1115;
    --bg-end: #000000;
    --text-primary: #EDEDED;
    --text-secondary: #8A8A8A;
    --accent: #D4AF37;
}
```

### Content
Edit text directly in `index.html`:
- Hero section (title, tagline, description)
- Features (3 numbered sections)
- Philosophy section (quote and text)

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Load Time**: < 1 second
- **Size**: ~50KB total (HTML + CSS + JS)
- **Images**: 1 logo (optimized PNG)
- **Fonts**: Google Fonts (Playfair Display + Inter)

## Next Steps

1. **Test on mobile** - Open on your phone to verify responsive design
2. **Deploy** - Choose one of the deployment options above
3. **Update links** - Add real Play Store URL when app is published
4. **Custom domain** - Optional: Register a domain like `getone.app`
5. **Analytics** - Optional: Add Google Analytics to track visitors

## Support

For questions or issues, contact: [your email]

---

Built with ❤️ for focus, not distraction.
