/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px"
      },
      colors:{
        accent: "#251B37",
        blackish: "#251B37"
      }
    },
  },
  plugins: [],
}
