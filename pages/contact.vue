<template>
    <div class="contact-container">
      <h1>Contáctanos</h1>
      <p>Estamos listos para hacer realidad tu próximo proyecto.</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-button">Enviar Mensaje</button>
      </form>
      <NuxtLink to="/" class="back-home">Volver al Inicio</NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    alert(`Mensaje enviado:\nNombre: ${form.value.name}\nEmail: ${form.value.email}\nMensaje: ${form.value.message}`);
    // Aquí integrarías la lógica real para enviar el formulario
    // Por ejemplo, usando un servicio de terceros como Formspree, Netlify Forms, o un endpoint de API
    form.value = { name: '', email: '', message: '' }; // Limpiar formulario
  };
  
  useHead({
    title: 'Contacto - Forkode Team',
    meta: [
      { name: 'description', content: 'Ponte en contacto con Forkode Team para tus proyectos de desarrollo de software.' }
    ]
  })
  </script>
  
  <style scoped>
  .contact-container {
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 50px 20px;
    background-color: #f8f8f8;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    color: #2c3e50;
    font-size: 2.5em;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.1em;
    color: #555;
    margin-bottom: 30px;
  }
  
  .contact-form {
    background-color: #fff;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .submit-button {
    background-color: #007bff;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    width: auto;
    display: block;
    margin-top: 20px;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
  
  .back-home {
    display: inline-block;
    margin-top: 30px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .back-home:hover {
    color: #0056b3;
  }
  </style>