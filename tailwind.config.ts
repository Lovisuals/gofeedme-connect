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
          DEFAULT: '#02a95c', // The Official GFM Green Button Color
          hover: '#028e4d',   // Darker hover state
        },
        gray: {
          50: '#f8f8f8',      // The slight off-white background
          text: '#333333',    // The strong heading color
          light: '#767676',   // The supporting text color
        },
        accent: {
          light: '#e9fcce',   // The light green ring color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Closest free match to GoFundMeSans
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(0,0,0,0.02), 0 2px 8px rgba(0,0,0,0.06)', // Ultra subtle
        'float': '0 20px 40px -10px rgba(0,0,0,0.1)', // For the hero bubbles
      }
    },
  },
  plugins: [],
}
export default config
