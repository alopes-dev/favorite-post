import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange: {
          200: '#FFEADA',
          500: '#FF6000',
          800: '#844214',
        },
        slate: {
          500: '#596E9A',
        },
        gray: {
          100: '#EEF1F4',
          200: '#B3C4D0',
          400: '#ACB5BF',
        },
        red: {
          500: '#FF0000',
          600: '#E00035',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CBE3FF',
          300: '#80B4F3',
          500: '#0069E7',
          800: '#001F63',
        },
        yellow: {
          400: '#FFD000',
        },
      },
    },
  },
  plugins: [],
}
export default config
