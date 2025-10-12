# Origami Theme

> A beautiful LinkFree theme inspired by the art of origami paper folding

## Features

- 🎨 Paper-inspired color palette with soft, warm tones
- 📄 Folded paper corner effects on cards
- 🦢 Decorative animated origami bird element
- 🌊 3D transform effects on hover
- 📱 Fully responsive design
- 🎭 Soft shadows mimicking paper depth

## Preview

The theme features:
- Gradient background in warm peachy tones
- Paper-textured content card with folded corner
- Profile photo with layered circular borders
- Link cards with origami-style folded corners
- Hover effects that lift and tilt the cards
- Floating origami bird decoration

## Customization

### To Use

1. Fork and Clone the repo
2. Navigate to `Templates/Origami/`
3. Edit `index.html`:
   - Change the title:
     ```html
     <title>Your Name | Origami Theme</title>
     ```
   - Update the profile photo:
     ```html
     <img id="userPhoto" src="your-image-url.jpg" alt="Your Name">
     ```
   - Change the username:
     ```html
     <h1><a href="#" id="userName">@yourusername</a></h1>
     ```
   - Add/Replace your links by editing or adding:
     ```html
     <a class="link" href="https://your-link.com" target="_blank">
         <span class="link-text">Your Link Title</span>
     </a>
     ```

### Color Customization

Edit the CSS variables in `style.css`:

```css
:root {
    --paper-white: #fafafa;        /* Main card background */
    --paper-cream: #f5f1e8;        /* Content background */
    --fold-shadow: #d4cfc4;        /* Paper fold shadows */
    --accent-coral: #ff6b6b;       /* Primary accent color */
    --accent-teal: #4ecdc4;        /* Secondary accent color */
    --text-dark: #2d3436;          /* Main text color */
    --text-light: #636e72;         /* Footer text color */
}
```

You can also modify the background gradient in the `body` selector:
```css
background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
```

## Credits

Theme inspired by the delicate art of origami paper folding, bringing elegance and creativity to your link page.

## License

Free to use and modify for personal and commercial projects.
