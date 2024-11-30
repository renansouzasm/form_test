/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { alice: ["Alice", "serif"] },
    extend: {
      colors: {
        "color-1": "#242323",
        "color-2": "#795238",
        "color-3": "#525254",
        "color-4": "#959595",
        "color-5": "#AEA7A3",
      },
    },
  },
  plugins: [],
};
