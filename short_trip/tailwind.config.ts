import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accentfore: "var(--accent-foreground)",
        mutecolor: "var(--muted)",
        red: "var(--primary-red)",
        yellow: "var(--primary-yellow)",
        orange: "var(--primary-orange)",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        robotoMono: "var(--font-roboto-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;