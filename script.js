// ==========================================================================
// COLOR CONSTANTS
// Modify these values to test changes to Tailwind theme colors.
// ==========================================================================
const COLORS = {
    background: "#fdf6e3",
    surface: "#eee8d5",
    "on-background": "#657b83",
    "on-surface": "#586e75",
    primary: "#2aa198",
    "on-primary": "#fdf6e3",
    secondary: "#cb4b16",
    "on-secondary": "#fdf6e3",
    tertiary: "#b58900",
    "on-tertiary": "#fdf6e3",
    outline: "#93a1a1",
    "outline-variant": "#eee8d5",
    "surface-container": "#eee8d5",
    "surface-container-low": "#fdf6e3",
    "surface-container-high": "#eee8d5",
    "surface-container-highest": "#93a1a1",
    "inverse-surface": "#002b36",
    "inverse-on-surface": "#839496",
    "surface-variant": "#eee8d5",
    "on-surface-variant": "#586e75",
    
    // Dark mode specific colors
    dark: {
        background: "#002b36",
        surface: "#073642",
        "on-background": "#839496",
        "on-surface": "#93a1a1",
        primary: "#2aa198",
        secondary: "#cb4b16",
        tertiary: "#b58900"
    }
};

// ==========================================================================
// TAILWIND CONFIGURATION
// ==========================================================================
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "background": COLORS.background,
                "surface": COLORS.surface,
                "on-background": COLORS["on-background"],
                "on-surface": COLORS["on-surface"],
                "primary": COLORS.primary,
                "on-primary": COLORS["on-primary"],
                "secondary": COLORS.secondary,
                "on-secondary": COLORS["on-secondary"],
                "tertiary": COLORS.tertiary,
                "on-tertiary": COLORS["on-tertiary"],
                "outline": COLORS.outline,
                "outline-variant": COLORS["outline-variant"],
                "surface-container": COLORS["surface-container"],
                "surface-container-low": COLORS["surface-container-low"],
                "surface-container-high": COLORS["surface-container-high"],
                "surface-container-highest": COLORS["surface-container-highest"],
                "inverse-surface": COLORS["inverse-surface"],
                "inverse-on-surface": COLORS["inverse-on-surface"],
                "surface-variant": COLORS["surface-variant"],
                "on-surface-variant": COLORS["on-surface-variant"],
                "dark-background": COLORS.dark.background,
                "dark-surface": COLORS.dark.surface,
                "dark-on-background": COLORS.dark["on-background"],
                "dark-on-surface": COLORS.dark["on-surface"],
                "dark-primary": COLORS.dark.primary,
                "dark-secondary": COLORS.dark.secondary,
                "dark-tertiary": COLORS.dark.tertiary
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "unit": "4px",
                "xl": "48px",
                "xs": "4px",
                "sm": "8px",
                "container-max": "1280px",
                "xxl": "80px",
                "lg": "24px",
                "md": "16px",
                "gutter": "24px"
            },
            "fontFamily": {
                "display-lg": ["Hanken Grotesk"],
                "headline-lg-mobile": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"],
                "body-md": ["Hanken Grotesk"],
                "body-lg": ["Hanken Grotesk"],
                "headline-lg": ["Hanken Grotesk"],
                "label-md": ["JetBrains Mono"],
                "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                "headline-lg-mobile": ["28px", { "lineHeight": "1.2", "fontWeight": "700" }],
                "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
                "label-md": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.02em", "fontWeight": "500" }],
                "label-sm": ["12px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500" }]
            }
        },
    },
};

// ==========================================================================
// INTERACTIVE FUNCTIONS
// ==========================================================================
function openPrivacyModal() {
    document.getElementById('privacy-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
    document.getElementById('privacy-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePrivacyModal();
});

function handleConsent(choice) {
    gtag('consent', 'update', { 'analytics_storage': choice });
    localStorage.setItem('ga-consent', choice);
    document.getElementById('consent-banner').classList.add('hidden');
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const icon = document.querySelector('[onclick="toggleDarkMode()"] span');
    if (document.documentElement.classList.contains('dark')) {
        icon.innerText = 'light_mode';
    } else {
        icon.innerText = 'dark_mode';
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    icon.innerText = isOpen ? 'menu' : 'close';
    document.getElementById('mobile-menu-btn').setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    menu.classList.add('hidden');
    icon.innerText = 'menu';
    document.getElementById('mobile-menu-btn').setAttribute('aria-label', 'Open menu');
}

// Simple parallax effect for floating card
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.shadow-lg');
    if (card && !card.closest('button')) { // Avoid moving the button
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const body = btn.nextElementSibling;
            const icon = btn.querySelector('.material-symbols-outlined');
            const isOpen = !body.classList.contains('hidden');
            body.classList.toggle('hidden');
            icon.style.transform = isOpen ? '' : 'rotate(180deg)';
            btn.setAttribute('aria-expanded', String(!isOpen));
        });
    });
});

// Dynamic Navigation Active State Tracking
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('ga-consent')) {
        document.getElementById('consent-banner').classList.remove('hidden');
    }

    const navLinks = document.querySelectorAll('#nav-links .nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Intersection Observer to highlight current section on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -40% 0px', // triggers when section is in the middle window view
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        // Set Active classes
                        link.classList.add('text-primary', 'font-bold', 'border-primary');
                        link.classList.remove('text-on-surface-variant', 'dark:text-dark-on-background', 'border-transparent', 'font-medium');
                    } else {
                        // Set Inactive classes
                        link.classList.remove('text-primary', 'font-bold', 'border-primary');
                        link.classList.add('text-on-surface-variant', 'dark:text-dark-on-background', 'border-transparent', 'font-medium');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Handle direct click in case observer is delayed or user is at scroll boundaries
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Smooth scroll natively (will fall back to CSS behavior)
                    target.scrollIntoView({ behavior: 'smooth' });

                    // Manually force active state instantly on click
                    navLinks.forEach(l => {
                        if (l === link) {
                            l.classList.add('text-primary', 'font-bold', 'border-primary');
                            l.classList.remove('text-on-surface-variant', 'dark:text-dark-on-background', 'border-transparent', 'font-medium');
                        } else {
                            l.classList.remove('text-primary', 'font-bold', 'border-primary');
                            l.classList.add('text-on-surface-variant', 'dark:text-dark-on-background', 'border-transparent', 'font-medium');
                        }
                    });

                    // Update hash without jump
                    history.pushState(null, null, href);
                }
            }
        });
    });
});
