<!-- src/components/HeroSection/HeroSection.vue -->
<template>
  <nav />
  <div class="flex h-screen">
    <div class="w-1/3">
        <img src="/src/assets/Images/Fabio3.png" alt="fabio3" class="w-auto h-screen" loading="lazy">
    </div>
    <div class="w-1/3 flex flex-col justify-end bg-squares-bg"> <!-- Clase personalizada -->
      <div class="py-4 bg-violet-400 bg-blend-darken opacity-30">
        <div>
          <p class="text-3xl">
            ¿Que hacemos pa’ que tu proyecto despegue?
          </p>
        </div>
        <div class="py-4">
          <Button />
        </div>
      </div>
    </div>
    <div class="w-1/3">
      <a>
        <img src="/src/assets/Images/Carla4.png" alt="Carla4" class="w-auto h-screen" loading="lazy">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeroSection } from './useHeroSection';
import { defineProps } from 'vue';

const props = defineProps<{
  msg?: string;
}>();

const { count, doSomething, enhancedMessage, Button } = useHeroSection(props);
</script>

<style scoped>
.logo-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
}

svg {
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
}

.letter {
  fill: #00BFFF;
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 60px;
  opacity: 0;
  transform: translateY(20px);
  animation: appear 0.5s ease forwards;
}

.l0 { animation-delay: 0s; }
.l1 { animation-delay: 0.1s; }
.l2 { animation-delay: 0.2s; }
.l3 { animation-delay: 0.3s; }
.l4 { animation-delay: 0.4s; }
.l5 { animation-delay: 0.5s; }
.l6 { animation-delay: 0.6s; }
.l7 { animation-delay: 0.8s; }
.l8 { animation-delay: 0.9s; }
.l9 { animation-delay: 1.0s; }
.l10 { animation-delay: 1.1s; }
.l11 { animation-delay: 1.2s; }
.l12 { animation-delay: 1.3s; }
.l13 { animation-delay: 1.4s; }
.l14 { animation-delay: 1.5s; }
.l15 { animation-delay: 1.6s; }
.l16 { animation-delay: 1.7s; }

@keyframes appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<!-- Estilos globales para el fondo -->
<style>
body {
  margin: 0;
  background: linear-gradient(135deg, #1a2a6c, #00bfff, #ffa500, #b5ff00);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  font-family: 'Segoe UI', sans-serif;
}

/* Fondo cuadrado relleno */
.squares-bg {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent 50%);
  background-size: 100px 100px;  /* Tamaño de cada cuadrado */
  background-repeat: repeat;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
