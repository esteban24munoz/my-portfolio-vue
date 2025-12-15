<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

type AudienceTab = 'For anyone' | 'Recruiters' | 'Developers' | 'Design Directors'
type Theme = 'dark' | 'light'

const activeTab = ref<AudienceTab>('For anyone')
const currentTheme = ref<Theme>('dark')

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

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
}

onMounted(() => {
  console.log('✅ [HeroSection] Component mounted')
  console.log(`   Initial activeTab: ${activeTab.value}`)
  console.log(`   Initial headingContent parts:`, headingContent.value.parts)

  document.documentElement.setAttribute('data-theme', currentTheme.value)
})
</script>

<template>
  <section class="hero-section">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-logo">
          <svg width="85" height="45" viewBox="0 0 85 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0598145 0.0598221V8.83087H26.4683L42.6514 44.3812H53.0457L60.5669 28.4068V44.3812H72.0598V0.0598221H61.1162L47.8908 28.4068L35.0457 0.0598221H0.0598145Z" :fill="currentTheme === 'dark' ? 'white' : '#0B1923'" :stroke="currentTheme === 'dark' ? 'white' : '#0B1923'" stroke-width="0.119639" stroke-miterlimit="10"/>
            <path d="M0.0598145 17.6443V44.3811H32.426V35.483H9.73587V26.2035H23.1725V17.6443H0.0598145Z" :fill="currentTheme === 'dark' ? 'white' : '#0B1923'" :stroke="currentTheme === 'dark' ? 'white' : '#0B1923'" stroke-width="0.119639" stroke-miterlimit="10"/>
          </svg>
        </div>
        
        <div class="navbar-menu">
          <a href="#resume" class="nav-link">Resume</a>
          <a href="#contact" class="nav-link">Contact</a>
          <button class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
            <svg v-if="currentTheme === 'dark'" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" fill="#1B1B1B"/>
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" fill="url(#paint0_linear_dark)" fill-opacity="0.5"/>
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" stroke="#262626" stroke-width="0.261628"/>
              <path d="M19.2297 9.87296C19.389 10.0671 19.4865 10.3044 19.5098 10.5544C19.5331 10.8044 19.4811 11.0557 19.3606 11.2759C18.4147 13.0114 17.9209 14.9571 17.9249 16.9336C17.9249 23.5087 23.285 28.8328 29.8911 28.8328C30.7545 28.8317 31.59 28.7445 32.3978 28.5712C32.6449 28.5183 32.9021 28.5391 33.1375 28.6309C33.373 28.7228 33.5763 28.8817 33.7223 29.0879C33.8768 29.3025 33.9556 29.5624 33.9465 29.8267C33.9373 30.091 33.8406 30.3447 33.6716 30.5481C32.389 32.1234 30.7711 33.3927 28.9358 34.2634C27.1005 35.1341 25.094 35.5843 23.0626 35.5812C15.5244 35.5812 9.4187 29.5081 9.4187 22.0256C9.4187 16.394 12.8755 11.5637 17.7973 9.51649C18.0424 9.41233 18.3148 9.39078 18.5732 9.45509C18.8316 9.5194 19.0621 9.66608 19.2297 9.87296ZM17.3624 11.5621C15.4699 12.5774 13.8879 14.0864 12.7843 15.9287C11.6808 17.7711 11.0969 19.878 11.0948 22.0256C11.0948 28.599 16.4565 33.9231 23.0626 33.9231C24.6445 33.9255 26.2112 33.6143 27.672 33.0075C29.1329 32.4007 30.459 31.5103 31.5737 30.3879C31.0221 30.4565 30.4612 30.4909 29.8911 30.4909C22.3529 30.4909 16.2488 24.4178 16.2488 16.9353C16.2488 15.027 16.6445 13.2104 17.3624 11.5621Z" fill="#00B5E2"/>
              <defs>
                <linearGradient id="paint0_linear_dark" x1="35.5682" y1="5.58725" x2="16.7584" y2="12.7888" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00B5E2"/>
                  <stop offset="1" stop-color="#0E1A33" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            <svg v-else width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" stroke="#262626" stroke-width="0.261628"/>
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" stroke="url(#paint0_linear_light)" stroke-width="0.261628"/>
              <path d="M22.5001 27.4055C21.1991 27.4055 19.9513 26.8887 19.0314 25.9687C18.1114 25.0487 17.5946 23.801 17.5946 22.5C17.5946 21.1989 18.1114 19.9512 19.0314 19.0312C19.9513 18.1113 21.1991 17.5945 22.5001 17.5945C23.8011 17.5945 25.0489 18.1113 25.9688 19.0312C26.8888 19.9512 27.4056 21.1989 27.4056 22.5C27.4056 23.801 26.8888 25.0487 25.9688 25.9687C25.0489 26.8887 23.8011 27.4055 22.5001 27.4055ZM22.5001 29.0407C24.2348 29.0407 25.8985 28.3516 27.1251 27.1249C28.3517 25.8983 29.0408 24.2347 29.0408 22.5C29.0408 20.7653 28.3517 19.1016 27.1251 17.875C25.8985 16.6484 24.2348 15.9593 22.5001 15.9593C20.7654 15.9593 19.1017 16.6484 17.8751 17.875C16.6485 19.1016 15.9594 20.7653 15.9594 22.5C15.9594 24.2347 16.6485 25.8983 17.8751 27.1249C19.1017 28.3516 20.7654 29.0407 22.5001 29.0407ZM22.5001 9.41858C22.7169 9.41858 22.9249 9.50472 23.0782 9.65804C23.2315 9.81137 23.3177 10.0193 23.3177 10.2362V13.5065C23.3177 13.7234 23.2315 13.9313 23.0782 14.0846C22.9249 14.238 22.7169 14.3241 22.5001 14.3241C22.2833 14.3241 22.0753 14.238 21.922 14.0846C21.7686 13.9313 21.6825 13.7234 21.6825 13.5065V10.2362C21.6825 10.0193 21.7686 9.81137 21.922 9.65804C22.0753 9.50472 22.2833 9.41858 22.5001 9.41858ZM22.5001 30.6758C22.7169 30.6758 22.9249 30.762 23.0782 30.9153C23.2315 31.0686 23.3177 31.2766 23.3177 31.4934V34.7638C23.3177 34.9806 23.2315 35.1886 23.0782 35.3419C22.9249 35.4952 22.7169 35.5814 22.5001 35.5814C22.2833 35.5814 22.0753 35.4952 21.922 35.3419C21.7686 35.1886 21.6825 34.9806 21.6825 34.7638V31.4934C21.6825 31.2766 21.7686 31.0686 21.922 30.9153C22.0753 30.762 22.2833 30.6758 22.5001 30.6758ZM35.5815 22.5C35.5815 22.7168 35.4954 22.9248 35.342 23.0781C35.1887 23.2314 34.9807 23.3176 34.7639 23.3176H31.4936C31.2767 23.3176 31.0688 23.2314 30.9154 23.0781C30.7621 22.9248 30.676 22.7168 30.676 22.5C30.676 22.2831 30.7621 22.0752 30.9154 21.9219C31.0688 21.7685 31.2767 21.6824 31.4936 21.6824H34.7639C34.9807 21.6824 35.1887 21.7685 35.342 21.9219C35.4954 22.0752 35.5815 22.2831 35.5815 22.5ZM14.3242 22.5C14.3242 22.7168 14.2381 22.9248 14.0848 23.0781C13.9314 23.2314 13.7235 23.3176 13.5066 23.3176H10.2363C10.0195 23.3176 9.81149 23.2314 9.65817 23.0781C9.50484 22.9248 9.4187 22.7168 9.4187 22.5C9.4187 22.2831 9.50484 22.0752 9.65817 21.9219C9.81149 21.7685 10.0195 21.6824 10.2363 21.6824H13.5066C13.7235 21.6824 13.9314 21.7685 14.0848 21.9219C14.2381 22.0752 14.3242 22.2831 14.3242 22.5ZM31.7503 13.2498C31.9036 13.4031 31.9897 13.611 31.9897 13.8278C31.9897 14.0446 31.9036 14.2525 31.7503 14.4059L29.4381 16.7196C29.3621 16.7955 29.2719 16.8557 29.1726 16.8968C29.0733 16.9378 28.967 16.9589 28.8595 16.9588C28.6426 16.9587 28.4346 16.8723 28.2813 16.7188C28.2053 16.6428 28.1452 16.5526 28.1041 16.4533C28.0631 16.354 28.042 16.2476 28.0421 16.1402C28.0422 15.9232 28.1286 15.7152 28.2821 15.5619L30.5942 13.2498C30.7475 13.0965 30.9555 13.0104 31.1722 13.0104C31.389 13.0104 31.597 13.0965 31.7503 13.2498ZM16.7181 28.282C16.8714 28.4353 16.9575 28.6432 16.9575 28.86C16.9575 29.0768 16.8714 29.2847 16.7181 29.438L14.406 31.7502C14.2518 31.8991 14.0453 31.9815 13.8309 31.9796C13.6165 31.9778 13.4115 31.8918 13.2599 31.7402C13.1083 31.5886 13.0223 31.3835 13.0204 31.1692C13.0186 30.9548 13.101 30.7483 13.2499 30.5941L15.5621 28.282C15.7154 28.1287 15.9233 28.0426 16.1401 28.0426C16.3569 28.0426 16.5648 28.1287 16.7181 28.282ZM31.7503 31.7502C31.597 31.9034 31.389 31.9895 31.1722 31.9895C30.9555 31.9895 30.7475 31.9034 30.5942 31.7502L28.2821 29.438C28.1331 29.2838 28.0507 29.0773 28.0526 28.8629C28.0545 28.6486 28.1404 28.4435 28.292 28.2919C28.4436 28.1403 28.6487 28.0543 28.8631 28.0525C29.0774 28.0506 29.2839 28.133 29.4381 28.282L31.7503 30.5941C31.9036 30.7474 31.9897 30.9553 31.9897 31.1721C31.9897 31.3889 31.9036 31.5968 31.7503 31.7502ZM16.7181 16.7196C16.5648 16.8729 16.3569 16.959 16.1401 16.959C15.9233 16.959 15.7154 16.8729 15.5621 16.7196L13.2499 14.4059C13.1718 14.3304 13.1095 14.2402 13.0667 14.1405C13.0238 14.0407 13.0013 13.9334 13.0003 13.8249C12.9994 13.7163 13.0201 13.6087 13.0612 13.5082C13.1023 13.4077 13.163 13.3164 13.2398 13.2397C13.3165 13.1629 13.4078 13.1022 13.5083 13.0611C13.6088 13.02 13.7164 12.9993 13.825 13.0002C13.9336 13.0012 14.0408 13.0237 14.1406 13.0666C14.2403 13.1094 14.3306 13.1717 14.406 13.2498L16.7181 15.5619C16.7943 15.6379 16.8547 15.7281 16.8959 15.8274C16.9371 15.9268 16.9583 16.0332 16.9583 16.1408C16.9583 16.2483 16.9371 16.3548 16.8959 16.4541C16.8547 16.5535 16.7943 16.6437 16.7181 16.7196Z" fill="#00B5E2"/>
              <defs>
                <linearGradient id="paint0_linear_light" x1="5.27098" y1="52.5503" x2="11.6711" y2="50.3363" gradientUnits="userSpaceOnUse">
                  <stop offset="0.102787" stop-color="#00B5E2"/>
                  <stop offset="1" stop-color="#2156E6" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div class="navbar-divider">
        <svg v-if="currentTheme === 'dark'" width="100%" height="1" viewBox="0 0 1084 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0.5H1081" stroke="var(--color-divider-dark)"/>
          <path d="M0 0.5H1081" stroke="url(#paint0_linear_divider_dark)"/>
          <defs>
            <linearGradient id="paint0_linear_divider_dark" x1="981.817" y1="0.38255" x2="981.815" y2="0.835847" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00B5E2"/>
              <stop offset="1" stop-color="#00B5E2" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg v-else width="100%" height="1" viewBox="0 0 1081 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0.5H1081M0 0.5H1081" stroke="url(#paint0_linear_divider_light)"/>
          <path d="M0 0.5H1081M0 0.5H1081" stroke="black" stroke-opacity="0.1"/>
          <defs>
            <linearGradient id="paint0_linear_divider_light" x1="981.818" y1="0.382551" x2="981.76" y2="8.64535" gradientUnits="userSpaceOnUse">
              <stop offset="0.735577" stop-color="#00B5E2" stop-opacity="0"/>
              <stop offset="0.8" stop-color="#00B5E2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </nav>

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
  padding: 2.75rem 1.5rem 2rem;
  gap: 6.5rem;
  transition: background-color 0.3s ease;
}

.navbar {
  width: 100%;
  max-width: 1084px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-logo svg {
  width: 84px;
  height: auto;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--color-text);
  opacity: 0.5;
  font-size: 1.07rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease, opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.9;
}

.theme-toggle {
  width: 45px;
  height: 45px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.theme-toggle:hover {
  transform: scale(1.05);
}

.navbar-divider {
  width: 100%;
  height: 1px;
  transition: opacity 0.3s ease;
}

.navbar-divider svg {
  display: block;
  transition: opacity 0.3s ease;
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
  font-size: 4.5rem;
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

  .navbar-logo svg {
    width: 60px;
  }

  .navbar-menu {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }

  .theme-toggle {
    width: 38px;
    height: 38px;
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

  .navbar-logo svg {
    width: 50px;
  }

  .navbar-menu {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.875rem;
  }

  .theme-toggle {
    width: 35px;
    height: 35px;
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
