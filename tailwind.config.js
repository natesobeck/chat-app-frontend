/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: ["Abril Fatface", "serif"],
    },
    extend: {
      backgroundImage: {
        "sun-tornado": "url('/sun-tornado.svg')",
      },
    },
  },
  plugins: [],
};
