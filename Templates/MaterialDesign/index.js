// Material Design Ripple Effect
document.addEventListener('DOMContentLoaded', function() {
    const linkCards = document.querySelectorAll('.md-link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = this.querySelector('.md-ripple');
            
            if (ripple) {
                // Remove existing animation
                ripple.style.animation = 'none';
                
                // Trigger reflow
                void ripple.offsetWidth;
                
                // Get click position relative to the card
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Position the ripple
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                // Restart animation
                ripple.style.animation = 'ripple-animation 600ms';
            }
            
            // Optional: Track link clicks for analytics
            const linkTitle = this.querySelector('.link-title');
            if (linkTitle) {
                trackLinkClick(linkTitle.textContent);
            }
        });
    });
});

// Optional: Analytics tracking function
function trackLinkClick(linkName) {
    console.log('Link clicked:', linkName);
    // Add your analytics code here (e.g., Google Analytics, Amplitude, etc.)
    // Example: gtag('event', 'click', { 'event_category': 'link', 'event_label': linkName });
}
