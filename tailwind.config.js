/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Define os arquivos onde Tailwind será aplicado
  theme: {
    extend: {}, // Permite estender a configuração padrão de Tailwind
  },
  darkMode: 'class', // Ativa o suporte ao modo escuro baseado na classe "dark"
  plugins: [], // Adicione plugins aqui, se necessário
};
