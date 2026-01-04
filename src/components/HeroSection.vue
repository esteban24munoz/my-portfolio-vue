<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { gsap } from 'gsap'

type AudienceTab = 'For anyone' | 'Recruiters' | 'Developers' | 'Design Directors'

const activeTab = ref<AudienceTab>('For anyone')
const heroHeadingRef = ref<HTMLElement | null>(null)

watch(activeTab, (newValue, oldValue) => {
  console.log(`👀 [HeroSection] activeTab watcher triggered:`)
  console.log(`   OLD: ${oldValue}`)
  console.log(`   NEW: ${newValue}`)
}, { immediate: true })

const headingContent = computed(() => {
  console.log('🔄 [HeroSection] headingContent computed - activeTab.value:', activeTab.value)

  const result = (() => {
    switch (activeTab.value) {
      case 'Recruiters':
        return {
          parts: [
            { text: "I'm a ", highlight: false },
            { text: "Front End Developer ", highlight: true },
            { text: ' and Graphic Designer, skilled', highlight: false },
            { text: ' at creating responsive web applications and ', highlight: false },
            { text: 'design solutions.', highlight: true }
          ]
        }
      case 'Developers':
        return {
          parts: [
            { text: 'const me', highlight: true },
            { text: ' = FrontEndDev + GraphicDesigner;\nteamwork(globalTeams) => impactfulSolutions;\nreturn ', highlight: false },
            { text: 'readyTo("innovate");', highlight: true }
          ]
        }
      case 'Design Directors':
        return {
          parts: [
            { text: 'I create ', highlight: false },
            { text: 'storytelling-focused', highlight: true },
            { text: ' websites through close collaboration with developers and design teams.', highlight: false }
          ]
        }
      case 'For anyone':
      default:
        return {
          parts: [
            { text: 'Hi, I love to ', highlight: false },
            { text: 'solve', highlight: false },
            { text: ' design challenges ', highlight: true },
            { text: 'and bring them to life through clean,', highlight: false },
            { text: ' scalable code ', highlight: true },
            { text: 'and intuitive interfaces.', highlight: false }
          ]
        }
    }
  })()

  console.log('📝 [HeroSection] headingContent result:', result)
  return result
})

const setActiveTab = (tab: AudienceTab) => {
  console.log('🖱️ [HeroSection] Tab clicked - setActiveTab called with:', tab)
  console.log(`   Current activeTab before update: ${activeTab.value}`)
  activeTab.value = tab
  console.log(`   Current activeTab after update: ${activeTab.value}`)
  console.log(`   All parts in headingContent:`, headingContent.value.parts.map(p => p.text))
}

const animateHeading = () => {
  if (!heroHeadingRef.value) return

  // Animate hero heading: line reveal from baseline upward
  gsap.fromTo(heroHeadingRef.value,
    {
      y: '100%'
    },
    {
      y: '0%',
      duration: 1,
      ease: 'power3.out'
    }
  )
}

onMounted(() => {
  console.log('✅ [HeroSection] Component mounted')
  console.log(`   Initial activeTab: ${activeTab.value}`)
  console.log(`   Initial headingContent parts:`, headingContent.value.parts)

  // Start animation after mount (component is visible after preloader completes)
  animateHeading()
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="audience-tabs">
        <span class="tab-item" :class="{ active: activeTab === 'For anyone' }" @click="setActiveTab('For anyone')">
          For anyone
        </span>
        <span class="tab-item" :class="{ active: activeTab === 'Recruiters' }" @click="setActiveTab('Recruiters')">
          Recruiters
        </span>
        <span class="tab-item" :class="{ active: activeTab === 'Developers' }" @click="setActiveTab('Developers')">
          Developers
        </span>
        <span class="tab-item" :class="{ active: activeTab === 'Design Directors' }"
          @click="setActiveTab('Design Directors')">
          Design Directors
        </span>
      </div>

      <div class="hero-heading-container">
        <h1 ref="heroHeadingRef" class="hero-heading">
          <template v-for="(part, index) in headingContent.parts" :key="index">
            <span v-if="part.highlight" class="highlight">{{ part.text }}</span>
            <template v-else>{{ part.text }}</template>
          </template>
        </h1>
      </div>
    </div>

    <div class="scroll-indicator">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
        <path
          d="M24.667 1.85019L13.3039 12.6823C13.1984 12.783 13.0731 12.8629 12.9351 12.9174C12.7972 12.9719 12.6493 13 12.5 13C12.3507 13 12.2028 12.9719 12.0649 12.9174C11.9269 12.8629 11.8016 12.783 11.6961 12.6823L0.333001 1.85019C0.119784 1.64693 0 1.37126 0 1.08381C0 0.796369 0.119784 0.520696 0.333001 0.317441C0.546219 0.114187 0.835403 0 1.13694 0C1.43847 0 1.72766 0.114187 1.94087 0.317441L12.5 10.3845L23.0591 0.317441C23.1647 0.2168 23.29 0.136967 23.428 0.0825C23.5659 0.0280332 23.7138 0 23.8631 0C24.0124 0 24.1602 0.0280332 24.2981 0.0825C24.4361 0.136967 24.5614 0.2168 24.667 0.317441C24.7726 0.418083 24.8563 0.537562 24.9135 0.669056C24.9706 0.800551 25 0.941486 25 1.08381C25 1.22614 24.9706 1.36708 24.9135 1.49857C24.8563 1.63007 24.7726 1.74955 24.667 1.85019Z"
          fill="white" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 1.5rem 2rem;
  gap: 3rem;
  transition: background-color 0.3s ease;
}

.hero-content {
  width: 100%;
  max-width: 1084px;
  display: flex;
  flex-direction: column;
  gap: 1.66rem;
  padding-bottom: 52px;
}

.audience-tabs {
  display: flex;
  align-items: center;
  gap: 2.39rem;
  flex-wrap: wrap;
}

.tab-item {
  font-size: 1.17rem;
  font-weight: 700;
  color: var(--color-text);
  opacity: 0.5;
  cursor: pointer;
  transition: color 0.3s ease, opacity 0.3s ease;
  user-select: none;
}

.tab-item.active {
  color: var(--color-accent);
  opacity: 1;
}

.tab-item:hover {
  opacity: 0.8;
}

.tab-item.active:hover {
  color: var(--color-accent);
  opacity: 1;
}

.hero-heading-container {
  overflow: hidden;
  display: inline-block;
  width: 100%;
}

.hero-heading {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-heading);
  margin: 0;
  white-space: pre-line;
  transition: color 0.3s ease;
  transform: translateY(100%);
  display: inline-block;
  width: 100%;
}

.hero-heading .highlight {
  background: var(--gradient-accent-side);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  font-weight: 800;
}

.scroll-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
 
 
}

.scroll-indicator svg {
  width: 32px;
  height: 32px;


}

@media (max-width: 1200px) {
  .hero-section {
    gap: 5rem;
    padding: 2rem 2rem 1.5rem;
  }

  .hero-heading {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    gap: 4rem;
    padding: 1.5rem 1.5rem 1.5rem;
    text-align: left;
  }

  .audience-tabs {
    gap: 1.5rem;
  }

  .tab-item {
    font-size: 1rem;
  }

  .hero-heading {
    font-size: 2.5rem;
    line-height: 1.25;
  }
}

@media (max-width: 480px) {
  .hero-section {
    gap: 3rem;
    padding: 1.25rem 1rem 1.25rem;
  }

  .audience-tabs {
    gap: 1rem;
  }

  .tab-item {
    font-size: 0.875rem;
  }

  .hero-heading {
    font-size: 1.75rem;
    line-height: 1.3;
  }

  .scroll-indicator svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 425px) {
  .hero-section {
    text-align: left;
  }

  .hero-heading {
    font-size: 1.65rem;
  }
}
</style>
