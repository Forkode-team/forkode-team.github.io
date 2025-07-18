// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  app: {
    // La base de la URL para tu aplicación.
    // Como forkode-team.github.io es el dominio raíz, usamos '/'
    baseURL: '/',
    // No es necesario 'buildAssetsDir' a menos que cambies el destino de los assets
    // buildAssetsDir: '/_nuxt/',
  },
  devtools: { enabled: true },
  modules: [],
  css: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
