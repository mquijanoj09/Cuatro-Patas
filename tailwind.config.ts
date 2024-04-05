import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#93D4DA",
        "darker-main": "#76aaae",
        "lighter-main": "#a9dde1",
        secondary: "#C0A9BD",
        "darker-secondary": "#867684",
        "lighter-secondary": "#d3c3d1",
        base: "#e9f6f8",
        "darker-base": "#c5c3ba",
        "lighter-base": "#fbfaf4",
      },
    },
  },
  plugins: [],
};
export default config;
