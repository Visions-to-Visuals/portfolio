/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        white: "#FFFFFF",    
        black: "#000000",   
        orange: "#EC512B",  
        yellow: "#F5BF49",   
      },

      screens: {
        'monitor': {'min': '2000px'},       // 1600px and beyond
        'laptop': {'max': '1440px'},        // 1250px up to 1440px
        'laptop-s': {'max': '1250px'},      // 1024px up to 1250px
        'tablet': {'max': '1024px'},        // 768px up to 1024px
        'tablet-s': {'max': '768px'},       // 480px up to 768px
        'mobile': {'max': '500px'},         // 340px up to 480px
        'mobile-s': {'max': '340px'},       // 0px up to 340px
      },
    },
  },
  plugins: [],
};
