<template>
  <section class="recommendations-section">
    <h2 ref="sectionHeaderRef" class="section-title fade-in-element">Recommendations</h2>

    <div ref="containerRef" class="recommendations-container fade-in-element">
      <article class="recommendation-card">
        <div class="card-content">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/73de8380f2f93c2be214406a8af3237d92c7782c?width=168" 
            alt="Amanda Colon"
            class="profile-image"
          />
          <div class="profile-info">
            <h3 class="profile-name">Amanda Colon</h3>
            <p class="profile-title">
              <span class="title-role">Residence Life Coordinator,</span>
              <br/>
              <span class="title-org"> Harding University</span>
            </p>
          </div>
          <p class="recommendation-text">
            Esteban is great to work with. He is positive, easy to talk to and dependable. He asks questions and is always wanting to learn and grow. He has been a valued member of my team.
          </p>
        </div>
      </article>

      <article class="recommendation-card">
        <div class="card-content">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/6e5d7b8d0cdae0b5eb92d5504d46099a6d77c9c7?width=168" 
            alt="Yila Burgos"
            class="profile-image"
          />
          <div class="profile-info">
            <h3 class="profile-name">Yila Burgos</h3>
            <p class="profile-title">
              <span class="title-role">Subdirector,</span>
              <br/>

              <span class="title-org"> Centro ¡Supérate!<br/> Fundación Alberto Motta</span>
            </p>
          </div>
          <p class="recommendation-text">
            I have known Esteban since his high school years. He was a scholarship recipient at Centro ¡Supérate! Fundación Alberto Motta from 2019 to 2021. During his time at our Center, he received high-quality training in English, Computer Science, and Basic Life Skills over the course of three years. Throughout his time as a ¡Supérate! scholar, Esteban demonstrated a strong commitment to his studies and excellent time management. He successfully maintained outstanding academic performance both at his high school and at our Center, while participating in various volunteering activities.
          </p>
        </div>
      </article>
    </div>

    <!-- <button ref="showMoreBtnRef" class="show-more-btn fade-in-element">Show More</button> -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionHeaderRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const showMoreBtnRef = ref<HTMLElement | null>(null)

// Initialize scroll animations
useScrollAnimation(sectionHeaderRef, { threshold: 0.2 })
useScrollAnimation(containerRef, { threshold: 0.1 })
useScrollAnimation(showMoreBtnRef, { threshold: 0.3 })
</script>

<style scoped>
.recommendations-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  width: 100%;
  max-width: 1085px;
  margin: 0 auto;
  padding: 6rem 0rem;
}

.section-title {
  width: 100%;
  text-align: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: normal;
  background: var(--gradient-accent-side);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.recommendations-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.recommendation-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 47.707px 31.805px;
  border-radius: 11.132px;
  border: 1.59px solid var(--linear-top-right);
  background: var(--linear-top-right-fill);
  min-height: 253px;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.profile-image {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 6.361px;
  min-width: 240px;
  flex-shrink: 0;
}

.profile-name {
  color: var(--color-heading);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.profile-title {
  color: var(--color-text);
  opacity: 0.7;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: normal;
  margin: 0;
}

.title-role {
  font-weight: 700;
}

.title-org {
  font-weight: 400;
}

.recommendation-text {
  color: var(--color-text);
  opacity: 0.75;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  line-height: normal;
  flex: 1;
  min-width: 280px;
  margin: 0;
}

.show-more-btn {
  display: flex;
  padding: 4.374px;
  justify-content: center;
  align-items: center;
  gap: 4.374px;
  width: 193px;
  border-radius: 12.012px;
  background: var(--gradient-accent-overlay);
  color: var(--color-text);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 23px;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.show-more-btn:hover {
  opacity: 0.9;
}

.show-more-btn:active {
  opacity: 0.8;
}

/* Large screens */
@media (min-width: 2560px) {
  .section-title {
    font-size: 72px;
  }

  .recommendation-card {
    padding: 60px 40px;
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .profile-name {
    font-size: 32px;
  }

  .profile-title {
    font-size: 20px;
  }

  .recommendation-text {
    font-size: 18px;
  }

  .show-more-btn {
    font-size: 28px;
    width: 240px;
  }
}

/* Tablet and smaller desktops */
@media (max-width: 1440px) {
  .section-title {
    font-size: 48px;
  }

  .recommendation-card {
    padding: 40px 28px;
  }

  .profile-name {
    font-size: 22px;
  }

  .profile-title {
    font-size: 15px;
  }

}

/* Tablet */
@media (max-width: 768px) {
  .recommendations-section {
    gap: 32px;
    padding: 4rem 0rem;
  }

  .section-title {
    font-size: 36px;
    text-align: left;
  }

  .recommendation-card {
    padding: 32px 24px;
    min-height: auto;
  }

  .card-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-info {
    min-width: auto;
    width: 100%;
  }

  .profile-name {
    font-size: 20px;
  }

  .profile-title {
    font-size: 14px;
  }

  .recommendation-text {
    min-width: auto;
    width: 100%;
  }

  .show-more-btn {
    font-size: 20px;
    width: 170px;
  }
}

/* Mobile */
@media (max-width: 425px) {
  .recommendations-section {
    gap: 24px;
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 28px;
    text-align: left;
  }

  .recommendation-card {
    padding: 24px 20px;
  }

  .profile-image {
    width: 70px;
    height: 70px;
  }

  .profile-name {
    font-size: 18px;
  }

  .profile-title {
    font-size: 13px;
  }

  .recommendation-text {
    line-height: 1.4;
  }

  .show-more-btn {
    font-size: 18px;
    width: 150px;
    padding: 8px;
  }
}
</style>
