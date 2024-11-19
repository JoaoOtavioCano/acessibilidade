/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', 
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
        "claro": "#F2F2F2",
        "cinza": "#D9D9D9",
        "educk": "#FF8A00",
        "cinzaEscuro": "#0D0D0D",
      },
    },
  },
  plugins: [],
};
