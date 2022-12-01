/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
        GrayText: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
