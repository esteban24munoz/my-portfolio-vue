<script setup lang="ts">
import { ref } from 'vue'

const navigateToFoodprints = () => {
  window.location.hash = '#/foodprints'
  window.scrollTo(0, 0)
}
import CarmenCover from '../assets/carmen_cover.png'
import ViewbookCover from '../assets/viewbook_cover.webp'
import TheTableCover from '../assets/the_table_cover.png'

type FilterTab = 'All' | 'Development' | 'Graphic Design'

const activeFilter = ref<FilterTab>('All')

const setFilter = (filter: FilterTab) => {
  activeFilter.value = filter
}

interface CaseStudy {
  id: number
  title: string
  role: string
  description: string
  skills: string[]
  image?: { [key: string]: string }
  category: 'Development' | 'Graphic Design'
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'FoodPrints | World Food Programme (WFP) of the United Nations',
    role: 'UX/UI Designer & Web Developer',
    description: 'Collaborated with product managers, developers and designers to create 3 fully responsive and interactive websites that showcase important data in a storytelling way.',
    skills: ['React', 'TypeScript', 'Figma', 'AWS', 'GitHub', 'SEO'],
    image: {CarmenCover},
    category: 'Development'
  },
  {
    id: 2,
    title: 'International Viewbook | Harding University',
    role: 'Graphic Designer',
    description: 'Led the visual development of a comprehensive viewbook in just one month, presenting initial sketches and rough concepts to stakeholders, iterating on feedback to refine the design',
    skills: ['Indesign', 'Photoshop', 'Ilustrator'],
    image: {ViewbookCover},
    category: 'Graphic Design'
  },
  {
    id: 3,
    title: 'The Table',
    role: 'UX/UI Designer & Web Developer',
    description: 'Designed and developed a robust React web application that displays products in stock and out of stock to Harding Students, leveraging MySQL databases for real-time inventory control and the registration of 1167 shoppers since it began operations.',
    skills: ['React', 'TypeScript', 'Figma'],
    image: {TheTableCover},
    category: 'Development'
  },
  {
    id: 4,
    title: 'Olive the Above | Fusion Cuisine Branding Team Project',
    role: 'Graphic Designer',
    description: 'Branding project focused on creating a fresh, cohesive brand identity for a new fusion food concept starting as a food truck and expanding into catering and a future restaurant',
    skills: ['Indesign', 'Photoshop', 'Ilustrator', 'Figma'],
    category: 'Graphic Design'
  },
  {
    id: 5,
    title: 'Packaging Design',
    role: 'Graphic Design',
    description: '3D packaging design and advertisement for a new line of U.S.-grown spice blends, inspired by a specific historical design that would follow the client brief',
    skills: ['Indesign', 'Photoshop', 'Ilustrator'],
    category: 'Graphic Design'
  }
]
</script>

<template>
  <section class="case-studies-section">
    <div class="section-header">
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

    <div class="bento-grid">
      <article class="case-card card-1" @click="navigateToFoodprints">
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">FoodPrints | World Food Programme (WFP) of the United Nations</h3>
            <p class="card-role">UX/UI Designer & Web Developer</p>
          </div>
          <p class="card-description">
            Collaborated with product managers, developers and designers to create 3 fully responsive and interactive websites that showcase important data in a storytelling way.
          </p>
          <div class="card-skills">
            <span class="skill-tag">React</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">GitHub</span>
            <span class="skill-tag">SEO</span>
          </div>
        </div>
        <div class="card-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/227a03404fc10b2260819f75cc6e18dad03f64bf?width=1126" alt="FoodPrints WFP project" />
        </div>
      </article>

      <article class="case-card card-2">
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">International Viewbook | Harding University</h3>
            <p class="card-role">Graphic Designer</p>
          </div>
          <p class="card-description">
            Led the visual development of a comprehensive viewbook in just one month, presenting initial sketches and rough concepts to stakeholders, iterating on feedback to refine the design
          </p>
          <div class="card-skills">
            <span class="skill-tag">Indesign</span>
            <span class="skill-tag">Photoshop</span>
            <span class="skill-tag">Ilustrator</span>
          </div>
        </div>
        <div class="card-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/159cf09b19d7eb93036f8cfcfd32e86180685134?width=598" alt="Harding University Viewbook" />
        </div>
      </article>

      <article class="case-card card-3">
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">The Table</h3>
            <p class="card-role">UX/UI Designer & Web Developer</p>
          </div>
          <p class="card-description">
            Designed and developed a robust React web application that displays products in stock and out of stock to Harding Students, leveraging MySQL databases for real-time inventory control and the registration of 1167 shoppers since it began operations.
          </p>
          <div class="card-skills">
            <span class="skill-tag">React</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Figma</span>
          </div>
        </div>
        <div class="card-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/4dad6658fe5b7d84ca5bfe0081d2201b7826b40f?width=1128" alt="The Table application" />
        </div>
      </article>

      <article class="case-card card-4">
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">Olive the Above | Fusion Cuisine Branding Team Project</h3>
            <p class="card-role">Graphic Designer</p>
          </div>
          <p class="card-description">
            Branding project focused on creating a fresh, cohesive brand identity for a new fusion food concept starting as a food truck and expanding into catering and a future restaurant
          </p>
          <div class="card-skills">
            <span class="skill-tag">Indesign</span>
            <span class="skill-tag">Photoshop</span>
            <span class="skill-tag">Ilustrator</span>
            <span class="skill-tag">Figma</span>
          </div>
        </div>
        <!-- <div class="card-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/placeholder-4" alt="Olive the Above branding" />
        </div> -->
      </article>

      <article class="case-card card-5">
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">Packaging Design</h3>
            <p class="card-role">Graphic Design</p>
          </div>
          <p class="card-description">
            3D packaging design and advertisement for a new line of U.S.-grown spice blends, inspired by a specific historical design that would follow the client brief
          </p>
          <div class="card-skills">
            <span class="skill-tag">Indesign</span>
            <span class="skill-tag">Photoshop</span>
            <span class="skill-tag">Ilustrator</span>
          </div>
        </div>
        <!-- <div class="card-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/placeholder-5" alt="Packaging design" />
        </div> -->
      </article>
    </div>

    <button class="more-projects-btn">More Projects</button>
  </section>
</template>

<style scoped>
.case-studies-section {
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.44rem 1.5rem;
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
  background: linear-gradient(90deg, var(--color-text-light) 39.9%, var(--color-accent) 100%);
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
  grid-template-areas:
    "card1 card1 card1 card1 card1 card1 card1 card2 card2 card2 card2 card2"
    "card4 card4 card4 card4 card4 card3 card3 card3 card3 card3 card3 card3"
    "card5 card5 card5 card5 card5 card3 card3 card3 card3 card3 card3 card3";
}

.case-card {
  border: 1.578px solid var(--linear-top-right);
  border-radius: 11.048px;
  background: var(--linear-top-right-fill);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.07rem;
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
}

.case-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.card-1 {
  grid-area: card1;
}

.card-2 {
  grid-area: card2;
}

.card-3 {
  grid-area: card3;
}

.card-4 {
  grid-area: card4;
}

.card-5 {
  grid-area: card5;
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
  .bento-grid {
    grid-template-areas:
      "card1 card1 card1 card1 card1 card1 card2 card2 card2 card2 card2 card2"
      "card3 card3 card3 card3 card3 card3 card3 card3 card3 card3 card3 card3"
      "card4 card4 card4 card4 card4 card4 card5 card5 card5 card5 card5 card5";
  }

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

  .bento-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    grid-template-areas:
      "card1"
      "card2"
      "card3"
      "card4"
      "card5";
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
