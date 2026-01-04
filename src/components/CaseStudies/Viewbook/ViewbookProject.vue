<script setup lang="ts">
import { ref } from "vue";
import { useScrollAnimation } from "../../../composables/useScrollAnimation";
import CustomCursor from "../../CustomCursor/CustomCursor.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import "img-comparison-slider";

import ViewbookInsight from "./assets/insight.png";
import ViewbookCover from "./assets/viewbook_cover.png";
import OliveCover from "./assets/olive_cover.png";

// WIREFRAMES
import ViewbookWireframe1 from "./assets/Viewbook-wireframe-1.png";
import ViewbookWireframe2 from "./assets/Viewbook-wireframe-2.png";
import ViewbookWireframe3 from "./assets/Viewbook-wireframe-3.png";
import ViewbookWireframe4 from "./assets/Viewbook-wireframe-4.png";
import ViewbookWireframe5 from "./assets/Viewbook-wireframe-5.png";
import ViewbookWireframe6 from "./assets/Viewbook-wireframe-6.png";

// ROUHGS 
import ViewbookRough1 from "./assets/rough-1.png";
import ViewbookRough2 from "./assets/rough-2.png";
import ViewbookRough3 from "./assets/rough-3.png";
import ViewbookRough4 from "./assets/rough-4.png";
import ViewbookRough5 from "./assets/rough-5.png";
import ViewbookRough6 from "./assets/rough-6.png";

//ITERATION DESIGN
import ViewbookIteration1 from "./assets/iteration_1.png";
import ViewbookIteration2 from "./assets/iteration_2.png";
import ViewbookIteration3 from "./assets/iteration_3.png";
import ViewbookIteration4 from "./assets/iteration_4.png";
import ViewbookIteration5 from "./assets/iteration_5.png";
import ViewbookIteration6 from "./assets/iteration_6.png";


// // Lightbox state for wireframes
// const ViewBookCoverVisibleRef = ref(false);
// const ViewBookCoverIndexRef = ref(0);

// // Lightbox state for wireframes
// const ViewBookInsightVisibleRef = ref(false);
// const ViebookInsightIndexRef = ref(0);

// Lightbox state for wireframes
const wireframeVisibleRef = ref(false);
const wireframeIndexRef = ref(0);

// Lightbox state for roughs
const roughVisibleRef = ref(false);
const roughIndexRef = ref(0);

// Lightbox state for iterations
const iterationVisibleRef = ref(false);
const iterationIndexRef = ref(0);

// Lightbox state for project images
const ProjectVisibleRef = ref(false);
const ProjectIndexRef = ref(0);

// All wireframe images - using high-resolution imported images for lightbox
const wireframeImages = [
  ViewbookWireframe1,
  ViewbookWireframe2,
  ViewbookWireframe3,
  ViewbookWireframe4,
  ViewbookWireframe5,
  ViewbookWireframe6,
];

// All rough images - using high-resolution imported images for lightbox
const roughImages = [
  ViewbookRough1,
  ViewbookRough2,
  ViewbookRough3,
  ViewbookRough4,
  ViewbookRough5,
  ViewbookRough6,
];

// All iteration images - using high-resolution imported images for lightbox
const iterationImages = [
  ViewbookIteration1,
  ViewbookIteration2,
  ViewbookIteration3,
  ViewbookIteration4,
  ViewbookIteration5,
  ViewbookIteration6,
];

// All project images - using high-resolution imported images for lightbox
const projectImages = [
  ViewbookCover,
  ViewbookInsight,
];


// Open lightbox for wireframes
const openWireframeLightbox = (index: number) => {
  wireframeIndexRef.value = index;
  wireframeVisibleRef.value = true;
};

// Open lightbox for roughs
const openRoughLightbox = (index: number) => {
  roughIndexRef.value = index;
  roughVisibleRef.value = true;
};

// Close lightbox functions
const onHideWireframe = () => {
  wireframeVisibleRef.value = false;
};

const onHideRough = () => {
  roughVisibleRef.value = false;
};

// Open lightbox for iterations
const openIterationLightbox = (index: number) => {
  iterationVisibleRef.value = true;
  iterationIndexRef.value = index;
};

const onHideIteration = () => {
  iterationVisibleRef.value = false;
};

// Open lightbox for project images
const openProjectLightbox = (index: number) => {
  ProjectIndexRef.value = index;
  ProjectVisibleRef.value = true;
};

// Close project lightbox
const onProjectHide = () => {
  ProjectVisibleRef.value = false;
};



// Navigate to The Table project
const navigateToNextProject = () => {
  window.location.hash = '#/olivetheabove';
  window.scrollTo(0, 0);
};


// Flipping book HTML content
const flippingBookHtml = ref(
  '<iframe src="https://player.flipsnack.com?hash=RUI4QzZBRjdDNkYraG0ydHNhMDk1ZQ==" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>'
);

// Scroll animation refs
const titleContentRef = ref<HTMLElement | null>(null);
const roleSectionRef = ref<HTMLElement | null>(null);
const challengesSectionRef = ref<HTMLElement | null>(null);
const processSectionRef = ref<HTMLElement | null>(null);
const resultsSectionRef = ref<HTMLElement | null>(null);
const nextProjectSectionRef = ref<HTMLElement | null>(null);

// Initialize scroll animations for each section
useScrollAnimation(titleContentRef, { threshold: 0.15 });
useScrollAnimation(roleSectionRef, { threshold: 0.15 });
useScrollAnimation(challengesSectionRef, { threshold: 0.15 });
useScrollAnimation(processSectionRef, { threshold: 0.1 });
useScrollAnimation(resultsSectionRef, { threshold: 0.1 });
useScrollAnimation(nextProjectSectionRef, { threshold: 0.2 });
</script>

<template>
  <div class="case-study">
    <div class="case-study-container">
      <!-- Title and Overview Section -->
      <section ref="titleContentRef" class="title-content fade-in-element">
        <div class="main-title-wrapper">
          <h1 class="main-title">
            Designing<br />
            Across<br />
            Borders.
          </h1>

          <div class="overview-section">
            <h2 class="section-label">01. OVERVIEW</h2>
            <p class="overview-description">
              I was hired by the Swaid Institute for International Education at
              Harding University to design a comprehensive viewbook aimed at
              motivating and educating potential international students about
              studying at Harding University.
              <br /><br />
              The project took one month, during which I collaborated with a
              graphic designer and copywriters to create professional imagery
              and compelling student stories that brought the viewbook to life.
              The project was a success, with over 500 copies printed and more
              planned for future outreach.
            </p>
          </div>
        </div>

        <!-- Project Images -->
        <div class="project-images">
          <div class="image-wrapper">
            <img
              :src="ViewbookCover"
              alt="Viewbook Cover"
              class="project-image lightbox-trigger"
              @click="openProjectLightbox(0)"
            />
          </div>
        </div>
      </section>

      <!-- Role Section -->
      <section ref="roleSectionRef" class="role-section fade-in-element">
        <div class="role-content">
          <h2 class="section-label">02. ROLE</h2>
          <h3 class="role-title">
            Lead Graphic <br />
            Designer
          </h3>
          <p class="role-description">
            As the lead graphic designer, I was responsible for the layout and
            composition of images, data, infographics, and other visual
            elements. I presented rough drafts and mockups during client
            meetings, where we discussed feedback and worked on improvements.
            <br /><br />

            I also collaborated with a graphic designer alumna who helped
            enhance the layout, composition, and graphic elements, particularly
            on the back page of the viewbook.
          </p>
        </div>
        <div class="mockup-wrapper">
          <img
            :src="ViewbookInsight"
            alt="MacBook Air mockup showing project"
            class="laptop-mockup lightbox-trigger"
            @click="openProjectLightbox(1)"
          />
        </div>
      </section>

      <!-- Key Challenges Section -->
      <section ref="challengesSectionRef" class="challenges-section fade-in-element">
        <div class="challenges-header">
          <div class="divider-line"></div>
          <div class="challenges-title-wrapper">
            <h2 class="section-label">03. KEY CHALLENGES</h2>
            <h3 class="challenges-title">Working Within Constraints</h3>
          </div>
        </div>

        <div class="challenges-content">
          <div class="challenge-block">
            <h4 class="block-title">Challenge</h4>
            <p class="block-description">
              The client set clear constraints for the project, including a
              six-page limit to keep the viewbook lightweight while still
              including a large amount of information about the university, the
              international student experience, and programs.
              <br /><br />
              It was essential to follow the university’s brand guidelines,
              which made it challenging to create strong visual contrast and
              variety using a limited color palette of black, gold, and white
            </p>
          </div>
          <div class="solution-block">
            <h4 class="block-title">Solution</h4>
            <p class="block-description">
              I explored the layouts used by the Swaid Program and the
              university across their website and presentations, which inspired
              me to create a diagonal square pattern that would feel
              recognizable and consistent with the university’s visual identity.
              <br /><br />
              Meetings with the client helped simplify the content and make the
              information clearer and more impactful, with a stronger focus on
              imagery and diversity.
            </p>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section ref="processSectionRef" class="process-section fade-in-element">
        <div class="process-header">
          <div class="divider-line"></div>
          <div class="process-title-wrapper">
            <h2 class="section-label">04. PROCESS</h2>
            <h3 class="process-title">Iterative Design</h3>
          </div>
        </div>

        <!-- 1st Drafts Section -->
        <div class="roughs-section">
          <!-- <div class="roughs-header">
            <h4 class="roughs-title">1st Roughs</h4>
            <p class="roughs-description">
              I began the creative process by building the first wireframes,
              focusing on storytelling and the real stories collected from
              countries like Honduras, Colombia, and El Salvador. Some concepts
              explored more ambitious ideas and were refined to thoughtfully
              align with the organization's brand guidelines
            </p>
          </div> -->

          <div class="gallery-container">
            <div class="wireframe-gallery">
              <img
                v-for="(image, index) in wireframeImages"
                :key="index"
                :src="image"
                :alt="`Viewbook wireframe ${index + 1}`"
                class="wireframe-thumbnail"
                @click="openWireframeLightbox(index)"
              />
            </div>
          </div>

          <div class="divider-line"></div>
        </div>


        <!-- 1st Roughs Section -->
        <div class="roughs-section">
          <div class="roughs-header">
            <h4 class="roughs-title">1st Roughs</h4>
            <p class="roughs-description">
              After creating basic layout drafts, I created rough drafts of the viewbook.
              These rough drafts were used to get feedback from the client and to refine the design.
              Some concepts explored more ambitious ideas and were refined to thoughtfully
              align with the organization's brand guidelines
            </p>
          </div>

          <div class="gallery-container">
            <div class="wireframe-gallery">
              <img
                v-for="(image, index) in roughImages"
                :key="index"
                :src="image"
                :alt="`Viewbook rough ${index + 1}`"
                class="wireframe-thumbnail"
                @click="openRoughLightbox(index)"
              />
            </div>
          </div>

          <div class="divider-line"></div>
        </div>

<!-- 1st Iterations Section -->
<div class="roughs-section">
          <div class="roughs-header">
            <h4 class="roughs-title">1st Design Iterations</h4>
            <p class="roughs-description">
              After receiving feedback from the client, I refined the design to create a more cohesive and visually appealing viewbook.
              We made the decision of removing the Masters, Degrees and Programs pages to keep the viewbook lightweight and focused on the main message.
            </p>
          </div>

          <div class="gallery-container">
            <div class="wireframe-gallery">
              <img
                v-for="(image, index) in iterationImages"
                :key="index"
                :src="image"
                :alt="`Viewbook iteration ${index + 1}`"
                class="wireframe-thumbnail"
                @click="openIterationLightbox(index)"
              />
            </div>
          </div>

          <div class="divider-line"></div>
        </div>


      </section>

      <!-- Final Results Section -->
      <section ref="resultsSectionRef" class="results-section fade-in-element">
        <div class="results-title-wrapper">
          <h2 class="section-label">05. FINAL RESULTS</h2>
          <h3 class="results-title">Creating a Visual Story</h3>
        </div>

        <div class="result-showcase">
          <div class="result-showcase">
            <div
              v-html="flippingBookHtml"
              class="flipping-book-container"
            ></div>
          </div>
        </div>
      </section>

      <!-- Next Project Section -->
      <section ref="nextProjectSectionRef" class="next-project-section fade-in-element">
        <div class="divider-line"></div>
        <div class="next-project-content">
          <div class="next-project-header">
            <h3 class="next-project-title">Next Project</h3>
            <svg
              class="arrow-icon"
              width="30"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.38626e-06 13.1275C1.42974e-06 12.6302 0.197544 12.1533 0.549175 11.8017C0.900806 11.4501 1.37772 11.2525 1.875 11.2525L23.5987 11.2525L15.5475 3.20501C15.3732 3.03068 15.2349 2.82372 15.1405 2.59595C15.0462 2.36818 14.9976 2.12405 14.9976 1.87751C14.9976 1.63097 15.0462 1.38685 15.1405 1.15907C15.2349 0.931301 15.3732 0.724342 15.5475 0.550012C15.7218 0.375682 15.9288 0.237396 16.1566 0.143049C16.3843 0.0487028 16.6285 0.000144862 16.875 0.000144884C17.1215 0.000144905 17.3657 0.0487028 17.5934 0.143049C17.8212 0.237396 18.0282 0.375682 18.2025 0.550012L29.4525 11.8C29.6271 11.9742 29.7656 12.1811 29.8602 12.4089C29.9547 12.6367 30.0034 12.8809 30.0034 13.1275C30.0034 13.3741 29.9547 13.6183 29.8602 13.8461C29.7656 14.0739 29.6271 14.2808 29.4525 14.455L18.2025 25.705C17.8504 26.0571 17.3729 26.2549 16.875 26.2549C16.3771 26.2549 15.8996 26.0571 15.5475 25.705C15.1954 25.3529 14.9976 24.8754 14.9976 24.3775C14.9976 23.8796 15.1954 23.4021 15.5475 23.05L23.5987 15.0025L1.875 15.0025C1.37772 15.0025 0.900805 14.805 0.549175 14.4533C0.197544 14.1017 1.34279e-06 13.6248 1.38626e-06 13.1275Z"
                fill="#00B5E2"
              />
            </svg>
          </div>
          <article class="next-project-card" @click="navigateToNextProject">
            <div class="card-content">
              <h4 class="card-title">Olive the Above | Fusion Cuisine Branding Team Project</h4>
              <p class="card-role">Graphic Designer</p>
            </div>
            <div class="card-image">
              <img :src="OliveCover" alt="The Table Project Desktop Preview" />
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Custom Cursor Component -->
    <CustomCursor />

    <!-- Lightbox for wireframe images -->
    <vue-easy-lightbox
      :visible="wireframeVisibleRef"
      :imgs="wireframeImages"
      :index="wireframeIndexRef"
      @hide="onHideWireframe"
    />
    <!-- Lightbox for rough images -->
    <vue-easy-lightbox
      :visible="roughVisibleRef"
      :imgs="roughImages"
      :index="roughIndexRef"
      @hide="onHideRough"
    />
    <!-- Lightbox for iteration images -->
    <vue-easy-lightbox
      :visible="iterationVisibleRef"
      :imgs="iterationImages"
      :index="iterationIndexRef"
      @hide="onHideIteration"
    />
    <!-- Lightbox for project images -->
    <vue-easy-lightbox
      :visible="ProjectVisibleRef"
      :imgs="projectImages"
      :index="ProjectIndexRef"
      @hide="onProjectHide"
    />
  </div>
</template>

<style>
/* Global cursor styles (unscoped) */
[data-cursor-text][data-cursor-color] {
  cursor: none;
}

[data-cursor-text][data-cursor-color] * {
  cursor: auto;
}

/* Touch devices fallback */
@media (hover: none) and (pointer: coarse) {
  [data-cursor-text][data-cursor-color] {
    cursor: auto;
  }
}
</style>

<style scoped>
/* Scroll-triggered fade-in animations */
.fade-in-element {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

.case-study {
  width: 100%;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.case-study-container {
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 119px;
}

/* VIDEO IN LAPTOP FRAME */
.laptop-container {
  position: relative;
  width: 100%;
  max-width: 579px;
  aspect-ratio: 579 / 345;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-video {
  position: absolute;
  width: 75.3%;
  height: 83.8%;
  top: 11.3%;
  left: 12.6%;
  object-fit: cover;
  border-radius: 6px;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.project-video:hover {
  opacity: 0.9;
}

.project-video:focus {
  outline: 3px solid var(--color-accent);
  outline-offset: 4px;
  opacity: 0.95;
}

.laptop-frame {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  display: block;
}

/* ===== Title and Overview Section ===== */
.title-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
}

.main-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.main-title {
  font-family: Inter, sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.overview-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 720px;
}

.section-label {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: var(--color-text);
  opacity: 0.5;
  margin: 0;
}

.overview-description {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
}

/* ===== Project Images ===== */
.project-images {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  flex-wrap: wrap;
}

.image-wrapper {
  flex: 1;
  min-width: 280px;
  max-width: 340px;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

/* LightBox Trigger */
.lightbox-trigger {
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.lightbox-trigger:hover {
  transform: scale(1.02);
}

/* ===== Role Section ===== */
.role-section {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.role-content {
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.role-title {
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.role-description {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
}

.mockup-wrapper {
  flex: 1;
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop-mockup {
  width: 100%;
  max-width: 580px;
  height: auto;
  display: block;
}

/* ===== Challenges Section ===== */
.challenges-section {
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
}

.challenges-header {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.divider-line {
  width: 100%;
  height: 1px;
  background-color: var(--color-accent);
  opacity: 0.5;
}

.challenges-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

.challenges-title {
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin: 0;
}

.challenges-content {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
}

.challenge-block,
.solution-block {
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.block-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
}

.block-description {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
}

/* ===== Process Section ===== */
.process-section {
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
}

.process-header {
  display: flex;
  flex-direction: column;
  gap: 69px;
}

.process-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

.process-title {
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin: 0;
}

/* ===== 1st Roughs Section ===== */
.roughs-section {
  display: flex;
  flex-direction: column;
  gap: 62px;
  width: 100%;
}

.roughs-header {
  display: flex;
  align-items: flex-start;
  gap: 235px;
  width: 100%;
  flex-wrap: wrap;
}

.roughs-title {
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-heading);
  margin: 0;
  min-width: 212px;
  flex-shrink: 0;
}

.roughs-description {
  flex: 1;
  max-width: 616px;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
}

.gallery-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 16px;
}

.wireframe-gallery {
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-template-rows: auto auto;
  gap: 5px;
  width: fit-content;
}

.wireframe-thumbnail {
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  cursor: zoom-in;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Row 1: small, large, large */
.wireframe-thumbnail:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1;
  width: 214.58px;
  aspect-ratio: 214.58 / 277.692;
}

.wireframe-thumbnail:nth-child(2) {
  grid-column: 2 / 4;
  grid-row: 1;
  width: 429.161px;
  aspect-ratio: 429.161 / 277.692;
}

.wireframe-thumbnail:nth-child(3) {
  grid-column: 4 / 6;
  grid-row: 1;
  width: 429.161px;
  aspect-ratio: 429.161 / 277.692;
}

/* Row 2: large, large, small */
.wireframe-thumbnail:nth-child(4) {
  grid-column: 1 / 3;
  grid-row: 2;
  width: 429.161px;
  aspect-ratio: 429.161 / 277.692;
}

.wireframe-thumbnail:nth-child(5) {
  grid-column: 3 / 5;
  grid-row: 2;
  width: 429.161px;
  aspect-ratio: 429.161 / 277.692;
}

.wireframe-thumbnail:nth-child(6) {
  grid-column: 5 / 6;
  grid-row: 2;
  width: 214.58px;
  aspect-ratio: 214.58 / 277.692;
}

.wireframe-thumbnail:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 181, 226, 0.2);
}

/* Custom scrollbar for gallery container */
.gallery-container::-webkit-scrollbar {
  height: 8px;
}

.gallery-container::-webkit-scrollbar-track {
  background: var(--color-background-soft);
  border-radius: 4px;
}

.gallery-container::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: 4px;
  opacity: 0.5;
}

.gallery-container::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-light);
}

.wireframes-section {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.wireframes-section.low-fidelity {
  flex-direction: row;
  gap: 133px;
}

.wireframes-section.high-fidelity {
  flex-direction: column;
  gap: 23px;
}

.wireframes-content {
  flex: 1;
  min-width: 320px;
  max-width: 443px;
  display: flex;
  flex-direction: column;
  gap: 59px;
}

.wireframes-images {
  display: flex;
  align-items: flex-end;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;
}

.wireframes-section.low-fidelity .wireframes-images {
  gap: 65px;
}

.wireframe-image {
  height: auto;
  max-height: 374px;
  display: block;
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.wireframe-image:hover {
  transform: scale(1.02);
}

.wireframes-header {
  display: flex;
  align-items: center;
  gap: 132px;
  width: 100%;
  flex-wrap: wrap;
}

.wireframes-header .divider-line {
  flex: 1;
  min-width: 200px;
}

.wireframes-layout {
  display: flex;
  align-items: center;
  gap: 108px;
  flex-wrap: wrap;
}

.wireframes-layout .block-description {
  max-width: 441px;
  flex: 1;
  min-width: 320px;
}

.wireframes-layout .wireframes-images {
  gap: 35px;
}

/* ===== UX Section ===== */

.image-comparison-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

img-comparison-slider {
  width: 100%;
  max-width: 1200px;
  height: auto;
  --divider-width: 3px;
  --divider-color: var(--primary-color);
  --handle-color: var(--primary-color);
  --handle-size: 44px;
}

.slider-image-wrapper {
  width: 100%;
  height: 100%;
  display: block;
}

.slider-image-wrapper img,
img-comparison-slider img {
  width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 11px;
  display: block;
}

/* Label row */
.comparison-labels {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
}

/* Individual labels */
.comparison-label {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text);
  opacity: 0.75;
}

.content-header {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.block-description {
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
  font-size: 16px;
}

.bias-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bias-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
}

.bias-description {
  padding-left: 32px;
  color: var(--color-text);
  opacity: 0.75;
}

/* ===== Final Results Section ===== */
.results-section {
  display: flex;
  flex-direction: column;
  gap: 139px;
  width: 100%;
  align-items: center;
}

.results-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  max-width: 647px;
}

.results-title {
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin: 0;
}

.result-showcase {
  display: flex;
  align-items: center;
  gap: 54px;
  width: 100%;
  flex-wrap: wrap;
}

.result-showcase.reverse {
  flex-direction: row-reverse;
}

.flipping-book-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.showcase-mockup {
  flex: 1;
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-link {
  font-family: Inter, sans-serif;
  font-size: 22px;
  color: var(--color-heading);
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  transition: color 0.3s ease;
  max-width: 423px;
}

.project-link:hover {
  color: var(--color-accent);
}

.link-title {
  font-weight: 700;
}

.external-icon {
  display: inline;
}

/* ===== Next Project Section ===== */
.next-project-section {
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
}

.next-project-content {
  display: flex;
  align-items: center;
  gap: 106px;
  flex-wrap: wrap;
}

.next-project-header {
  display: flex;
  align-items: center;
  gap: 22px;
  flex: 1;
  min-width: 320px;
}

.next-project-title {
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  background: var(--gradient-accent-side);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin: 0;
}

.arrow-icon {
  flex-shrink: 0;
}

.next-project-card {
  border: 1.577px solid var(--linear-top-right);
  border-radius: 11.041px;
  background: var(--linear-top-right-fill);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 33px;
  width: 628px;
  height: 537px;
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
}

.next-project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.next-project-card .card-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.next-project-card .card-title {
  font-family: Inter, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-heading);
  margin: 0;
}

.next-project-card .card-role {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #c0c0c0;
  margin: 0;
}

.next-project-card .card-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 14px;
}

.next-project-card .card-image img {
  width: 100%;
  height: auto;
  border-radius: 14px;
}

/* ===== Responsive Design ===== */
@media (max-width: 1440px) {
  .case-study-container {
    gap: 100px;
  }

  .main-title {
    font-size: 64px;
  }

  .role-title,
  .challenges-title,
  .process-title,
  .results-title,
  .next-project-title {
    font-size: 48px;
  }

  .wireframes-section.low-fidelity {
    gap: 80px;
  }

  .wireframes-layout {
    gap: 60px;
  }

  .roughs-header {
    gap: 150px;
  }

  .wireframe-gallery {
    gap: 4.5px;
  }

  .wireframe-thumbnail:nth-child(1) {
    width: 193.12px;
  }

  .wireframe-thumbnail:nth-child(2),
  .wireframe-thumbnail:nth-child(3) {
    width: 386.245px;
  }

  .wireframe-thumbnail:nth-child(4),
  .wireframe-thumbnail:nth-child(5) {
    width: 386.245px;
  }

  .wireframe-thumbnail:nth-child(6) {
    width: 193.12px;
  }
}

@media (max-width: 768px) {
  .case-study {
    padding: 60px 16px;
  }

  .case-study-container {
    gap: 80px;
  }

  .main-title {
    font-size: 48px;
  }

  .role-title,
  .challenges-title,
  .process-title,
  .results-title,
  .next-project-title {
    font-size: 36px;
  }

  .section-label {
    font-size: 16px;
  }

  .overview-description,
  .role-description,
  .block-description {
    font-size: 16px;
  }

  .block-title {
    font-size: 20px;
  }

  .project-images {
    gap: 24px;
  }

  .role-section {
    flex-direction: column;
  }

  .challenges-content {
    gap: 48px;
  }

  .wireframes-section.low-fidelity {
    flex-direction: column;
    gap: 40px;
  }

  .wireframes-header {
    gap: 40px;
  }

  .wireframes-layout {
    flex-direction: column;
    gap: 40px;
  }

  .result-showcase {
    flex-direction: column;
    gap: 32px;
  }

  .result-showcase.reverse {
    flex-direction: column;
  }

  .next-project-content {
    flex-direction: column;
    gap: 40px;
  }

  .project-link {
    font-size: 20px;
  }

  .next-project-card .card-title {
    font-size: 22px;
  }

  /* Roughs section responsive */
  .roughs-header {
    gap: 40px;
    flex-direction: column;
  }

  .roughs-title {
    font-size: 20px;
  }

  .roughs-description {
    font-size: 16px;
    max-width: 100%;
  }

  .wireframe-gallery {
    gap: 4px;
  }

  .wireframe-thumbnail:nth-child(1) {
    width: 150px;
  }

  .wireframe-thumbnail:nth-child(2),
  .wireframe-thumbnail:nth-child(3) {
    width: 300px;
  }

  .wireframe-thumbnail:nth-child(4),
  .wireframe-thumbnail:nth-child(5) {
    width: 300px;
  }

  .wireframe-thumbnail:nth-child(6) {
    width: 150px;
  }
}

@media (max-width: 425px) {
  .case-study {
    padding: 40px 12px;
  }

  .case-study-container {
    gap: 60px;
  }

  .main-title {
    font-size: 36px;
    text-align: left;
  }

  .role-title,
  .challenges-title,
  .process-title,
  .results-title,
  .next-project-title {
    font-size: 28px;
    text-align: left;
  }

  .section-label {
    font-size: 14px;
    text-align: left;
  }

  .overview-description,
  .role-description,
  .block-description {
    font-size: 15px;
    text-align: left;
  }

  .overview-section {
    align-items: flex-start;
  }

  .challenges-title-wrapper,
  .process-title-wrapper,
  .results-title-wrapper {
    align-items: flex-start;
  }

  .challenges-content {
    gap: 40px;
  }

  .image-wrapper {
    min-width: 100%;
  }

  .wireframes-images {
    gap: 20px;
  }

  .wireframes-section.low-fidelity .wireframes-images {
    gap: 30px;
  }

  .wireframes-content {
    gap: 30px;
  }

  .project-link {
    font-size: 18px;
  }

  .next-project-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .next-project-card {
    max-width: 100%;
  }

  .next-project-card .card-image img {
    max-width: 100%;
  }

  /* Roughs section mobile responsive */
  .roughs-section {
    gap: 40px;
  }

  .roughs-header {
    gap: 24px;
  }

  .roughs-title {
    font-size: 18px;
  }

  .roughs-description {
    font-size: 15px;
  }

  .wireframe-gallery {
    gap: 3px;
  }

  .wireframe-thumbnail:nth-child(1) {
    width: 107.29px;
  }

  .wireframe-thumbnail:nth-child(2),
  .wireframe-thumbnail:nth-child(3) {
    width: 214.58px;
  }

  .wireframe-thumbnail:nth-child(4),
  .wireframe-thumbnail:nth-child(5) {
    width: 214.58px;
  }

  .wireframe-thumbnail:nth-child(6) {
    width: 107.29px;
  }

  .gallery-container::-webkit-scrollbar {
    height: 6px;
  }
}
</style>
