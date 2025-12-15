<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

type AudienceTab = 'For anyone' | 'Recruiters' | 'Developers' | 'Design Directors'

const activeTab = ref<AudienceTab>('For anyone')

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
            { text: "I'm a Front End Developer and Graphic Designer, ", highlight: false },
            { text: 'skilled', highlight: true },
            { text: ' at creating responsive web applications and ', highlight: false },
            { text: 'design solutions', highlight: true }
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
            { text: 'Hello there, I like to ', highlight: false },
            { text: 'solve', highlight: true },
            { text: ' design problems and develop ', highlight: false },
            { text: 'smart', highlight: true },
            { text: ' user interfaces for rich web experiences.', highlight: false }
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

onMounted(() => {
  console.log('✅ [HeroSection] Component mounted')
  console.log(`   Initial activeTab: ${activeTab.value}`)
  console.log(`   Initial headingContent parts:`, headingContent.value.parts)
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="audience-tabs">
        <span 
          class="tab-item" 
          :class="{ active: activeTab === 'For anyone' }"
          @click="setActiveTab('For anyone')"
        >
          For anyone
        </span>
        <span 
          class="tab-item" 
          :class="{ active: activeTab === 'Recruiters' }"
          @click="setActiveTab('Recruiters')"
        >
          Recruiters
        </span>
        <span 
          class="tab-item" 
          :class="{ active: activeTab === 'Developers' }"
          @click="setActiveTab('Developers')"
        >
          Developers
        </span>
        <span 
          class="tab-item" 
          :class="{ active: activeTab === 'Design Directors' }"
          @click="setActiveTab('Design Directors')"
        >
          Design Directors
        </span>
      </div>

      <h1 class="hero-heading">
        <template v-for="(part, index) in headingContent.parts" :key="index">
          <span v-if="part.highlight" class="highlight">{{ part.text }}</span>
          <template v-else>{{ part.text }}</template>
        </template>
      </h1>
    </div>

    <div class="scroll-indicator">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29208 13.292C3.38497 13.1989 3.49532 13.125 3.61681 13.0746C3.7383 13.0242 3.86854 12.9982 4.00008 12.9982C4.13161 12.9982 4.26186 13.0242 4.38335 13.0746C4.50484 13.125 4.61519 13.1989 4.70808 13.292L16.0001 24.586L27.2921 13.292C27.4799 13.1042 27.7345 12.9988 28.0001 12.9988C28.2656 12.9988 28.5203 13.1042 28.7081 13.292C28.8959 13.4798 29.0013 13.7345 29.0013 14C29.0013 14.2656 28.8959 14.5202 28.7081 14.708L16.7081 26.708C16.6152 26.8011 16.5048 26.875 16.3833 26.9254C16.2619 26.9759 16.1316 27.0018 16.0001 27.0018C15.8685 27.0018 15.7383 26.9759 15.6168 26.9254C15.4953 26.875 15.385 26.8011 15.2921 26.708L3.29208 14.708C3.19895 14.6151 3.12507 14.5048 3.07465 14.3833C3.02424 14.2618 2.99829 14.1316 2.99829 14C2.99829 13.8685 3.02424 13.7382 3.07465 13.6167C3.12507 13.4953 3.19895 13.3849 3.29208 13.292Z" fill="url(#paint0_linear_chevron)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29208 5.29202C3.38497 5.19889 3.49532 5.12501 3.61681 5.07459C3.7383 5.02418 3.86854 4.99823 4.00008 4.99823C4.13161 4.99823 4.26186 5.02418 4.38335 5.07459C4.50484 5.12501 4.61519 5.19889 4.70808 5.29202L16.0001 16.586L27.2921 5.29202C27.3851 5.19904 27.4954 5.12529 27.6169 5.07497C27.7384 5.02465 27.8686 4.99875 28.0001 4.99875C28.1316 4.99875 28.2618 5.02465 28.3832 5.07497C28.5047 5.12529 28.6151 5.19904 28.7081 5.29202C28.8011 5.38499 28.8748 5.49537 28.9251 5.61685C28.9754 5.73833 29.0013 5.86853 29.0013 6.00002C29.0013 6.13151 28.9754 6.26171 28.9251 6.38318C28.8748 6.50466 28.8011 6.61504 28.7081 6.70802L16.7081 18.708C16.6152 18.8011 16.5048 18.875 16.3833 18.9254C16.2619 18.9759 16.1316 19.0018 16.0001 19.0018C15.8685 19.0018 15.7383 18.9759 15.6168 18.9254C15.4953 18.875 15.385 18.8011 15.2921 18.708L3.29208 6.70802C3.19895 6.61513 3.12507 6.50478 3.07465 6.38329C3.02424 6.26179 2.99829 6.13155 2.99829 6.00002C2.99829 5.86848 3.02424 5.73824 3.07465 5.61675C3.12507 5.49526 3.19895 5.38491 3.29208 5.29202Z" fill="url(#paint1_linear_chevron)"/>
        <defs>
          <linearGradient id="paint0_linear_chevron" x1="2.99829" y1="20" x2="29.0013" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0.399038" stop-color="white"/>
            <stop offset="1" stop-color="#00B5E2"/>
          </linearGradient>
          <linearGradient id="paint1_linear_chevron" x1="2.99829" y1="12" x2="29.0013" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0.399038" stop-color="white"/>
            <stop offset="1" stop-color="#00B5E2"/>
          </linearGradient>
        </defs>
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
  padding: 6.5rem 1.5rem 2rem;
  gap: 3rem;
  transition: background-color 0.3s ease;
}

.hero-content {
  width: 100%;
  max-width: 1084px;
  display: flex;
  flex-direction: column;
  gap: 1.66rem;
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

.hero-heading {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-heading);
  margin: 0;
  white-space: pre-line;
  transition: color 0.3s ease;
}

.hero-heading .highlight {
  color: var(--color-accent);
  font-weight: 800;
}

.scroll-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
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
