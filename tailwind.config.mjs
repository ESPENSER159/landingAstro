/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      // yellow: {
      //   50: "#fefce8",
      //   100: "#fef9c3",
      //   400: "#facc15",
      //   500: "#eab308",
      // },
      // yellow: {
      //   100: "#c7fffc",
      //   200: "#90fff9",
      //   400: "#1de1e4",
      //   500: "#04c2c8",
      //   600: "#009fa8",
      //   700: "#057880",
      // },
      yellow: {
        100: "#c7fffc",
        200: "#90fff9",
        300: "#1de1e4",
        400: "#9EA1A2",
        500: "#F8E815",
        600: "#00ABC2",
        700: "#007881"
      },
      // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
