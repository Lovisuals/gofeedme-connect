import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#02a95c', // The Official Source Code Green
          hover: '#028e4d',
          dark: '#017a42',
          light: '#e6f6ef',
        },
        accent: {
          DEFAULT: '#FBBF24', // Warm Harvest Yellow (for contrast)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'floating': '0 10px 40px -10px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
