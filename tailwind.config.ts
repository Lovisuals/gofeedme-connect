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
          DEFAULT: '#02a95c', // The Official Vibrant GoFundMe Green
          hover: '#028e4d',   // Darker shade for hover
          light: '#e6f6ef',   // Light green background
        },
        gray: {
          50: '#fbf8f6',      // Warm off-white background
          100: '#f4f4f4',
          text: '#767676',    // Standard muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern font
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.08)', // The specific "Trust Card" shadow
        'card-hover': '0 0 0 1px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'xl': '12px', // Softer corners
      }
    },
  },
  plugins: [],
}
export default config
