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
        },
        tada: {
          "0%" : { transform: "scale(1)" },
          "10%, 20%" : { transform: "scale(0.9) rotate(-3deg)" },
          "30%, 50%, 70%, 90%" : { transform: "scale(1.1) rotate(3deg)" }, 
          "40%, 60%, 80%" : { transform: "scale(1.1) rotate(-3deg)" },
          "100%" : { transform: "scale(1) rotate(0)" } 
        },
        fly: {
          "0%" : {
            transform: "translateY(0)",
          },
          "10%" : {
            transform: "translateY(-10px)",
          },
          "30%" : {
            transform: "translateY(30px)",
          },
          "100%" : {
            transform: "translateY(-2500px)",
          }
        },
      },
      animation: {
        dance: "dance 1s infinite",
        button: "tada 1.5s, dance 2s infinite 2s",
        fly: "fly 2s",
      },
      fontFamily: {
        "title": ["Fredoka One", "cursive"],
      },
    },
  },
  plugins: [],
}

