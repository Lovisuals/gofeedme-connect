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
          DEFAULT: '#27C932', // The Official GoFundMe Green
          hover: '#1BB635',   // Slightly darker for interaction
          light: '#E9F9EB',   // The soft green background used in badges
        },
        gray: {
          50: '#F8F8F8',      // The exact off-white background
          100: '#f4f4f4',
          text: '#767676',    // The specific muted text color
          dark: '#333333',    // The strong heading color
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)', // The "Float" shadow
        'card-hover': '0 10px 25px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}
export default config
