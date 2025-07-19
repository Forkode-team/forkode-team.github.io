<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <main class="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center">
      
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contáctanos
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          ¿Listo para dar el siguiente paso? Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>

      <form @submit.prevent="submitForm" class="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div class="space-y-6">
          <div>
            <label for="name" class="form-label">Nombre Completo</label>
            <input type="text" id="name" v-model="form.name" class="form-input" placeholder="Tu Nombre" required>
          </div>
          
          <div>
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" id="email" v-model="form.email" class="form-input" placeholder="tu@email.com" required>
          </div>
          
          <div>
            <label for="message" class="form-label">Tu Mensaje</label>
            <textarea id="message" v-model="form.message" rows="5" class="form-input" placeholder="Cuéntanos sobre tu proyecto o idea..." required></textarea>
          </div>
        </div>

        <div class="mt-8">
          <button type="submit" class="w-full button-primary">
            Enviar Mensaje
          </button>
        </div>
      </form>

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Importamos el componente Navbar para poder usarlo en el template

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // La lógica del formulario se mantiene igual
  alert(`Mensaje enviado:\nNombre: ${form.value.name}\nEmail: ${form.value.email}\nMensaje: ${form.value.message}`);
  form.value = { name: '', email: '', message: '' };
};

useHead({
  title: 'Contacto - ForKode',
  meta: [
    { name: 'description', content: 'Ponte en contacto con ForKode para dar vida a tus proyectos de software y diseño con talento emergente de Costa Rica.' }
  ]
})
</script>

<style>
/* 2. Definimos estilos reutilizables para el formulario con @apply */
.form-label {
  @apply block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200;
}
.form-input {
  @apply block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition;
}

/* 3. Reutilizamos la clase global del botón del proyecto */
.button-primary {
  @apply inline-block w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-200;
}
</style>