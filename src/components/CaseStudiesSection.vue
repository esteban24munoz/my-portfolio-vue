<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import SpringHillsCover from '../assets/spring_hills_cover.png'
import OliveTheAboveCover from '../assets/olive_cover.png'
import CarmenCover from '../assets/carmen_cover.png'
import ViewbookCover from '../assets/viewbook_cover.webp'
import TheTableCover from '../assets/the_table_cover.png'

type FilterTab = 'All' | 'Development' | 'Graphic Design'
type CaseStudy = {
  id: string
  title: string
  role: string
  description: string
  skills: string[]
  category: 'Development' | 'Graphic Design'
  image?: string
  coverImage?: string
  onClick?: () => void
}

const activeFilter = ref<FilterTab>('All')

const setFilter = (filter: FilterTab) => {
  activeFilter.value = filter
}

const navigateToFoodprints = () => {
  window.location.hash = '#/foodprints'
  window.scrollTo(0, 0)
}

const navigateToViewbook = () => {
  window.location.hash = '#/viewbook'
  window.scrollTo(0, 0)
}

const navigateToTheTable = () => {
  window.location.hash = '#/thetable'
  window.scrollTo(0, 0)
}

const navigateToSpringHillsRanch = () => {
  window.location.hash = '#/springhillsranch'
  window.scrollTo(0, 0)
}
const navigateToOliveTheAbove = () => {
  window.location.hash = '#/olivetheabove'
  window.scrollTo(0, 0)
}

const caseStudies: CaseStudy[] = [
  {
    id: 'card-1',
    title: 'FoodPrints | World Food Programme (WFP) of the United Nations',
    role: 'UX/UI Designer & Web Developer',
    description: 'Collaborated with product managers, developers and designers to create 4 fully responsive and interactive websites that draws from public statistics, figures of WFP data across the region.',
    skills: ['React', 'TypeScript', 'Figma', 'AWS', 'GitHub', 'SEO'],
    category: 'Development',
    image: CarmenCover,
    onClick: navigateToFoodprints
  },
  {
    id: 'card-2',
    title: 'International Viewbook | Harding University',
    role: 'Graphic Designer',
    description: 'Led the visual development of a comprehensive viewbook in just one month, presenting initial sketches and rough concepts to stakeholders, iterating on feedback to refine the design',
    skills: ['Indesign', 'Photoshop', 'Ilustrator'],
    category: 'Graphic Design',
    image: ViewbookCover,
    onClick: navigateToViewbook
  },
  {
    id: 'card-3',
    title: 'The Table | Harding University',
    role: 'UX/UI Designer & Web Developer',
    description: 'Designed and developed a robust React web application that displays products in stock and out of stock to Harding Students, leveraging MySQL databases for real-time inventory control and the registration of 1167 shoppers since it began operations.',
    skills: ['React', 'TypeScript', 'Figma'],
    category: 'Development',
    image: TheTableCover,
    onClick: navigateToTheTable
  },
  {
    id: 'card-4',
    title: 'Spring Hills Ranch | Freelance',
    role: 'UX/UI Designer & Web Developer',
    description: 'An informational e-commerce website from conception to implementation, specifically tailored to meet the needs of a small, family-run cattle farming enterprise in Mt. Vernon, Missouri.',
    skills: ['Figma', 'PHP', 'APIs', 'SEO'],
    category: 'Development',
    coverImage: SpringHillsCover,
    onClick: navigateToSpringHillsRanch
  },
  {
    id: 'card-5',
    title: 'Olive the Above | Fusion Cuisine Branding Team Project',
    role: 'Graphic Design',
    description: 'Branding project focused on creating a fresh, cohesive brand identity for a new fusion food concept starting as a food truck and expanding into catering and a future restaurant.',
    skills: ['Indesign', 'Photoshop', 'Ilustrator'],
    category: 'Graphic Design',
    coverImage: OliveTheAboveCover,
    onClick: navigateToOliveTheAbove

  }
]

const filteredCaseStudies = computed(() => {
  if (activeFilter.value === 'All') {
    return caseStudies
  }
  return caseStudies.filter(study => study.category === activeFilter.value)
})

// Scroll animation setup
const sectionHeaderRef = ref<HTMLElement | null>(null)
const bentoGridRef = ref<HTMLElement | null>(null)
const moreProjectsBtnRef = ref<HTMLElement | null>(null)

// Initialize scroll animations
useScrollAnimation(sectionHeaderRef, { threshold: 0.2 })
useScrollAnimation(bentoGridRef, { threshold: 0.1 })
useScrollAnimation(moreProjectsBtnRef, { threshold: 0.3 })

</script>

<template>
  <section class="case-studies-section">
    <div ref="sectionHeaderRef" class="section-header fade-in-element">
      <h2 class="section-title">Case Studies</h2>
      <div class="filter-tabs">
        <button 
          class="filter-tab"
          :class="{ active: activeFilter === 'All' }"
          @click="setFilter('All')"
        >
          All
        </button>
        <button 
          class="filter-tab"
          :class="{ active: activeFilter === 'Development' }"
          @click="setFilter('Development')"
        >
          Development
        </button>
        <button 
          class="filter-tab"
          :class="{ active: activeFilter === 'Graphic Design' }"
          @click="setFilter('Graphic Design')"
        >
          Graphic Design
        </button>
      </div>
    </div>

    <div ref="bentoGridRef" class="bento-grid fade-in-element" :class="`grid-${filteredCaseStudies.length}`">
      <article
        v-for="(study, index) in filteredCaseStudies"
        :key="study.id"
        :class="['case-card', study.id]"
        @click="study.onClick"
      >
        <div v-if="study.coverImage" class="card-cover">
          <img :src="study.coverImage" :alt="`${study.title} cover`" class="cover-image" />
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">{{ study.title }}</h3>
            <p class="card-role">{{ study.role }}</p>
          </div>
          <p class="card-description">
            {{ study.description }}
          </p>
          <div class="card-skills">
            <span v-for="skill in study.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
        <div v-if="study.image" class="card-image">
          <img :src="study.image" :alt="study.title" />
        </div>
      </article>
    </div>

    <button ref="moreProjectsBtnRef" class="more-projects-btn fade-in-element">More Projects</button>
  </section>
</template>

<style scoped>
/* Scroll-triggered fade-in animations */
.fade-in-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

.case-studies-section {
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.44rem;
}

.section-header {
  text-align: center;
  max-width: 1082px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 1;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  transition: background 0.3s ease;
}

.filter-tabs {
  display: flex;
  align-items: center;
  gap: 1.7rem;
  flex-wrap: wrap;
}

.filter-tab {
  background: none;
  border: none;
  padding: 0;
  font-size: 1.19rem;
  font-weight: 700;
  color: var(--color-text);
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.filter-tab.active {
  color: var(--color-heading);
  opacity: 1;
}

.filter-tab:hover {
  opacity: 0.8;
}

.bento-grid {
  width: 100%;
  max-width: 1082px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

/* Default layout (All - 5 cards) */
.bento-grid.grid-5 {
  grid-template-areas:
    "card1 card1 card1 card1 card1 card1 card1 card2 card2 card2 card2 card2"
    "card4 card4 card4 card4 card4 card3 card3 card3 card3 card3 card3 card3"
    "card5 card5 card5 card5 card5 card3 card3 card3 card3 card3 card3 card3";
}

.bento-grid.grid-5 .card-1 { grid-area: card1; }
.bento-grid.grid-5 .card-2 { grid-area: card2; }
.bento-grid.grid-5 .card-3 { grid-area: card3; }
.bento-grid.grid-5 .card-4 { grid-area: card4; }
.bento-grid.grid-5 .card-5 { grid-area: card5; }

/* Development filter (3 cards: FoodPrints, The Table, Spring Hills Ranch) */
.bento-grid.grid-3 {
  grid-template-areas:
    "card1 card1 card1 card1 card1 card1 card3 card3 card3 card3 card3 card3"
    "card4 card4 card4 card4 card4 card4 card3 card3 card3 card3 card3 card3";
}

.bento-grid.grid-3 .case-card:nth-child(1) { grid-area: card1; }
.bento-grid.grid-3 .case-card:nth-child(2) { grid-area: card3; }
.bento-grid.grid-3 .case-card:nth-child(3) { grid-area: card4; }

/* Graphic Design filter (2 cards: Viewbook, Packaging Design) */
.bento-grid.grid-2 {
  grid-template-areas:
    "card2 card2 card2 card2 card2 card2 card5 card5 card5 card5 card5 card5";
}

.bento-grid.grid-2 .case-card:nth-child(1) { grid-area: card2; }
.bento-grid.grid-2 .case-card:nth-child(2) { grid-area: card5; }

/* Fallback for single card */
.bento-grid.grid-1 {
  grid-template-areas: "card1 card1 card1 card1 card1 card1 card1 card1 card1 card1 card1 card1";
}

.bento-grid.grid-1 .case-card { grid-area: card1; }

/* Fallback for 4 cards */
.bento-grid.grid-4 {
  grid-template-areas:
    "card1 card1 card1 card1 card1 card1 card2 card2 card2 card2 card2 card2"
    "card3 card3 card3 card3 card3 card3 card4 card4 card4 card4 card4 card4";
}

.bento-grid.grid-4 .case-card:nth-child(1) { grid-area: card1; }
.bento-grid.grid-4 .case-card:nth-child(2) { grid-area: card2; }
.bento-grid.grid-4 .case-card:nth-child(3) { grid-area: card3; }
.bento-grid.grid-4 .case-card:nth-child(4) { grid-area: card4; }

.case-card {
  border: 1.578px solid var(--linear-top-right);
  border-radius: 11.048px;
  background: var(--linear-top-right-fill);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.07rem;
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.case-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.card-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  z-index: 1;
  border-radius: 11.048px;
  overflow: hidden;
}

.card-cover .cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-4:hover .card-cover,
.card-5:hover .card-cover {
  opacity: 1;
  visibility: visible;
}

.card-4 .card-content,
.card-5 .card-content {
  position: relative;
  z-index: 2;
  transition: opacity 0.4s ease;
}

.card-4:hover .card-content,
.card-5:hover .card-content {
  opacity: 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.79rem;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.39rem;
}

.card-title {
  font-size: 1.58rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-heading);
  margin: 0;
  transition: color 0.3s ease;
}

.card-role {
  font-size: 0.99rem;
  font-weight: 400;
  color: #C0C0C0;
  margin: 0;
}

.card-description {
  font-size: 0.89rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
  transition: color 0.3s ease;
}

.card-skills {
  display: flex;
  align-items: center;
  gap: 0.79rem;
  flex-wrap: wrap;
}

.skill-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 11px;
  background: var(--color-background-soft);
  font-size: 0.89rem;
  font-weight: 500;
  color: var(--color-heading);
  transition: background 0.3s ease, color 0.3s ease;
}

.case-card:hover .skill-tag {
  background: rgba(0, 181, 226, 0.15);
  color: var(--color-accent);
}

.card-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 11px;
}

.card-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 11px;
}

.card-1 .card-image img {
  max-height: 400px;
}

.card-2 .card-image img {
  max-height: 387px;
}

.card-3 .card-image img {
  max-height: 354px;
}

.more-projects-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  background: var(--color-background-soft);
  border: 1.5px solid var(--color-border);
  font-size: 1.42rem;
  font-weight: 700;
  color: var(--color-text);
  opacity: 0.85;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, color 0.3s ease, opacity 0.3s ease;
}

.more-projects-btn:hover {
  background: rgba(0, 181, 226, 0.15);
  border-color: var(--color-accent);
  transform: scale(1.05);
  opacity: 1;
  color: var(--color-accent);
}

@media (max-width: 1200px) {
  .bento-grid.grid-5 {
    grid-template-areas:
      "card1 card1 card1 card1 card1 card1 card2 card2 card2 card2 card2 card2"
      "card3 card3 card3 card3 card3 card3 card3 card3 card3 card3 card3 card3"
      "card4 card4 card4 card4 card4 card4 card5 card5 card5 card5 card5 card5";
  }

  .bento-grid.grid-3 {
    grid-template-areas:
      "card1 card1 card1 card1 card1 card1 card1 card1 card1 card1 card1 card1"
      "card3 card3 card3 card3 card3 card3 card3 card3 card3 card3 card3 card3"
      "card4 card4 card4 card4 card4 card4 card4 card4 card4 card4 card4 card4";
  }

  .bento-grid.grid-3 .case-card:nth-child(1) { grid-area: card1; }
  .bento-grid.grid-3 .case-card:nth-child(2) { grid-area: card3; }
  .bento-grid.grid-3 .case-card:nth-child(3) { grid-area: card4; }

  .bento-grid.grid-2 {
    grid-template-areas:
      "card2 card2 card2 card2 card2 card2 card2 card2 card2 card2 card2 card2"
      "card5 card5 card5 card5 card5 card5 card5 card5 card5 card5 card5 card5";
  }

  .bento-grid.grid-2 .case-card:nth-child(1) { grid-area: card2; }
  .bento-grid.grid-2 .case-card:nth-child(2) { grid-area: card5; }

  .section-title {
    font-size: 2.75rem;
  }
}

@media (max-width: 768px) {
  .case-studies-section {
    padding: 3rem 1.5rem;
    gap: 3rem;
    text-align: left;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .filter-tabs {
    gap: 1.25rem;
  }

  .filter-tab {
    font-size: 1rem;
  }

  .bento-grid,
  .bento-grid.grid-1,
  .bento-grid.grid-2,
  .bento-grid.grid-3,
  .bento-grid.grid-4,
  .bento-grid.grid-5 {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    grid-template-areas: none;
  }

  .bento-grid .case-card {
    grid-area: auto;
  }

  .case-card {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .card-title {
    font-size: 1.35rem;
  }

  .card-description {
    font-size: 0.85rem;
  }

  .skill-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .more-projects-btn {
    font-size: 1.2rem;
  }
}

@media (max-width: 425px) {
  .case-studies-section {
    padding: 2rem 1rem;
    gap: 2rem;
    text-align: left;
  }

  .section-title {
    font-size: 1.85rem;
  }

  .filter-tab {
    font-size: 0.9rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-role {
    font-size: 0.85rem;
  }

  .more-projects-btn {
    font-size: 1.1rem;
    padding: 0.65rem 1.25rem;
  }
}
</style>
