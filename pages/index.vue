<template>
  <div class="container">
    <h1>Bienvenido a Forkode Team</h1>
    <p class="slogan">Tu socio en desarrollo de software y soluciones tecnológicas.</p>
    <section class="features">
      <h2>Nuestros Servicios</h2>
      <ul>
        <li>Desarrollo Web a Medida</li>
        <li>Aplicaciones Móviles Nativas</li>
        <li>Consultoría Tecnológica</li>
        <li>Optimización de Procesos</li>
      </ul>
    </section>
    <div class="cta">
      <NuxtLink to="/contact" class="button">Contáctanos Hoy</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No se necesita lógica compleja para esta página simple
// Puedes añadir meta tags para SEO si lo deseas
useHead({
  title: 'Forkode Team - Expertos en Desarrollo de Software',
  meta: [
    { name: 'description', content: 'Desarrollo web y móvil, consultoría tecnológica y optimización de procesos para tu negocio.' }
  ]
})
</script>

<style scoped>
.container {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 60px 20px;
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
  font-size: 2.8em;
  margin-bottom: 15px;
}

.slogan {
  font-size: 1.3em;
  color: #555;
  margin-bottom: 40px;
}

.features {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  max-width: 700px;
  width: 100%;
}

.features h2 {
  color: #42b883; /* Un verde vibrante, como el de Vue/Nuxt */
  font-size: 2em;
  margin-bottom: 20px;
}

.features ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.features li {
  background-color: #e6f7ed;
  padding: 15px 25px;
  border-radius: 6px;
  font-size: 1.1em;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.cta {
  margin-top: 30px;
}

.button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #007bff; /* Un azul profesional */
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
</style>