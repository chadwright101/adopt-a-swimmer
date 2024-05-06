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
      desktop: "1140px",
    },
    margin: {
      0: "0",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      10: "40px",
      20: "80px",
      25: "100px",
      auto: "auto",
    },
    padding: {
      0: "0",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      10: "40px",
      20: "80px",
      25: "100px",
    },
    dropShadow: {
      default: "0 4px 4px rgba(0, 0, 0, 0.15)",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
