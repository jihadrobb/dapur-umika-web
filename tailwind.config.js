/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "darker-pink": "#e8b0b0",
        pink: "#fec0cb",
        red: "#f00946",
        "soft-brown": "#9c7071",
        "soft-pink": "#ffe8e8",
      },
      backgroundImage: {
        "dark-dotted":
          "radial-gradient(#ffe8e8 1.1px, transparent 1.1px),radial-gradient(#ffe8e8 1.1px, #9c7071 1.1px)",
        "light-dotted":
          "radial-gradient(#9c7071 1.1px, transparent 1.1px),radial-gradient(#9c7071 1.1px, #ffe8e8 1.1px)",
      },
      backgroundOpacity: {},
      backgroundSize: {
        "dark-dotted": "44px 44px",
        "light-dotted": "44px 44px",
      },
      backgroundPosition: {
        "dark-dotted": "0 0, 22px 22px",
        "light-dotted": "0 0, 22px 22px",
      },
      borderColor: {
        "navy-blue": "#0066CC",
      },
      colors: {
        brown: "rgb(78, 71, 71)",
        "dark-blue": "#012d59",
        "navy-blue": "#0066CC",
        "soft-pink": "#ffe8e8",
        "soft-brown": "#9c7071",
      },
      fontFamily: {
        BobbyJones: ['"Bobby Jones"', "sans-serif"],
        BohemeFloral: ['"Boheme Floral"', "sans-serif"],
        Copperplate: ["Copperplate", "sans-serif"],
        DancingScript: ['"Dancing Script"', "sans-serif"],
        ElMessiri: ['"El Messiri"', "sans-serif"],
        Flor: ["Flor", "sans-serif"],
        Garamond: ["Garamond", "sans-serif"],
        Mollenia: ["Mollenia", "sans-serif"],
        Tangerine: ["Tangerine", "sans-serif"],
      },
      height: {},
    },
    plugins: [],
  },
};
