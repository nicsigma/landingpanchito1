import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand colors - Changed to more yellow tones
        primary: {
          DEFAULT: "#eab308", // Yellow-500
          light: "#facc15",   // Yellow-400
          dark: "#ca8a04",    // Yellow-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1c1c1c", // Dark Gray nearly black
          light: "#2d2d2d",
          dark: "#171717",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#fefce8", // Light yellow
          foreground: "#854d0e",
        },
        forest: {
          DEFAULT: "#854d0e", // Yellow-800
          light: "#eab308",
          dark: "#713f12",
        },
        mountain: {
          DEFAULT: "#0f766e", // Kept teal as complementary color
          light: "#0d9488",
          dark: "#115e59",
        },
        // System colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "move-lines": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-delay-1": "fade-in 0.6s ease-out 0.2s forwards",
        "fade-in-delay-2": "fade-in 0.6s ease-out 0.4s forwards",
        "fade-in-delay-3": "fade-in 0.6s ease-out 0.6s forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "move-lines": "move-lines 15s linear infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=2070&auto=format&fit=crop')",
        "mountain-pattern": "url('/lovable-uploads/33c706ba-1d92-4329-b42c-c768c794d0e6.png')",
        "forest-pattern": "url('/lovable-uploads/8ef8261f-9c7f-442f-9cff-d6ef214a3f60.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
