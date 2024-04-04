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
        main: "#C3CBD6",
        "darker-main": "#9ca2ab",
        "lighter-main": "#cfd5de",
        secondary: "#C0A9BD",
        "darker-secondary": "#867684",
        "lighter-secondary": "#d3c3d1",
        base: "#F6F4E8",
        "darker-base": "#c5c3ba",
        "lighter-base": "#fbfaf4",
      },
    },
  },
  plugins: [],
};
export default config;
