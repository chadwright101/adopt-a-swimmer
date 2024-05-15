import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: "#F68428",
      lightBlue: "#00b5cb",
      blue: "#0082C8",
      darkBlue: "#005696",
      white: "#fff",
      black: "#1b1b1b",
      brown: "#9C5A36",
      link: "#0000FF",
      none: "transparent",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      barrio: ["Barrio", "system-ui"],
      reenieBeanie: ["Reenie Beanie", "cursive"],
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
        "1.75rem",
        {
          lineHeight: "110%",
          letterSpacing: "0.0525rem",
        },
      ],
      heading: [
        "3rem",
        {
          lineHeight: "100%",
          letterSpacing: "0.09rem",
        },
      ],
      quote: [
        "1.5rem",
        {
          lineHeight: "130%",
          letterSpacing: "0.045rem",
        },
      ],
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktopSmall: "1100px",
      desktop: "1440px",
    },
    margin: {
      0: "0",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      15: "60px",
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
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      15: "60px",
      20: "80px",
      25: "100px",
    },
    dropShadow: {
      default: "0 4px 4px rgba(0, 0, 0, 0.15)",
      none: "none",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
