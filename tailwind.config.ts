import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        seafoam: "rgb(74, 210, 180)",
        deepteal: "rgb(16, 96, 94)",
        sand: "rgb(250, 251, 246)",
        midnight: "rgb(10, 40, 40)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 70px rgba(74, 210, 180, 0.35)",
      },
      backgroundImage: {
        "surf-gradient":
          "radial-gradient(1200px 600px at 5% -10%, rgba(74, 210, 180, 0.35), transparent 60%), radial-gradient(900px 520px at 100% 0%, rgba(16, 96, 94, 0.25), transparent 55%), linear-gradient(180deg, #f7fdfb 0%, #fafbf6 60%, #f1faf6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
