import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: "#f68428",
      lightBlue: "#00b5cb",
      darkBlue: "#0082c8",
      white: "#fff",
      black: "#1b1b1b",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      thin: "200",
      regular: "500",
      bold: "900",
    },
    fontSize: {
      paragraph: "1rem",
      subheading: "1.25rem",
      heading: "1.75rem",
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1150px",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
