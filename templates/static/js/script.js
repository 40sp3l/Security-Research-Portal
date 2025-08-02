document.addEventListener('DOMContentLoaded', function() {
    // Platform icon click handler
    const platformIcons = document.querySelectorAll('.platform-icon');
    const platformSelect = document.querySelector('select[name="platform"]');

    platformIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            platformSelect.value = platform;

            // Add visual feedback
            platformIcons.forEach(i => i.style.background = 'rgba(42, 42, 58, 0.3)');
            this.style.background = 'rgba(108, 99, 255, 0.2)';

            // Focus the input field
            document.querySelector('input[name="query"]').focus();
        });
    });

    // Form submission with Enter key
    const searchInput = document.querySelector('input[name="query"]');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.querySelector('.search-button').click();
        }
    });

    // Add ripple effect to buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('search-button') || e.target.closest('.search-button')) {
            const button = e.target.classList.contains('search-button') ? e.target : e.target.closest('.search-button');
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Attribution click handler (optional)
const attribution = document.querySelector('.attribution');
if (attribution) {
    attribution.addEventListener('click', function() {
        // You could link to your portfolio or Twitter here
        // window.open('https://twitter.com/40sp3l', '_blank');

        // Or just a simple animation
        this.style.transform = 'translateY(-3px) scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'translateY(-3px)';
        }, 200);
    });
}
