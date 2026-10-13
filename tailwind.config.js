/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF5EA",
        paper: "#FFFDF8",
        ink: {
          DEFAULT: "#1D1A2F",
          soft: "#57536B",
          faint: "#8D88A0",
        },
        coral: { DEFAULT: "#FF6A4D", light: "#FFE1D9" },
        teal: { DEFAULT: "#16A897", light: "#D3F4EE" },
        sun: { DEFAULT: "#FFC73A", light: "#FFF1C7" },
        lilac: { DEFAULT: "#AE9BFF", light: "#ECE6FF" },
        sky: { DEFAULT: "#7CC8FB", light: "#DDF1FE" },
        leaf: { DEFAULT: "#6CC04A", dark: "#3E8E2A" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        pop: "4px 4px 0 0 #1D1A2F",
        "pop-lg": "8px 8px 0 0 #1D1A2F",
        "pop-sm": "2px 2px 0 0 #1D1A2F",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
