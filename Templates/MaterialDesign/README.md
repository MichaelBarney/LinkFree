# Material Design LinkFree Template

A modern LinkFree template following Google's Material Design 3 guidelines.

## Features

- **Material Design 3**: Latest Google design system with updated color schemes and typography
- **Material Icons**: Official Google Material Icons for a polished look
- **Roboto Font**: Google's signature typeface for Material Design
- **Elevation System**: Multiple shadow levels for depth and hierarchy
- **Ripple Effects**: Interactive touch feedback on link cards
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Smooth Animations**: Material motion with cubic-bezier easing
- **Accessibility**: Proper focus states and semantic HTML
- **State Layers**: Hover and active states following Material guidelines

## Customization

### Colors

Edit the CSS variables in `style.css` to match your brand:

```css
:root {
    --md-primary: #6750A4;        /* Primary brand color */
    --md-primary-container: #EADDFF;
    --md-on-primary: #FFFFFF;
    /* ... more color variables */
}
```

### Content

Update the following in `index.html`:

1. **Profile Photo**: Replace the `src` in the `<img>` tag
2. **Name & Username**: Update the text in profile card
3. **Bio**: Modify the profile description
4. **Links**: Add/remove link cards as needed
5. **Icons**: Change Material Icons to match your needs (see [Material Icons](https://fonts.google.com/icons))

### Adding New Links

Copy and paste this structure to add more links:

```html
<a href="YOUR_URL" class="md-link-card" target="_blank">
    <span class="material-icons link-icon">ICON_NAME</span>
    <div class="link-content">
        <span class="link-title">Title</span>
        <span class="link-subtitle">Subtitle</span>
    </div>
    <span class="material-icons link-arrow">arrow_forward</span>
    <div class="md-ripple"></div>
</a>
```

## Material Design Resources

- [Material Design 3](https://m3.material.io/)
- [Material Icons](https://fonts.google.com/icons)
- [Material Color System](https://m3.material.io/styles/color/overview)
- [Material Typography](https://m3.material.io/styles/typography/overview)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This template is part of the LinkFree project and follows the same license.
