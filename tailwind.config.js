/** @type {import('tailwindcss').Config} */
export default {
    // Esta línea es la más importante para que el cambio de tema funcione.
    darkMode: 'class',
  
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    
    theme: {
      extend: {},
    },
  
    plugins: [],
  }