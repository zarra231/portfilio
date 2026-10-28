/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#09090b",
          darker: "#050507",
          surface: "#111116",
          card: "#16171f",
          cardHover: "#1e1f2b",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(56, 189, 248, 0.35)",
          neon: "#38bdf8",
          neonDim: "rgba(56, 189, 248, 0.12)",
          neonBright: "#7dd3fc",
          cyan: "#38bdf8",
          lime: "#4ade80",
          purple: "#c084fc",
          coral: "#fb7185",
          amber: "#fb923c",
          textMuted: "#888894",
          textSecondary: "#cbd5e1",
          textLight: "#f1f5f9",
        },
        stitch: {
          indigo: "#4F46E5",
          violet: "#8B5CF6",
          pink: "#EC4899",
          slate: "#09090b",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'elevated': '0 10px 35px rgba(0, 0, 0, 0.35)',
        'glow-teal': '0 0 25px rgba(94, 234, 212, 0.22)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.22)',
        'glow-cyan': '0 0 25px rgba(103, 232, 249, 0.22)',
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-wave': 'gradientWave 15s ease infinite',
        'star-rotate': 'starRotate 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.04)' },
        },
        gradientWave: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        starRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}
