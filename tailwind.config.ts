import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Warm graphite ground — the dominant mode.
        graphite: '#111317',
        'graphite-2': '#161a1f',
        'graphite-3': '#1d2229',
        // Cool-bone "paper" — light reading mode (deliberately cooler than cream).
        paper: '#eceae2',
        'paper-2': '#f5f3ec',
        // Ink + cream text roles.
        ink: '#14161a',
        cream: '#ecebe4',
        // Hairlines.
        line: '#272d35',
        'line-paper': '#d5d2c6',
        // Muted text.
        'muted-dark': '#878f97',
        'muted-light': '#5c6055',
        // The functional signal accent, tuned separately for dark and paper grounds.
        signal: '#dba03f',
        'signal-bright': '#f0bb5a',
        'signal-paper': '#8f5f14',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.24em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'drain': 'drain 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'blink': 'blink 1.3s step-end infinite',
        'sweep': 'sweep 6s ease-in-out infinite',
      },
      keyframes: {
        drain: {
          '0%': { width: '100%' },
          '100%': { width: 'var(--drain-to, 5%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        sweep: {
          '0%, 100%': { transform: 'translateX(-6%)' },
          '50%': { transform: 'translateX(6%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
