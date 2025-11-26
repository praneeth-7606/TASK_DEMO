/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                bg: '#0f1724',
                surface: '#0b1220',
                muted: '#94a3b8',
                text: '#e6eef8',
                accent: '#00e6d3',
                'accent-2': '#3bf0ff',
                glass: 'rgba(255,255,255,0.04)',
            },
            borderRadius: {
                card: '12px',
                btn: '8px',
            },
            boxShadow: {
                soft: '0 2px 8px rgba(0, 0, 0, 0.12)',
                'soft-md': '0 4px 16px rgba(0, 0, 0, 0.16)',
                'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.2)',
                glow: '0 0 20px rgba(59, 240, 255, 0.3)',
                'glow-strong': '0 0 30px rgba(59, 240, 255, 0.5)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'scroll': 'scroll 20s linear infinite',
            },
        },
    },
    plugins: [],
}
