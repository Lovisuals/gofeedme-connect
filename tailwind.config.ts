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
          DEFAULT: '#00B97C', // GoFundMe Green
          hover: '#00A06B',
        },
        opay: {
          DEFAULT: '#1DC9A0', // OPay Green
        }
      },
    },
  },
  plugins: [],
}
export default config
