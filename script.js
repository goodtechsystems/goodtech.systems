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
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const icon = document.querySelector('[onclick="toggleDarkMode()"] span');
    if (document.documentElement.classList.contains('dark')) {
        icon.innerText = 'light_mode';
    } else {
        icon.innerText = 'dark_mode';
    }
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
