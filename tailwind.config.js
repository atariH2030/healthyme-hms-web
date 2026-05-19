/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        neon: {
          green: "#39FF14",
          blue: "#00F3FF",
        },
      },
      boxShadow: {
        neon:
          "0 0 24px rgba(57, 255, 20, 0.35), 0 0 48px rgba(0, 243, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
