module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "xsm": {"max": "361px"},
        'sm': { 'max': '640px'},
        // => @media (min-width: 640px) { ... }
  
        'md': { 'max': '767px'},
        // => @media (min-width: 768px) { ... }
        
        "min-md": "768px",
        "min-lg": "1024px",

        'lg': { 'max': '1023px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': { 'max': '1280px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': { 'max': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      height: {
        "10vh": "10vh",
        "15vh" : "15vh",
        "50vh": "50vh",
        "90vh": "90vh",
        "85vh": "85vh",
        "150vh": "120vh",
        "160vh": "160vh",
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      width: {
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      fontFamily: {
        "uni": "'Cormorant Unicase', serif",
        "crimson": "'Crimson Text', serif",
      },
      inset: {
        '10vh': "10vh",
      },
      backgroundColor: {
          "blackish": "#18191b",
          "violet1": "#c101ce",
          "violet2": "#5a0366",
          "blue": "#032347"
      },
      backgroundImage: {
        "hero": "url('https://images.unsplash.com/photo-1551910021-c59ed3bf006b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')",
        "hero_2": "url('https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80')"
      },
      lineHeight: {
        "3.7": "3.7rem",
        "3": "3rem"
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
