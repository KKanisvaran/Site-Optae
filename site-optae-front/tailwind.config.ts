import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}", // Pour tes fichiers dans _components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // C'est CA qui active le style
  ],
};
export default config;