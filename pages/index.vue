<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <main class="container mx-auto px-6 py-16 sm:py-24">
      <section class="text-center max-w-4xl mx-auto mb-24 md:mb-32">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6">
          Construimos el puente entre el talento y la oportunidad.
        </h1>
        <p class="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Para PYMEs y startups en Costa Rica, ForKode es el puente entre sus necesidades de negocio y el brillante talento universitario emergente del país.
        </p>
        <p class="text-xl md:text-2xl font-medium text-primary italic">
          Innovación fresca, resultados profesionales.
        </p>
      </section>

      <section id="proposito" class="mb-24 md:mb-32">
        <div class="text-center mb-12">
          <h2 class="section-title">Nuestra Identidad</h2>
          <p class="section-subtitle">Los pilares que definen quiénes somos y hacia dónde vamos.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="card">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="card-title">Propósito</h3>
            <p class="card-text">Empoderar a la próxima generación de talento tecnológico en Costa Rica, cerrando la brecha entre la educación académica y la experiencia laboral real.</p>
          </div>
          <div class="card">
            <div class="text-5xl mb-4">🚀</div>
            <h3 class="card-title">Misión</h3>
            <p class="card-text">Conectamos talento universitario con empresas a través de un modelo de freelancing gestionado, capacitando y mentorizando para entregar soluciones de alta calidad.</p>
          </div>
          <div class="card">
            <div class="text-5xl mb-4">🔭</div>
            <h3 class="card-title">Visión</h3>
            <p class="card-text">Ser el hub de talento tecnológico joven más reconocido de Costa Rica y la plataforma de lanzamiento de carrera por excelencia para futuros líderes.</p>
          </div>
        </div>
      </section>

      <section id="valores" class="mb-24 md:mb-32">
        <div class="text-center mb-12">
          <h2 class="section-title">Nuestros Valores</h2>
          <p class="section-subtitle">Principios que guían cada una de nuestras acciones.</p>
        </div>
        <div class="lg:flex gap-12">
          <div class="lg:w-1/3 flex flex-col space-y-3 mb-8 lg:mb-0">
            <button v-for="(value, index) in values" :key="value.title" @click="activeValueIndex = index" :class="['value-button', { 'active': activeValueIndex === index }]">
              {{ value.title }}
            </button>
          </div>
          <div class="lg:w-2/3">
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg min-h-[250px] flex flex-col justify-center shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">{{ activeValue.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-lg">{{ activeValue.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="publico" class="mb-24 md:mb-32">
        <div class="text-center mb-12">
          <h2 class="section-title">Nuestro Público</h2>
          <p class="section-subtitle">Servimos a dos audiencias clave. Nuestro éxito depende de ambas.</p>
        </div>
        <div class="flex justify-center mb-10">
          <div class="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full flex space-x-2">
            <button @click="activeAudience = 'talent'" :class="['toggle-btn', { 'active': activeAudience === 'talent' }]">Nuestro Talento</button>
            <button @click="activeAudience = 'clients'" :class="['toggle-btn', { 'active': activeAudience === 'clients' }]">Nuestros Clientes</button>
          </div>
        </div>
        
        <div v-if="activeAudience === 'talent'" class="grid md:grid-cols-3 gap-6">
          <div class="card-sm"><h4 class="card-sm-title">Demografía</h4><p>Estudiantes universitarios o recién graduados de carreras como Computación y Diseño Gráfico en Costa Rica.</p></div>
          <div class="card-sm"><h4 class="card-sm-title">Psicografía</h4><p>Ambiciosos, proactivos y autodidactas. Sienten la presión de necesitar "experiencia para tener experiencia".</p></div>
          <div class="card-sm"><h4 class="card-sm-title">Necesidades</h4><p>Experiencia demostrable, mentoría profesional, ingresos flexibles y la oportunidad de aplicar sus conocimientos.</p></div>
        </div>
        
        <div v-if="activeAudience === 'clients'" class="grid md:grid-cols-3 gap-6">
          <div class="card-sm"><h4 class="card-sm-title">Perfil Ideal</h4><p>PYMEs y startups en Costa Rica que necesitan digitalizarse con presupuestos limitados.</p></div>
          <div class="card-sm"><h4 class="card-sm-title">Necesidades</h4><p>Soluciones costo-efectivas, desarrollo ágil y acceso a talento con ideas frescas e innovadoras.</p></div>
          <div class="card-sm"><h4 class="card-sm-title">Valor Clave</h4><p>Un socio confiable que gestiona el proyecto y garantiza la calidad sin supervisión directa de freelancers.</p></div>
        </div>
      </section>

      <section id="modelo" class="text-center">
        <div class="mb-12">
          <h2 class="section-title">Nuestro Modelo de Valor</h2>
          <p class="section-subtitle">Así creamos un ciclo de crecimiento y oportunidad para todos.</p>
        </div>
        <div class="grid md:grid-cols-5 items-center gap-8 max-w-5xl mx-auto">
          <div class="text-center"><div class="text-6xl mb-2">🎓</div><h3 class="text-xl font-bold text-gray-800 dark:text-gray-100">Talento Universitario</h3><p class="text-gray-600 dark:text-gray-400">Estudiantes y recién graduados con gran potencial.</p></div>
          <div class="text-5xl text-primary font-light hidden md:block">→</div>
          <div class="text-center p-6 bg-blue-600/10 dark:bg-blue-500/10 border-2 border-blue-600/50 dark:border-blue-500/50 rounded-xl"><h3 class="text-2xl font-bold text-primary">ForKode</h3><p class="text-blue-600/80 dark:text-blue-400 font-semibold">Certificación, Mentoría y Gestión de Proyectos.</p></div>
          <div class="text-5xl text-primary font-light hidden md:block">→</div>
          <div class="text-center"><div class="text-6xl mb-2">🏢</div><h3 class="text-xl font-bold text-gray-800 dark:text-gray-100">Clientes (PYMEs)</h3><p class="text-gray-600 dark:text-gray-400">Reciben soluciones innovadoras y de alta calidad.</p></div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// La lógica del tema ahora vive en TheNavbar.vue, por lo que este script es mucho más limpio.
useHead({
  title: 'ForKode - Puente entre Talento Universitario y PYMEs en Costa Rica',
  meta: [
    { name: 'description', content: 'ForKode conecta a las PYMEs de Costa Rica con talento universitario emergente para desarrollar soluciones tecnológicas innovadoras y asequibles.' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
});

// Lógica para las secciones interactivas de esta página
const activeValueIndex = ref(0);
const values = [
  { title: 'Crecimiento y Aprendizaje Continuo', description: 'Fomentamos una cultura de curiosidad, capacitación constante y mejora personal y profesional. Nunca dejamos de aprender.' },
  { title: 'Oportunidad y Empoderamiento', description: 'Damos la primera oportunidad, confiamos en el talento joven y proporcionamos las herramientas y el apoyo para que brillen.' },
  { title: 'Calidad y Compromiso', description: 'Nos comprometemos a entregar resultados profesionales y de alta calidad, inculcando un fuerte sentido de la responsabilidad.' },
  { title: 'Colaboración', description: '"Crecemos juntos" es nuestro lema. Fomentamos un ambiente de equipo donde la colaboración es clave para el éxito mutuo.' },
  { title: 'Agilidad y Pragmatismo', description: 'Resolvemos problemas reales. Adoptamos un enfoque práctico y flexible para desarrollar soluciones efectivas y eficientes.' }
];
const activeValue = computed(() => values[activeValueIndex.value]);

const activeAudience = ref('talent');
</script>

<style>
/* Estilos globales que aplican a toda la app */
.text-primary { @apply text-blue-600 dark:text-blue-500; }

.section-title {
  @apply text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white;
}

.section-subtitle {
  @apply mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400;
}

.card {
  @apply bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700 transition-all duration-300;
}
.card-title {
  @apply text-xl font-bold text-gray-800 dark:text-gray-100 mb-2;
}
.card-text {
  @apply text-gray-600 dark:text-gray-300;
}

.card-sm {
  @apply bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700;
}
.card-sm-title {
  @apply font-bold text-lg mb-2 text-gray-800 dark:text-gray-100;
}

.value-button {
  @apply w-full text-left p-4 rounded-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-200;
}
.value-button.active {
  @apply bg-blue-600 text-white shadow-md;
}

.toggle-btn {
  @apply px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300;
}
.toggle-btn.active {
  @apply bg-blue-600 text-white;
}
.toggle-btn:not(.active) {
  @apply text-gray-700 dark:text-gray-200;
}
</style>