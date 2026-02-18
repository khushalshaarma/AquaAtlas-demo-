import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Your main AquaAtlas blue
        primary: {
          DEFAULT: "hsl(213, 90%, 50%)",
          foreground: "#ffffff",
        },

        // Emergency red
        destructive: {
          DEFAULT: "hsl(0, 85%, 55%)",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "pulse-danger": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 15px hsl(0, 85%, 55%)",
          },
          "50%": {
            opacity: "0.7",
            boxShadow: "0 0 30px hsl(0, 85%, 65%)",
          },
        },
      },
      animation: {
        "pulse-danger": "pulse-danger 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
