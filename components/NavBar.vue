<template>
    <header class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white">ForKode</NuxtLink>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/#proposito" class="nav-link group">Propósito</NuxtLink>
          <NuxtLink to="/#valores" class="nav-link group">Valores</NuxtLink>
          <NuxtLink to="/#publico" class="nav-link group">Público</NuxtLink>
          <NuxtLink to="/#modelo" class="nav-link group">Modelo</NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <button @click="toggleTheme" aria-label="Toggle theme" class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          </button>
          <NuxtLink to="/contact" class="button-primary" :class="{ 'active': $route.path === '/contact' }">
            Contáctanos
          </NuxtLink>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  // Reutilizamos la misma lógica de cambio de tema
  import { ref, computed, onMounted, watch } from 'vue';
  
  const colorMode = ref('light'); 
  const isDarkMode = computed(() => colorMode.value === 'dark');
  
  useHead({
    htmlAttrs: {
      class: computed(() => colorMode.value)
    }
  });
  
  watch(colorMode, (newMode) => {
    if (process.client) {
      localStorage.setItem('theme', newMode);
    }
  });
  
  const toggleTheme = () => {
    colorMode.value = isDarkMode.value ? 'light' : 'dark';
  };
  
  onMounted(() => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme) {
        colorMode.value = savedTheme;
      } else {
        colorMode.value = systemPrefersDark ? 'dark' : 'light';
      }
    }
  });
  </script>
  
  <style scoped>
  /* Estilos para el botón de contacto activo */
  .button-primary.active {
    @apply bg-blue-800 dark:bg-blue-400 cursor-default;
  }
  
  /* Clases CSS del nav-link del proyecto principal */
  .nav-link {
    @apply relative text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200;
  }
  .nav-link::after {
    content: '';
    background-color: #3B82F6;
    @apply absolute left-0 -bottom-1.5 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300;
  }
  .dark .nav-link::after {
    background-color: #60A5FA;
  }
  .button-primary {
    @apply inline-block px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200;
  }
  </style>