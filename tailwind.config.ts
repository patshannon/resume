import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounceDown: 'bounceDown 1s ease-in-out infinite'
      },
      keyframes: {
        bounceDown: {
          '0%, 100%': { 
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(25%)'
          }
        }
      }
    },
  },
  plugins: [],
}

export default config

