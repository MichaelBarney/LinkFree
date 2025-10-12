# Cubism Theme

A LinkFree theme inspired by the Cubism art movement, featuring geometric shapes, angular forms, and fragmented perspectives.

## Features

- **Geometric Design**: Angular shapes and polygons inspired by Cubist art
- **Animated Background**: Floating geometric shapes with rotation animations
- **Modern Layout**: Clean, centered design with bold typography
- **Responsive**: Fully responsive design that works on all devices
- **Customizable**: Easy to modify colors, links, and content

## Preview

The theme features:
- Diamond-shaped profile image frame with rotation effect
- Angular link buttons with shadow effects
- Animated geometric background shapes
- Smooth hover animations
- Custom clip-path designs for a fragmented aesthetic

## Customization

### Colors
Edit the CSS variables in `style.css` to customize the color scheme:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #f39c12;
    --accent-blue: #3498db;
    --accent-green: #2ecc71;
}
```

### Profile Information
Edit `index.html` to add your information:
- Profile image URL
- Your name
- Bio/tagline
- Social media links

### Links
Add or modify links in the `.links-section` of `index.html`. Each link follows this structure:
```html
<a href="your-url" target="_blank" class="link-item">
    <div class="link-content">
        <i class="fab fa-icon-name"></i>
        <span>Link Text</span>
    </div>
</a>
```

## Credits

Created for the LinkFree project. Inspired by the Cubism art movement pioneered by Pablo Picasso and Georges Braque.
