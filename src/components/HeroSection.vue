<template>
  <section class="hero-section">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-logo">
          <svg width="85" height="45" viewBox="0 0 85 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0598145 0.0598221V8.83087H26.4683L42.6514 44.3812H53.0457L60.5669 28.4068V44.3812H72.0598V0.0598221H61.1162L47.8908 28.4068L35.0457 0.0598221H0.0598145Z" fill="white" stroke="white" stroke-width="0.119639" stroke-miterlimit="10"/>
            <path d="M0.0598145 17.6443V44.3811H32.426V35.483H9.73587V26.2035H23.1725V17.6443H0.0598145Z" fill="white" stroke="white" stroke-width="0.119639" stroke-miterlimit="10"/>
          </svg>
        </div>
        
        <div class="navbar-menu">
          <a href="#resume" class="nav-link">Resume</a>
          <a href="#contact" class="nav-link">Contact</a>
          <button class="theme-toggle" aria-label="Toggle theme">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" fill="#1B1B1B"/>
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" fill="url(#paint0_linear)" fill-opacity="0.5"/>
              <rect x="0.130814" y="0.130814" width="44.7384" height="44.7384" rx="22.3692" stroke="#262626" stroke-width="0.261628"/>
              <path d="M19.2297 9.87296C19.389 10.0671 19.4865 10.3044 19.5098 10.5544C19.5331 10.8044 19.4811 11.0557 19.3606 11.2759C18.4147 13.0114 17.9209 14.9571 17.9249 16.9336C17.9249 23.5087 23.285 28.8328 29.8911 28.8328C30.7545 28.8317 31.59 28.7445 32.3978 28.5712C32.6449 28.5183 32.9021 28.5391 33.1375 28.6309C33.373 28.7228 33.5763 28.8817 33.7223 29.0879C33.8768 29.3025 33.9556 29.5624 33.9465 29.8267C33.9373 30.091 33.8406 30.3447 33.6716 30.5481C32.389 32.1234 30.7711 33.3927 28.9358 34.2634C27.1005 35.1341 25.094 35.5843 23.0626 35.5812C15.5244 35.5812 9.4187 29.5081 9.4187 22.0256C9.4187 16.394 12.8755 11.5637 17.7973 9.51649C18.0424 9.41233 18.3148 9.39078 18.5732 9.45509C18.8316 9.5194 19.0621 9.66608 19.2297 9.87296ZM17.3624 11.5621C15.4699 12.5774 13.8879 14.0864 12.7843 15.9287C11.6808 17.7711 11.0969 19.878 11.0948 22.0256C11.0948 28.599 16.4565 33.9231 23.0626 33.9231C24.6445 33.9255 26.2112 33.6143 27.672 33.0075C29.1329 32.4007 30.459 31.5103 31.5737 30.3879C31.0221 30.4565 30.4612 30.4909 29.8911 30.4909C22.3529 30.4909 16.2488 24.4178 16.2488 16.9353C16.2488 15.027 16.6445 13.2104 17.3624 11.5621Z" fill="#00B5E2"/>
              <defs>
                <linearGradient id="paint0_linear" x1="35.5682" y1="5.58725" x2="16.7584" y2="12.7888" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00B5E2"/>
                  <stop offset="1" stop-color="#0E1A33" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div class="navbar-divider">
        <svg width="100%" height="1" viewBox="0 0 1084 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0.5H1081" stroke="#262626"/>
          <path d="M0 0.5H1081" stroke="url(#paint0_linear_divider)"/>
          <defs>
            <linearGradient id="paint0_linear_divider" x1="981.817" y1="0.38255" x2="981.815" y2="0.835847" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00B5E2"/>
              <stop offset="1" stop-color="#00B5E2" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </nav>

    <div class="hero-content">
      <div class="audience-tabs">
        <span class="tab-item active">For anyone</span>
        <span class="tab-item">Recruiters</span>
        <span class="tab-item">Developers</span>
        <span class="tab-item">Design Directors</span>
      </div>

      <h1 class="hero-heading">
        Hello there, I like to <span class="highlight">solve</span> design problems and develop <span class="highlight">smart</span> user interfaces for rich web experiences.
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
  background-color: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.75rem 1.5rem 2rem;
  gap: 6.5rem;
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
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.07rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.9);
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
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.3s ease;
}

.tab-item.active {
  color: var(--color-accent-light);
}

.tab-item:hover {
  color: rgba(255, 255, 255, 0.8);
}

.hero-heading {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: white;
  margin: 0;
}

.hero-heading .highlight {
  color: var(--color-accent-light);
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
</style>
