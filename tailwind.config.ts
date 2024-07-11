import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PPNeueMontreal"', ...defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4'
      },
      width: {
        '168': '42rem',
        '180': '45rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '0rem'
      },
      screens: {
        lg: '42rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
