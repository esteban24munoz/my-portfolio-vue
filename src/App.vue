<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CaseStudiesSection from './components/CaseStudiesSection.vue'
import RecommendationsSection from './components/RecommendationsSection.vue'
import Footer from './components/Footer.vue'
import Resume from './components/Resume.vue'
import ContactSection from './components/ContactSection.vue'
import FoodprintsProject from './components/CaseStudies/Foodprints/FoodprintsProject.vue'
import ViewbookProject from './components/CaseStudies/Viewbook/ViewbookProject.vue'
import TheTableProject from './components/CaseStudies/TheTable/TheTableProject.vue'
import SpringHillsRanchProject from './components/CaseStudies/SpringHillsRanch/SpringHillsRanchProject.vue'
import OliveTheAboveProject from './components/CaseStudies/OliveTheAbove/OliveTheAboveProject.vue'
import GoUpButton from './components/goUpButton/GoUpButton.vue'
import Preloader from './components/preloader/Preloader.vue'

const currentRoute = ref(window.location.hash || '')
const showContent = ref(false)

const updateRoute = () => {
  currentRoute.value = window.location.hash
  window.scrollTo(0, 0)
}

const handlePreloaderComplete = () => {
  showContent.value = true
}

onMounted(() => {
  window.addEventListener('hashchange', updateRoute)
})
</script>

<template>
  <div>
    <Preloader @complete="handlePreloaderComplete" />
    <div v-if="showContent">
      <NavBar :current-route="currentRoute" />
      <main>
        <template v-if="currentRoute === '#/resume'">
          <Resume />
        </template>
        <template v-else-if="currentRoute === '#/contact'">
          <ContactSection />
        </template>
        <template v-else-if="currentRoute === '#/foodprints'">
          <FoodprintsProject />
        </template>
        <template v-else-if="currentRoute === '#/viewbook'">
          <ViewbookProject />
        </template>
        <template v-else-if="currentRoute === '#/thetable'">
          <TheTableProject />
        </template>
        <template v-else-if="currentRoute === '#/springhillsranch'">
          <SpringHillsRanchProject />
        </template>
        <template v-else-if="currentRoute === '#/olivetheabove'">
          <OliveTheAboveProject />
        </template>
        <template v-else>
          <HeroSection />
          <CaseStudiesSection />
          <RecommendationsSection />
          <ContactSection />
        </template>
      </main>
      <Footer />
      <GoUpButton />
    </div>
  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
