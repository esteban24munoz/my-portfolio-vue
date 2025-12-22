<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CaseStudiesSection from './components/CaseStudiesSection.vue'
import Footer from './components/Footer.vue'
import Resume from './components/Resume.vue'
import FoodprintsProject from './components/CaseStudies/FoodprintsProject.vue'

const currentRoute = ref(window.location.hash || '')

const updateRoute = () => {
  currentRoute.value = window.location.hash
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener('hashchange', updateRoute)
})
</script>

<template>
  <div>
    <NavBar />
    <main>
      <template v-if="currentRoute === '#/resume'">
        <Resume />
      </template>
      <template v-else-if="currentRoute === '#/foodprints'">
        <FoodprintsProject />
      </template>
      <template v-else>
        <HeroSection />
        <CaseStudiesSection />
      </template>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
