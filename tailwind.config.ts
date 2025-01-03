import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      print: {
        raw: "print",
      },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#caf0f8",
          200: "#90e0ef",
          300: "#00b4d8",
          400: "#0077b6",
          500: "#03045e",
        },
        secondary: {
          100: "#c7f9cc",
          200: "#80ed99",
          300: "#57cc99",
          400: "#38a3a5",
          500: "#22577a",
        },
      },
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
      },
      listStyleType: {
        "lower-roman": "lower-roman",
        "upper-roman": "upper-roman",
        "lower-alpha": "lower-alpha",
        "upper-alpha": "upper-alpha",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
