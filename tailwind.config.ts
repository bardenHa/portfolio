// TODO: for pruduction builds, purge unused styles, minify, etc. - https://tailwindcss.com/docs/optimizing-for-production

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{astro,md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
          4: 'var(--primary-4)',
          5: 'var(--primary-5)',
          6: 'var(--primary-6)',
          7: 'var(--primary-7)',
          8: 'var(--primary-8)',
          9: 'var(--primary-9)',
          10: 'var(--primary-10)',
          11: 'var(--primary-11)',
          12: 'var(--primary-12)',
        },
        neutral: {
          1: 'var(--neutral-1)',
          2: 'var(--neutral-2)',
          3: 'var(--neutral-3)',
          4: 'var(--neutral-4)',
          5: 'var(--neutral-5)',
          6: 'var(--neutral-6)',
          7: 'var(--neutral-7)',
          8: 'var(--neutral-8)',
          9: 'var(--neutral-9)',
          10: 'var(--neutral-10)',
          11: 'var(--neutral-11)',
          12: 'var(--neutral-12)',
        },
        'neutral-inverse': {
          1: 'var(--neutral-inverse-1)',
          2: 'var(--neutral-inverse-2)',
          3: 'var(--neutral-inverse-3)',
          4: 'var(--neutral-inverse-4)',
          5: 'var(--neutral-inverse-5)',
          6: 'var(--neutral-inverse-6)',
          7: 'var(--neutral-inverse-7)',
          8: 'var(--neutral-inverse-8)',
          9: 'var(--neutral-inverse-9)',
          10: 'var(--neutral-inverse-10)',
          11: 'var(--neutral-inverse-11)',
          12: 'var(--neutral-inverse-12)',
        },
        success: {
          1: 'var(--success-1)',
          2: 'var(--success-2)',
          3: 'var(--success-3)',
          4: 'var(--success-4)',
          5: 'var(--success-5)',
          6: 'var(--success-6)',
          7: 'var(--success-7)',
          8: 'var(--success-8)',
          9: 'var(--success-9)',
          10: 'var(--success-10)',
          11: 'var(--success-11)',
          12: 'var(--success-12)',
        },
        warning: {
          1: 'var(--warning-1)',
          2: 'var(--warning-2)',
          3: 'var(--warning-3)',
          4: 'var(--warning-4)',
          5: 'var(--warning-5)',
          6: 'var(--warning-6)',
          7: 'var(--warning-7)',
          8: 'var(--warning-8)',
          9: 'var(--warning-9)',
          10: 'var(--warning-10)',
          11: 'var(--warning-11)',
          12: 'var(--warning-12)',
        },
        danger: {
          1: 'var(--danger-1)',
          2: 'var(--danger-2)',
          3: 'var(--danger-3)',
          4: 'var(--danger-4)',
          5: 'var(--danger-5)',
          6: 'var(--danger-6)',
          7: 'var(--danger-7)',
          8: 'var(--danger-8)',
          9: 'var(--danger-9)',
          10: 'var(--danger-10)',
          11: 'var(--danger-11)',
          12: 'var(--danger-12)',
        },
        info: {
          1: 'var(--info-1)',
          2: 'var(--info-2)',
          3: 'var(--info-3)',
          4: 'var(--info-4)',
          5: 'var(--info-5)',
          6: 'var(--info-6)',
          7: 'var(--info-7)',
          8: 'var(--info-8)',
          9: 'var(--info-9)',
          10: 'var(--info-10)',
          11: 'var(--info-11)',
          12: 'var(--info-12)',
        },
        // Semantic tokens
        content: {
          neutral: { primary: 'var(--content-neutral)', secondary: 'var(--content-neutral-secondary)' },
        },
        border: {
          neutral: 'var(--border-neutral)',
        },
        text: {
          secondary: 'var(--text-secondary)',
        },
      },
      fontFamily: {
        sans: 'var(--fonts-sans)',
        serif: 'var(--fonts-serif)',
        mono: 'var(--fonts-mono)',
      },
    },
  },
  plugins: [require('@thoughtbot/tailwindcss-aria-attributes')],
};
