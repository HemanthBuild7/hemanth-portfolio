/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#0b0d0c',
        panel: '#131614',
        line: '#272c28',
        fg: '#e8ebe6',
        soft: '#c0c6bf',
        muted: '#949c94',
        faint: '#667067',
        signal: '#c5f24c',
        gate: '#ffb454',
      },
    },
  },
  plugins: [],
}
