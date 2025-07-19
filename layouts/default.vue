<template>
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <NavBar />
  
      <slot />
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '~/components/NavBar.vue';
  import Footer from '~/components/Footer.vue';
  </script>
  
  <style>
  /* Aquí puedes poner estilos globales que necesites en toda la aplicación */
  /* Por ahora, dejaremos que los estilos de los componentes y páginas se manejen por sí mismos */
  </style>