import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
} satisfies Config;
