/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px", // Set your desired maxWidth for large screens (lg breakpoint)
        "2xl": "1270px",
      },
    },
    extend: {
      colors: {
        primary: "#4169e1",
        darkPrimary: "#050a90",
        secondary: "#4267B2",
        extra: "#4b5563",
        info: "#249beb",
        success: "#55d892",
        warning: "#b17610",
        error: "#fd6872",
        royalBlue: "#4169e1",
        facebook: "#4267B2",
        youtube: "#c4302b",
        linkedIn: "#0072b1",
        twitter: "#1DA1F2",
        whatsapp: "#075e54",
      },
    },
  },
}
