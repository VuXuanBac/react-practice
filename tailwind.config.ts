import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        handscript: ['"Style Script"', "cursive"],
        shoulder: ['"Big Shoulders Text"', "cursive"],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        tertiary: colors.green,
        modalBackground: "#cccc",
      },
    },
  },
  plugins: [],
} satisfies Config;
