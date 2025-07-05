/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        "-1": "-1",
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'Segoe UI', 'sans-serif'],
        'heading': ['Montserrat', 'Inter', 'Segoe UI', 'sans-serif'],
        'body': ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.025em' }],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
        'xl': '0 12px 24px rgba(0, 0, 0, 0.2)',
        '2xl': '0 16px 32px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const textShadows = theme('textShadow');
      const utilities = Object.entries(textShadows).reduce((acc, [key, value]) => {
        acc[`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`] = {
          'text-shadow': value,
        };
        return acc;
      }, {});
      addUtilities(utilities);
    },
  ],
};
