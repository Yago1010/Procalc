import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",         // Todos os arquivos dentro de src
    "./src/app/page.tsx",                  // Página principal
    "./src/app/home/page.tsx",             // Página home
    "./src/app/components/**/*.{js,ts,jsx,tsx}", // Componentes
    "./src/app/pasta/page.tsx",            // Página na pasta específica
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
