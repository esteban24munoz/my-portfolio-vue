<script setup lang="ts">
import { ref } from "vue";
import { useScrollAnimation } from "../../../composables/useScrollAnimation";
import CustomCursor from "../../CustomCursor/CustomCursor.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import "img-comparison-slider";

import OliveCover from "./assets/olive_cover.png";
import BrandIdentity from "./assets/brand_identity.png";

// Drafts
import MenuDraft1 from "./assets/menu_draft_1.png";
import MenuDraft2 from "./assets/menu_draft_2.png";
import MenuDraft3 from "./assets/menu_draft_3.png";
import MenuDraft4 from "./assets/menu_draft_4.png";

//MOCKUP DESIGN
import Ads from "./assets/ads.png";
import Bags from "./assets/bags.png";
import Billboard from "./assets/billboard.png";
import LetterHead from "./assets/letterhead.png";
import Logo from "./assets/logo.png";
import Mail from "./assets/mail.png";
import MenuBack from "./assets/menu_back.png";
import MenuFront from "./assets/menu_front.png";
import Packaging from "./assets/packaging.png";
import Product from "./assets/product.png";
import Website from "./assets/website.png";
import FoodTruck from "./assets/food_truck.png";

// Lightbox state for wireframes
const wireframeVisibleRef = ref(false);
const wireframeIndexRef = ref(0);

// Lightbox state for roughs
const roughVisibleRef = ref(false);
const roughIndexRef = ref(0);

// Lightbox state for project images
const ProjectVisibleRef = ref(false);
const ProjectIndexRef = ref(0);

// All wireframe images - using high-resolution imported images for lightbox
const wireframeImages = [MenuDraft1, MenuDraft2, MenuDraft3, MenuDraft4];

// All rough images - using high-resolution imported images for lightbox
const roughImages = [
  Logo,
  Ads,
  FoodTruck,
  Billboard,
  Bags,
  Website,
  Mail,
  Packaging,
  Product,
  MenuFront,
  MenuBack,
  LetterHead,
];

// All project images - using high-resolution imported images for lightbox
const projectImages = [OliveCover, MenuFront, BrandIdentity];

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



// Open lightbox for project images
const openProjectLightbox = (index: number) => {
  ProjectIndexRef.value = index;
  ProjectVisibleRef.value = true;
};

// Close project lightbox
const onProjectHide = () => {
  ProjectVisibleRef.value = false;
};





// Scroll animation refs
const titleContentRef = ref<HTMLElement | null>(null);
const roleSectionRef = ref<HTMLElement | null>(null);
const challengesSectionRef = ref<HTMLElement | null>(null);
const processSectionRef = ref<HTMLElement | null>(null);
const resultsSectionRef = ref<HTMLElement | null>(null);

// Initialize scroll animations for each section
useScrollAnimation(titleContentRef, { threshold: 0.15 });
useScrollAnimation(roleSectionRef, { threshold: 0.15 });
useScrollAnimation(challengesSectionRef, { threshold: 0.15 });
useScrollAnimation(processSectionRef, { threshold: 0.1 });
useScrollAnimation(resultsSectionRef, { threshold: 0.1 });
</script>

<template>
  <div class="case-study">
    <div class="case-study-container">
      <!-- Title and Overview Section -->
      <section ref="titleContentRef" class="title-content fade-in-element">
        <div class="main-title-wrapper">
          <h1 class="main-title">
            A Collaborative
            <br />
            Fusion Cuisine
            <br />
            Food Truck Branding
          </h1>

          <div class="overview-section">
            <h2 class="section-label">01. OVERVIEW</h2>
            <p class="overview-description">
              This case study documents the full creative process and team
              collaboration behind the Fusion Cuisine Branding Project,
              <span class="text-accent">
                developed alongside two graphic designers.
              </span>
              Together, we researched fusion food culture, explored visual
              storytelling, and built a cohesive brand identity from the ground
              up.

              <br /><br />
              The work was developed through sketches, research boards, concept
              statements, and visual systems, and was finalized as printed
              branding materials that were professionally presented at the
              university
            </p>
          </div>
        </div>

        <!-- Project Images -->
        <div class="project-images">
          <div class="image-wrapper">
            <img
              :src="OliveCover"
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
          <h3 class="role-title">Graphic Designer</h3>
          <p class="role-description">
            I worked as a graphic designer, creating the menu design and six
            social media advertisements for the brand. I also collaborated with
            the team on the food truck design and final presentation. As a team,
            we developed the logo and established the brand guidelines to ensure
            consistency across all visual elements.
          </p>
        </div>
        <div class="mockup-wrapper">
          <img
            :src="MenuFront"
            alt="Menu Front Mockup"
            class="laptop-mockup lightbox-trigger"
            @click="openProjectLightbox(1)"
          />
        </div>
      </section>

      <!-- Key Challenges Section -->
      <section
        ref="challengesSectionRef"
        class="challenges-section fade-in-element"
      >
        <div class="challenges-header">
          <div class="divider-line"></div>
          <div class="challenges-title-wrapper">
            <h2 class="section-label">03. KEY CHALLENGES</h2>
            <h3 class="challenges-title">Italian + Mediterranean Fusion</h3>
          </div>
        </div>

        <div class="challenges-content">
          <div class="challenge-block">
            <h4 class="block-title">Challenge</h4>
            <p class="block-description">
              Create a unified brand identity for a new Italian–Mediterranean
              fusion food truck in Baltimore. The project required researching
              fusion cuisine, understanding the local food-truck market,
              analyzing competitors, and developing a strong visual
              identity—logo, typography, color system, and branded materials—to
              launch the concept.
            </p>
          </div>
          <div class="solution-block">
            <h4 class="block-title">Solution</h4>
            <p class="block-description">
              As a team, we researched Italian–Mediterranean fusion culture and
              Baltimore’s food-truck scene, developed the brand concept, and
              created a cohesive visual identity system.

              <br /><br />
              Together, we designed the logo, brand guidelines, research boards,
              concept statements, and a printed branding book. We finalized
              everything in a professional 3D display and presentation.
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
            <h3 class="process-title">My Impact on the Project</h3>
          </div>
        </div>
        <div class="wireframes-section low-fidelity">
          <div class="wireframes-content">
            <h4 class="block-title">Brand Identity</h4>
            <p class="block-description">
              Create a unified brand identity for a new Italian–Mediterranean
              fusion food truck in Baltimore. The project required researching
              fusion cuisine, understanding the local food-truck market,
              analyzing competitors, and developing a strong visual
              identity—logo, typography, color system, and branded materials—to
              launch the concept.
            </p>
          </div>
          <div class="wireframes-images">
            <img
              :src="BrandIdentity"
              alt="Brand Identity"
              class="wireframe-image"
              @click="openProjectLightbox(2)"
            />
          </div>
        </div>

        <div class="divider-line"></div>

        <!-- 1st Roughs Section -->
        <div class="roughs-section">
          <div class="roughs-header">
            <h4 class="roughs-title">1st Roughs</h4>
            <p class="roughs-description">
              After creating basic layout drafts, I created rough drafts of the
              viewbook. These rough drafts were used to get feedback from the
              client and to refine the design. Some concepts explored more
              ambitious ideas and were refined to thoughtfully align with the
              organization's brand guidelines
            </p>
          </div>

          <div class="gallery-container">
            <div class="wireframe-gallery">
              <img
                v-for="(image, index) in wireframeImages"
                :key="index"
                :src="image"
                :alt="`Viewbook rough ${index + 1}`"
                class="wireframe-thumbnail"
                @click="openWireframeLightbox(index)"
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

        <!-- MOCKUP SHOWCASE  -->
        <div class="roughs-section">
          <div class="roughs-header">
            <h4 class="roughs-title">1st Design Iterations</h4>
            <p class="roughs-description">
              After receiving feedback from the client, I refined the design to
              create a more cohesive and visually appealing viewbook. We made
              the decision of removing the Masters, Degrees and Programs pages
              to keep the viewbook lightweight and focused on the main message.
            </p>
          </div>

          <div class="gallery-container">
            <div class="wireframe-gallery">
              <img
                v-for="(image, index) in roughImages"
                :key="index"
                :src="image"
                :alt="`Viewbook iteration ${index + 1}`"
                class="wireframe-thumbnail"
                @click="openRoughLightbox(index)"
              />
            </div>
          </div>

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
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
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

.text-accent {
  color: var(--color-accent);
  font-weight: 800;
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
  max-width: 440px;
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
  padding-bottom: 16px;
}

/* Enable horizontal scroll only for wireframe gallery if needed */
.process-section .gallery-container {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

/* Roughs section should not scroll horizontally - fully responsive */
.roughs-section .gallery-container {
  overflow: visible;
}

/* Wireframe gallery - simple 2x2 grid */
.wireframe-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 8px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.wireframe-thumbnail {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  cursor: zoom-in;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wireframe-thumbnail:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 181, 226, 0.2);
}

/* Rough Images - Figma bento grid pattern (5-column system) */
.roughs-section .wireframe-gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  gap: 5px;
  width: 100%;
  max-width: 1083px;
  margin: 0 auto;
}

/* Bento grid pattern: Row 1 (small, large, large), Row 2 (large, large, small) - repeating */
.roughs-section .wireframe-thumbnail {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  cursor: zoom-in;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Row 1 pattern: small (1 col), large (2 cols), large (2 cols) */
.roughs-section .wireframe-thumbnail:nth-child(6n + 1) {
  grid-column: span 1;
  aspect-ratio: 214.58 / 277.692;
}

.roughs-section .wireframe-thumbnail:nth-child(6n + 2) {
  grid-column: span 2;
  aspect-ratio: 429.161 / 277.692;
}

.roughs-section .wireframe-thumbnail:nth-child(6n + 3) {
  grid-column: span 2;
  aspect-ratio: 429.161 / 277.692;
}

/* Row 2 pattern: large (2 cols), large (2 cols), small (1 col) */
.roughs-section .wireframe-thumbnail:nth-child(6n + 4) {
  grid-column: span 2;
  aspect-ratio: 429.161 / 277.692;
}

.roughs-section .wireframe-thumbnail:nth-child(6n + 5) {
  grid-column: span 2;
  aspect-ratio: 429.161 / 277.692;
}

.roughs-section .wireframe-thumbnail:nth-child(6n + 6) {
  grid-column: span 1;
  aspect-ratio: 214.58 / 277.692;
}

.roughs-section .wireframe-thumbnail:hover {
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
  width: 100%;
}

.wireframes-images {
  display: flex;
  align-items: flex-end;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 425px;
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
  width: 100%;
  max-width: 374px;
  border-radius: 12px;
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

.flipping-book-container {
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

  /* Keep wireframe gallery at 2x2 */
  .wireframe-gallery {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Adjust bento grid for medium screens - maintain 5-column system */
  .roughs-section .wireframe-gallery {
    gap: 4.5px;
    max-width: 975px;
    grid-template-columns: repeat(5, 1fr);
  }

 
  
  .roughs-section .wireframe-thumbnail:nth-child(6n + 2),
  .roughs-section .wireframe-thumbnail:nth-child(6n + 3),
  .roughs-section .wireframe-thumbnail:nth-child(6n + 4),
  .roughs-section .wireframe-thumbnail:nth-child(6n + 5) {
    grid-column: span 2;
    aspect-ratio: 386.245 / 250;
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

  /* Keep wireframe gallery at 2x2 */
  .wireframe-gallery {
    gap: 6px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Simplify bento grid to 2 columns on tablet */
  .roughs-section .wireframe-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }

  /* Reset all thumbnails to uniform 2-column grid */
  .roughs-section .wireframe-thumbnail {
    grid-column: span 1 !important;
    aspect-ratio: 1 !important;
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

  /* Keep wireframe gallery at 2x2 on mobile */
  .wireframe-gallery {
    gap: 4px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile bento grid - 2 columns */
  .roughs-section .wireframe-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
  }

  .roughs-section .wireframe-thumbnail {
    grid-column: span 1 !important;
    aspect-ratio: 1 !important;
  }

  .gallery-container::-webkit-scrollbar {
    height: 6px;
  }
}
</style>
