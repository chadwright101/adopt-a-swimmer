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
      blue: "#0082C8",
      darkBlue: "#005696",
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
      paragraph: [
        "1rem",
        {
          lineHeight: "142%",
          letterSpacing: "0.02rem",
        },
      ],
      subheading: [
        "1.25rem",
        {
          lineHeight: "110%",
          letterSpacing: "0.0375rem",
        },
      ],
      heading: [
        "1.75rem",
        {
          lineHeight: "100%",
          letterSpacing: "0.0525rem",
        },
      ],
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
