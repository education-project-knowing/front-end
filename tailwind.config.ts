import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {
        border: '(var(--border))',
        input: '(var(--input))',
        ring: '(var(--ring))',
        background: 'var(--background)',
        foreground: '(var(--foreground))',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: '(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '(var(--secondary))',
          foreground: '(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: '(var(--destructive))',
          foreground: '(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '(var(--muted))',
          foreground: '(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '(var(--accent))',
          foreground: '(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: '(var(--popover))',
          foreground: '(var(--popover-foreground))',
        },
        card: {
          DEFAULT: '(var(--card))',
          foreground: '(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
