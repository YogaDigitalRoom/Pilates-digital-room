/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      
      screens: {
				'tablet': '900px',
			},
			colors : {
        "black" :"#2B2B2B",
        "white": "#FFFFFF",	
        "grey" : "#D9D9D9",
        "primary" : "#92D641",
        "secondary" : "#04A1E1",
        "tertiary" : "#2D3178"
      },
      borderRadius : {
				"primary" : "8px",
				"secondary" : "16px",
				"tertiary" : "24px",
			},


      boxShadow: {
        main: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",  // Define primary box shadow
        hover: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",   // Define hover box shadow
      },
    },
  },
  plugins: [],
};
