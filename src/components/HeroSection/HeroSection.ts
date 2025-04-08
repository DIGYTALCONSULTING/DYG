// src/components/HeroSection/useHero.ts
import { ref } from 'vue'

export function HeroSection() {
  // Define aquí la lógica que quieras separar (por ejemplo, un contador)
  const count = ref(0)
  // Puedes agregar más variables o funciones según lo necesites

  return { count }
}
