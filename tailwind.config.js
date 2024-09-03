/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1100px',
    },
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // },
    extend: {
      fontSize: {
        xs: '12px',
        sm: '15px',
        base: '18px'
      },
      colors: {
        100: "#49e659",
        932: "#434252"
      },
    },
  },
  plugins: [],
}