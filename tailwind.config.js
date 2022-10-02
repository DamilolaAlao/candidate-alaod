/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCobalt: { 100: "#18417a", 200: "#18417a", 300: "#18417a" },
        customMingo: { 100: "#f8b2c5", 200: "#f24f46", 300: "#f8b2c5" },
        customPink: { 100: "#f8b2c5", 200: "#f24f46", 300: "#f8b2c5" },
        success: "#068562",
        info: "#058caa",
        warning: "#df7412",
        danger: "#ca3754",
      },
    },
  },
  plugins: [],
};
