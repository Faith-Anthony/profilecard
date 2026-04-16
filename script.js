/* ============================================
   PROFILE CARD - VANILLA JAVASCRIPT
   ============================================ */

/**
 * Initialize the profile card with dynamic updates
 */
function initializeProfileCard() {
    // Get the time display element
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    if (!timeElement) {
        console.warn('Time element not found');
        return;
    }

    /**
     * Update the time display
     */
    function updateTime() {
        const currentTime = Date.now();
        timeElement.textContent = currentTime.toLocaleString();
    }

    // Initial update
    updateTime();

    // Update every 1 second
    const intervalId = setInterval(updateTime, 1000);

    // Optional: Clean up interval on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(intervalId);
    });
}

/**
 * Add smooth scroll behavior for links
 */
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('[data-testid="test-user-social-links"] a');

    socialLinks.forEach((link) => {
        // Add subtle animation on click
        link.addEventListener('mousedown', function (e) {
            this.style.transform = 'scale(0.95)';
        });

        link.addEventListener('mouseup', function () {
            this.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
}

/**
 * Add keyboard navigation enhancements
 */
function initializeKeyboardNavigation() {
    const profileCard = document.querySelector('[data-testid="test-profile-card"]');
    const allFocusableElements = profileCard.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
    );

    // Track focus for visual feedback
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

/**
 * Add fade-in animation when page loads
 */
function initializePageAnimation() {
    const profileCard = document.querySelector('[data-testid="test-profile-card"]');

    if (profileCard) {
        // Initial state
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(10px)';

        // Trigger animation
        setTimeout(() => {
            profileCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 50);
    }
}

/**
 * Validate that all required data-testid attributes exist
 */
function validateProfileCard() {
    const requiredAttributes = [
        'test-profile-card',
        'test-user-name',
        'test-user-bio',
        'test-user-time',
        'test-user-avatar',
        'test-user-social-links',
        'test-user-hobbies',
        'test-user-dislikes'
    ];

    const missingAttributes = requiredAttributes.filter(attr => {
        const element = document.querySelector(`[data-testid="${attr}"]`);
        return !element;
    });

    if (missingAttributes.length > 0) {
        console.warn('Missing required data-testid attributes:', missingAttributes);
        return false;
    }

    console.log('✓ All required data-testid attributes are present');
    return true;
}

/**
 * Add touch event support for mobile interactions
 */
function initializeTouchSupport() {
    const socialLinks = document.querySelectorAll('[data-testid="test-user-social-links"] a');

    socialLinks.forEach((link) => {
        // Touch start
        link.addEventListener('touchstart', function () {
            this.style.opacity = '0.8';
        });

        // Touch end
        link.addEventListener('touchend', function () {
            this.style.opacity = '1';
        });
    });

    // Interest items
    const interestItems = document.querySelectorAll('.interest-item');
    interestItems.forEach((item) => {
        item.addEventListener('touchstart', function () {
            this.style.opacity = '0.85';
        });

        item.addEventListener('touchend', function () {
            this.style.opacity = '1';
        });
    });
}

/**
 * Initialize all profile card features
 */
function initializeApp() {
    // Validate required elements exist
    if (!validateProfileCard()) {
        console.error('Profile card validation failed');
        return;
    }

    // Initialize features
    initializePageAnimation();
    initializeProfileCard();
    initializeSocialLinks();
    initializeKeyboardNavigation();
    initializeTouchSupport();

    console.log('✓ Profile card initialized successfully');
}

/**
 * Wait for DOM to be fully loaded before initializing
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}

/**
 * Export functions for testing purposes
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        validateProfileCard
    };
}
