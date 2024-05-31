/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dance: {
          "0%, 100%": { transform: "scale3d(1, 1, 1)" },
          "50%": { transform: "scale3d(1.05, 1.05, 1.05)" }
        }
      },
      animation: {
        dance: "dance 1s infinite"
      },
      fontFamily: {
        "title": ["Fredoka One", "cursive"],
      },
    },
  },
  plugins: [],
}

