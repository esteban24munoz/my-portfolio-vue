<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

type Theme = 'dark' | 'light'

interface Props {
  currentRoute?: string
}

const props = defineProps<Props>()

const currentTheme = ref<Theme>('dark')

const caseStudyTitles: Record<string, string> = {
  '#/foodprints': 'FoodPrints | World Food Programme (WFP) of the United Nations',
  '#/viewbook': 'International Viewbook | Harding University',
  '#/thetable': 'The Table | Harding University',
  '#/springhillsranch': 'Spring Hills Ranch | Freelance'
}

const currentCaseStudyTitle = computed(() => {
  if (props.currentRoute && caseStudyTitles[props.currentRoute]) {
    return caseStudyTitles[props.currentRoute]
  }
  return null
})

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
}

const navigateHome = () => {
  if (window.location.hash) {
    window.location.hash = ''
  }
  window.scrollTo(0, 0)
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-content">
        <div class="navbar-left">
          <a href="#" class="navbar-logo-link" @click.prevent="navigateHome">
            <div class="navbar-logo">
              <svg width="85" height="45" viewBox="0 0 85 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0598145 0.0598221V8.83087H26.4683L42.6514 44.3812H53.0457L60.5669 28.4068V44.3812H72.0598V0.0598221H61.1162L47.8908 28.4068L35.0457 0.0598221H0.0598145Z" :fill="currentTheme === 'dark' ? 'white' : '#0B1923'" :stroke="currentTheme === 'dark' ? 'white' : '#0B1923'" stroke-width="0.119639" stroke-miterlimit="10"/>
                <path d="M0.0598145 17.6443V44.3811H32.426V35.483H9.73587V26.2035H23.1725V17.6443H0.0598145Z" :fill="currentTheme === 'dark' ? 'white' : '#0B1923'" :stroke="currentTheme === 'dark' ? 'white' : '#0B1923'" stroke-width="0.119639" stroke-miterlimit="10"/>
              </svg>
            </div>
          </a>
          <p v-if="currentCaseStudyTitle" class="case-study-title">{{ currentCaseStudyTitle }}</p>
        </div>
        
        <div class="navbar-menu">
          <a href="#/resume" class="nav-link">Resume</a>
          <a href="#/contact" class="nav-link">Contact</a>
          <button class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
            <svg v-if="currentTheme === 'dark'" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="44" height="44" rx="22" fill="#1B1B1B" fill-opacity="0.2"/>
              <rect x="0.5" y="0.5" width="44" height="44" rx="22" fill="url(#paint0_linear_dark)" fill-opacity="0.2"/>
              <rect x="0.5" y="0.5" width="44" height="44" rx="22" stroke="#434343"/>
              <rect x="0.5" y="0.5" width="44" height="44" rx="22" stroke="url(#paint1_linear_dark)"/>
              <path d="M19.2297 9.87296C19.389 10.0671 19.4865 10.3044 19.5098 10.5544C19.5331 10.8044 19.4811 11.0557 19.3606 11.2759C18.4147 13.0114 17.9209 14.9571 17.9249 16.9336C17.9249 23.5087 23.285 28.8328 29.8911 28.8328C30.7545 28.8317 31.59 28.7445 32.3978 28.5712C32.6449 28.5183 32.9021 28.5391 33.1375 28.6309C33.373 28.7228 33.5763 28.8817 33.7223 29.0879C33.8768 29.3025 33.9556 29.5624 33.9465 29.8267C33.9373 30.091 33.8406 30.3447 33.6716 30.5481C32.389 32.1234 30.7711 33.3927 28.9358 34.2634C27.1005 35.1341 25.094 35.5843 23.0626 35.5812C15.5244 35.5812 9.4187 29.5081 9.4187 22.0256C9.4187 16.394 12.8755 11.5637 17.7973 9.51649C18.0424 9.41233 18.3148 9.39078 18.5732 9.45509C18.8316 9.5194 19.0621 9.66608 19.2297 9.87296ZM17.3624 11.5621C15.4699 12.5774 13.8879 14.0864 12.7843 15.9287C11.6808 17.7711 11.0969 19.878 11.0948 22.0256C11.0948 28.599 16.4565 33.9231 23.0626 33.9231C24.6445 33.9255 26.2112 33.6143 27.672 33.0075C29.1329 32.4007 30.459 31.5103 31.5737 30.3879C31.0221 30.4565 30.4612 30.4909 29.8911 30.4909C22.3529 30.4909 16.2488 24.4178 16.2488 16.9353C16.2488 15.027 16.6445 13.2104 17.3624 11.5621Z" fill="#00B5E2"/>
              <defs>
                <linearGradient id="paint0_linear_dark" x1="35.5682" y1="5.58725" x2="16.7584" y2="12.7888" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00B5E2"/>
                  <stop offset="1" stop-color="#0E1A33" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_dark" x1="5.27098" y1="52.5503" x2="11.6711" y2="50.3363" gradientUnits="userSpaceOnUse">
                  <stop offset="0.102787" stop-color="#00B5E2"/>
                  <stop offset="1" stop-color="#2156E6" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            
            <svg v-else width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" stroke="#262626" stroke-width="0.261628"/>
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" stroke="url(#paint0_linear_light)" stroke-width="0.261628"/>
              <path d="M22.5001 27.4055C21.1991 27.4055 19.9513 26.8887 19.0314 25.9687C18.1114 25.0487 17.5946 23.801 17.5946 22.5C17.5946 21.1989 18.1114 19.9512 19.0314 19.0312C19.9513 18.1113 21.1991 17.5945 22.5001 17.5945C23.8011 17.5945 25.0489 18.1113 25.9688 19.0312C26.8888 19.9512 27.4056 21.1989 27.4056 22.5C27.4056 23.801 26.8888 25.0487 25.9688 25.9687C25.0489 26.8887 23.8011 27.4055 22.5001 27.4055ZM22.5001 29.0407C24.2348 29.0407 25.8985 28.3516 27.1251 27.1249C28.3517 25.8983 29.0408 24.2347 29.0408 22.5C29.0408 20.7653 28.3517 19.1016 27.1251 17.875C25.8985 16.6484 24.2348 15.9593 22.5001 15.9593C20.7654 15.9593 19.1017 16.6484 17.8751 17.875C16.6485 19.1016 15.9594 20.7653 15.9594 22.5C15.9594 24.2347 16.6485 25.8983 17.8751 27.1249C19.1017 28.3516 20.7654 29.0407 22.5001 29.0407ZM22.5001 9.41858C22.7169 9.41858 22.9249 9.50472 23.0782 9.65804C23.2315 9.81137 23.3177 10.0193 23.3177 10.2362V13.5065C23.3177 13.7234 23.2315 13.9313 23.0782 14.0846C22.9249 14.238 22.7169 14.3241 22.5001 14.3241C22.2833 14.3241 22.0753 14.238 21.922 14.0846C21.7686 13.9313 21.6825 13.7234 21.6825 13.5065V10.2362C21.6825 10.0193 21.7686 9.81137 21.922 9.65804C22.0753 9.50472 22.2833 9.41858 22.5001 9.41858ZM22.5001 30.6758C22.7169 30.6758 22.9249 30.762 23.0782 30.9153C23.2315 31.0686 23.3177 31.2766 23.3177 31.4934V34.7638C23.3177 34.9806 23.2315 35.1886 23.0782 35.3419C22.9249 35.4952 22.7169 35.5814 22.5001 35.5814C22.2833 35.5814 22.0753 35.4952 21.922 35.3419C21.7686 35.1886 21.6825 34.9806 21.6825 34.7638V31.4934C21.6825 31.2766 21.7686 31.0686 21.922 30.9153C22.0753 30.762 22.2833 30.6758 22.5001 30.6758ZM35.5814 22.5C35.5814 22.7168 35.4952 22.9248 35.3419 23.0781C35.1886 23.2315 34.9806 23.3176 34.7638 23.3176H31.4934C31.2766 23.3176 31.0686 23.2315 30.9153 23.0781C30.762 22.9248 30.6758 22.7168 30.6758 22.5C30.6758 22.2831 30.762 22.0752 30.9153 21.9218C31.0686 21.7685 31.2766 21.6824 31.4934 21.6824H34.7638C34.9806 21.6824 35.1886 21.7685 35.3419 21.9218C35.4952 22.0752 35.5814 22.2831 35.5814 22.5ZM14.3241 22.5C14.3241 22.7168 14.238 22.9248 14.0846 23.0781C13.9313 23.2315 13.7234 23.3176 13.5065 23.3176H10.2362C10.0193 23.3176 9.81137 23.2315 9.65804 23.0781C9.50472 22.9248 9.41858 22.7168 9.41858 22.5C9.41858 22.2831 9.50472 22.0752 9.65804 21.9218C9.81137 21.7685 10.0193 21.6824 10.2362 21.6824H13.5065C13.7234 21.6824 13.9313 21.7685 14.0846 21.9218C14.238 22.0752 14.3241 22.2831 14.3241 22.5ZM30.5415 13.4601C30.6944 13.6135 30.7802 13.8213 30.7802 14.0378C30.7802 14.2544 30.6944 14.4622 30.5415 14.6156L28.2043 16.9527C28.1286 17.0292 28.0385 17.0899 27.9393 17.1315C27.8401 17.173 27.7337 17.1946 27.6262 17.1949C27.5187 17.1952 27.4121 17.1743 27.3127 17.1333C27.2132 17.0924 27.1228 17.0322 27.0466 16.9562C26.9705 16.88 26.9103 16.7896 26.8694 16.6902C26.8284 16.5907 26.8075 16.4841 26.8078 16.3766C26.8081 16.2691 26.8297 16.1627 26.8713 16.0635C26.9128 15.9643 26.9736 15.8742 27.05 15.7985L29.3872 13.4601C29.5405 13.3072 29.7484 13.2214 29.9649 13.2214C30.1815 13.2214 30.3893 13.3072 30.5427 13.4601H30.5415ZM17.9501 26.0515C18.1034 26.2048 18.1893 26.4127 18.1893 26.6292C18.1893 26.8458 18.1034 27.0536 17.9501 27.207L15.6129 29.5442C15.5372 29.6206 15.4471 29.6814 15.3479 29.7229C15.2487 29.7645 15.1423 29.7861 15.0348 29.7864C14.9273 29.7867 14.8207 29.7658 14.7212 29.7248C14.6218 29.6839 14.5314 29.6237 14.4552 29.5477C14.3791 29.4715 14.3189 29.3811 14.2779 29.2817C14.237 29.1822 14.2161 29.0756 14.2164 28.9681C14.2167 28.8606 14.2383 28.7542 14.2799 28.655C14.3214 28.5558 14.3822 28.4657 14.4586 28.39L16.7958 26.0528C16.9491 25.8999 17.1569 25.8141 17.3735 25.8141C17.59 25.8141 17.7979 25.8999 17.9512 26.0528L17.9501 26.0515ZM30.5415 31.5399C30.3881 31.6928 30.1803 31.7786 29.9637 31.7786C29.7472 31.7786 29.5393 31.6928 29.386 31.5399L27.0488 29.2027C26.9724 29.127 26.9116 29.0369 26.8701 28.9377C26.8285 28.8385 26.8069 28.7321 26.8066 28.6246C26.8063 28.5171 26.8272 28.4105 26.8682 28.311C26.9091 28.2116 26.9693 28.1212 27.0455 28.045C27.1216 27.9689 27.212 27.9087 27.3115 27.8677C27.4109 27.8268 27.5175 27.8059 27.625 27.8062C27.7325 27.8065 27.8389 27.8281 27.9381 27.8696C28.0373 27.9112 28.1274 27.972 28.2031 28.0484L30.5403 30.3855C30.6932 30.5389 30.779 30.7467 30.779 30.9633C30.779 31.1798 30.6932 31.3877 30.5403 31.541L30.5415 31.5399ZM17.9501 18.9485C17.7968 19.1014 17.5889 19.1872 17.3724 19.1872C17.1558 19.1872 16.948 19.1014 16.7947 18.9485L14.4574 16.6113C14.3046 16.458 14.2187 16.2501 14.2187 16.0336C14.2187 15.817 14.3046 15.6092 14.4574 15.4559C14.6108 15.3025 14.8186 15.2167 15.0352 15.2167C15.2517 15.2167 15.4595 15.3025 15.6129 15.4559L17.9501 17.7931C18.103 17.9464 18.1888 18.1543 18.1888 18.3708C18.1888 18.5874 18.103 18.7952 17.9501 18.9485Z" fill="#00B5E2"/>
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
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: var(--color-background);
  padding: 2.75rem 1.5rem 0;
  transition: background-color 0.3s ease;
}

.navbar-container {
  max-width: 1084px;
  margin: 0 auto;
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

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navbar-logo svg {
  width: 84px;
  height: auto;
}

.case-study-title {
  color: var(--color-text);
  opacity: 0.7;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .case-study-title {
    display: none;
  }
}

.navbar-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
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

@media (max-width: 768px) {
  .navbar {
    padding: 1.5rem 1.5rem 0;
  }

  .navbar-logo svg {
    width: 60px;
  }

  .navbar-menu {
    gap: 2rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }


}

@media (max-width: 480px) {
  .navbar {
    padding: 1.25rem 1rem 0;
  }

  .navbar-logo svg {
    width: 50px;
  }

  .navbar-menu {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.875rem;
  }


}
</style>
