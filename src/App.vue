<script setup lang="ts">
import HeroSection from './components/HeroSection/HeroSection.vue'
import Nvar from './components/NvarSection/NvarSection.vue'
import ProcessSection from './components/ProcessSection/ProcessSection.vue'
import PlanSections from './components/PlansSection/PlanSections.vue'
import MyButton from './components/Button.vue'
</script>

<template>
  <div>
    <Nvar msg="" />
    <HeroSection msg="" />
    <ProcessSection msg="" />
    <PlanSections msg="" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
