/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#030712', 900: '#0A0F1E', 800: '#0f172a', 700: '#1e293b' },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      animation: {
        blink:    'blink 1s step-end infinite',
        float:    'float 5s ease-in-out infinite',
        spin_slow:'spin 6s linear infinite',
        fadeUp:   'fadeUp 0.7s ease forwards',
        pulse_slow:'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        blink:  { '0%,100%':{ opacity:1 }, '50%':{ opacity:0 } },
        float:  { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-10px)' } },
        fadeUp: { from:{ opacity:0, transform:'translateY(28px)' }, to:{ opacity:1, transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
