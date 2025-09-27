module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d18b80",
        secondary: "#676767",
        borderc: "#373737",
      },
      borderWidth: { 3: "3px" },
      opacity: { 15: "0.15" },
    },
  },
  plugins: [],
};
