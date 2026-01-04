<script setup lang="ts">
import { ref } from "vue";
import { useScrollAnimation } from "../../../composables/useScrollAnimation";
import VueEasyLightbox from "vue-easy-lightbox";
import CustomCursor from "../../CustomCursor/CustomCursor.vue";
import SpringHillsVideo from "./assets/springhills_video.mp4";

import "img-comparison-slider";
import ComputerFrame from "./assets/computer_frame.png";

import UserFlow from "./assets/user_flow.png";
import SystemWireframe1 from "./assets/system_wireframe_1.png";
import SystemWireframe2 from "./assets/system_wireframe_2.png";
import SystemWireframe3 from "./assets/system_wireframe_3.png";
import HomeWireframe1 from "./assets/home_wireframe_1.png";
import HomeWireframe2 from "./assets/home_wireframe_2.png";

//Project Cover
import SpringhillsCover from "./assets/springhills_cover.png";
import SpringHillsInsight from "./assets/springhills_insight.png";
import SpringHillsSystemCover from "./assets/springhills_system_trans.png";
import SpringHillsSystemCover2 from "./assets/springhills_system_2_trans.png";

// Wireframe Lightbox state
const wireframeVisibleRef = ref(false);
const wireframeIndexRef = ref(0);

// Project Lightbox state
const ProjectVisibleRef = ref(false);
const ProjectIndexRef = ref(0);

// All wireframe images - using high-resolution imported images for lightbox
const wireframeImages = [
  UserFlow,
  HomeWireframe1,
  HomeWireframe2,
  SystemWireframe1,
  SystemWireframe2,
  SystemWireframe3,
];

const projectImages = [
  SpringhillsCover,
  SpringHillsSystemCover,
  SpringHillsInsight,
  SpringHillsSystemCover2,
];

// Open lightbox with specific image
const openLightbox = (index: number) => {
  wireframeIndexRef.value = index;
  wireframeVisibleRef.value = true;
};

// Close lightbox
const onHide = () => {
  wireframeVisibleRef.value = false;
};

//Open project lightbox
const openProjectLightbox = (index: number) => {
  ProjectIndexRef.value = index;
  ProjectVisibleRef.value = true;
};

//Close project lightbox
const onProjectHide = () => {
  ProjectVisibleRef.value = false;
};

// Restart video on click
const restartVideo = (event: Event) => {
  const video = event.target as HTMLVideoElement;
  video.currentTime = 0;
  video.play();
};

// Restart video on keyboard press (Enter or Space)
const handleVideoKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    restartVideo(event);
  }
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
            #1 Ranked<br />
            Cattle Website<br />
            On Google
          </h1>

          <div class="overview-section">
            <h2 class="section-label">01. OVERVIEW</h2>
            <p class="overview-description">
              This case study covers the design and development of the Spring
              Hills Ranch LLC website, a complete informational e-commerce
              experience for a small, family-run Red Angus cattle farm in Mt.
              Vernon, Missouri. The goal was to clearly communicate the ranch’s
              values, build trust with potential buyers, and expand their reach
              beyond local customers through a clean, user-friendly and fully
              mobile-responsive interface.
              <br /><br />

              The website has generated
              <span class="text-accent">3 confirmed bull sales</span>
              and currently ranks
              <span class="text-accent">#1 on Google </span> Red Angus cattle
              information and sales in Missouri. It also included implementing a
              custom CRM system to manage available bulls and track sold
              inventory, improving internal organization while supporting
              ongoing growth.
            </p>
          </div>
        </div>

        <!-- Project Images -->
        <div class="project-images">
          <div class="image-wrapper">
            <img
              :src="SpringhillsCover"
              alt="Carmen Desktop Project"
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
            UX / UI Designer<br />
            Full Stack Developer
          </h3>
          <p class="role-description">
            I led the design process of the website from early wireframes and
            interactive prototypes to final implementation. I collaborated
            closely with the client to align the product with their goals and
            expectations, conducted user testing to validate design decisions.
            <br /><br />
            I then developed the website using PHP, MySQL, CSS, with
            integrations for Mailchimp and Google Analytics to support marketing
            and performance tracking.
          </p>
        </div>
        <div class="mockup-wrapper">
          <img
            :src="SpringHillsInsight"
            alt="MacBook Air mockup showing project"
            class="laptop-mockup lightbox-trigger"
            @click="openProjectLightbox(3)"
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
            <h3 class="challenges-title">Development & Reusability</h3>
          </div>
        </div>

        <div class="challenges-content">
          <div class="challenge-block">
            <h4 class="block-title">Challenge</h4>
            <p class="block-description">
              After conducting UX research with the client, the main challenge
              was displaying detailed genetic information for each bull on the
              website. This data is critical for buyers, who rely on it to make
              informed purchasing decisions. The challenge was to present all
              this technical information clearly and accessibly without
              cluttering the page or confusing users.
            </p>
          </div>
          <div class="solution-block">
            <h4 class="block-title">Solution</h4>
            <p class="block-description">
              I structured the site so my client could enter each bull’s RAAA# directly in the CMS, which automatically creates a link to the bull’s official record on redangus.org. This allows buyers to access all relevant genetic and registration details without cluttering the page. This approach ensures full transparency, easy access to important data, and a clean, user-friendly interface, while also enabling users to contact the client directly to proceed with a purchase
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
            <h3 class="process-title">Understanding the User</h3>
          </div>
        </div>
        <div class="wireframes-section low-fidelity">
          <div class="wireframes-content">
            <h4 class="block-title">User Flow</h4>
            <p class="block-description">
              I began the creative process by mapping the user flow, focusing on making bull information easily accessible. Key concepts explored clear navigation and content hierarchy, ensuring each bull’s genetic and registration details were presented prominently while keeping the interface clean, intuitive, and aligned with the ranch’s brand.
            </p>
          </div>
          <div class="wireframes-images">
            <img
              :src="UserFlow"
              alt="Low-fidelity wireframe 1"
              class="user-flow-image"
              @click="openLightbox(0)"
            />
          </div>
        </div>

        <div class="wireframes-section high-fidelity">
          <div class="wireframes-header">
            <h4 class="block-title">
              Low-Fidelity <br />
              Homepage Wireframes
            </h4>
            <div class="divider-line short"></div>
          </div>
          <div class="wireframes-layout">
            <p class="block-description">
              Like any good design, I started with wireframes that prioritized clarity and hierarchy, making it easy for users to quickly find essential information about the farm and its bulls while maintaining a clean, approachable, and trustworthy interface
            </p>
            <div class="wireframes-images">
              <img
                :src="HomeWireframe1"
                alt="High-fidelity wireframe 1"
                class="wireframe-image"
                @click="openLightbox(1)"
              />
              <img
                :src="HomeWireframe2"
                alt="High-fidelity wireframe 2"
                class="wireframe-image"
                @click="openLightbox(2)"
              />
            </div>
          </div>
        </div>

        <div class="wireframes-section high-fidelity">
          <div class="wireframes-header">
            <h4 class="block-title">CMS System Wireframes</h4>
            <div class="divider-line short"></div>
          </div>
          <div class="wireframes-layout">
            <p class="block-description">
              I focused on user-friendliness for the client, who are older and less familiar with complex digital tools. I designed an intuitive backend that allows them to add new bulls, update details, and manage content effortlessly, while keeping the workflow simple and organized
            </p>
            <div class="wireframes-images">
              <img
                :src="SystemWireframe1"
                alt="High-fidelity wireframe 1"
                class="wireframe-image"
                @click="openLightbox(3)"
              />
              <img
                :src="SystemWireframe2"
                alt="High-fidelity wireframe 2"
                class="wireframe-image"
                @click="openLightbox(4)"
              />
              <img
                :src="SystemWireframe3"
                alt="High-fidelity wireframe 3"
                class="wireframe-image"
                @click="openLightbox(5)"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Final Results Section -->
      <section ref="resultsSectionRef" class="results-section fade-in-element">
        <div class="results-title-wrapper">
          <h2 class="section-label">05. FINAL RESULTS</h2>
          <h3 class="results-title">Quality Red Angus Cattle</h3>
        </div>

        <div class="result-showcase">
          <div class="showcase-mockup">
            <div class="laptop-container">
              <video
                class="project-video"
                autoplay
                muted
                loop
                tabindex="0"
                @click="restartVideo"
                @keydown="handleVideoKeydown"
                aria-label="Click or press Enter to restart Spring Hills video"
              >
                <source :src="SpringHillsVideo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                :src="ComputerFrame"
                alt="Computer Frame"
                class="laptop-frame"
              />
            </div>
          </div>
          <a
            href="https://springhillsranch.com/"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="link-title">Spring Hills Ranch Website</span>
            View Project
            <svg
              class="external-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_232_239)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.795 4.375C10.795 4.20924 10.7292 4.05027 10.6119 3.93306C10.4947 3.81585 10.3358 3.75 10.17 3.75H1.875C1.37772 3.75 0.900805 3.94754 0.549175 4.29917C0.197544 4.65081 0 5.12772 0 5.625L0 18.125C0 18.6223 0.197544 19.0992 0.549175 19.4508C0.900805 19.8025 1.37772 20 1.875 20H14.375C14.8723 20 15.3492 19.8025 15.7008 19.4508C16.0525 19.0992 16.25 18.6223 16.25 18.125V9.83C16.25 9.66424 16.1842 9.50527 16.0669 9.38806C15.9497 9.27085 15.7908 9.205 15.625 9.205C15.4592 9.205 15.3003 9.27085 15.1831 9.38806C15.0658 9.50527 15 9.66424 15 9.83V18.125C15 18.2908 14.9342 18.4497 14.8169 18.5669C14.6997 18.6842 14.5408 18.75 14.375 18.75H1.875C1.70924 18.75 1.55027 18.6842 1.43306 18.5669C1.31585 18.4497 1.25 18.2908 1.25 18.125V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H10.17C10.3358 5 10.4947 4.93415 10.6119 4.81694C10.7292 4.69973 10.795 4.54076 10.795 4.375Z"
                  fill="#00B5E2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.0001 0.625C20.0001 0.45924 19.9343 0.300269 19.8171 0.183058C19.6998 0.065848 19.5409 0 19.3751 0L13.1251 0C12.9594 0 12.8004 0.065848 12.6832 0.183058C12.566 0.300269 12.5001 0.45924 12.5001 0.625C12.5001 0.79076 12.566 0.949732 12.6832 1.06694C12.8004 1.18415 12.9594 1.25 13.1251 1.25H17.8664L7.68262 11.4325C7.62451 11.4906 7.57841 11.5596 7.54696 11.6355C7.51552 11.7114 7.49933 11.7928 7.49933 11.875C7.49933 11.9572 7.51552 12.0386 7.54696 12.1145C7.57841 12.1904 7.62451 12.2594 7.68262 12.3175C7.74073 12.3756 7.80971 12.4217 7.88564 12.4532C7.96156 12.4846 8.04294 12.5008 8.12512 12.5008C8.2073 12.5008 8.28867 12.4846 8.3646 12.4532C8.44052 12.4217 8.50951 12.3756 8.56762 12.3175L18.7501 2.13375V6.875C18.7501 7.04076 18.816 7.19973 18.9332 7.31694C19.0504 7.43415 19.2094 7.5 19.3751 7.5C19.5409 7.5 19.6998 7.43415 19.8171 7.31694C19.9343 7.19973 20.0001 7.04076 20.0001 6.875V0.625Z"
                  fill="#00B5E2"
                />
              </g>
              <defs>
                <clipPath id="clip0_232_239">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <div class="result-image-showcase">
          <h4 class="block-title">CMS System</h4>

          <img
            :src="SpringHillsSystemCover"
            alt="High-fidelity wireframe 1"
            class="wireframe-image"
            @click="openProjectLightbox(1)"
          />
          <img
            :src="SpringHillsSystemCover2"
            alt="High-fidelity wireframe 2"
            class="wireframe-image"
            @click="openProjectLightbox(3)"
          />
        </div>
      </section>
    </div>

    <!-- Lightbox Component -->
    <VueEasyLightbox
      :visible="wireframeVisibleRef"
      :imgs="wireframeImages"
      :index="wireframeIndexRef"
      @hide="onHide"
    />

    <VueEasyLightbox
      :visible="ProjectVisibleRef"
      :imgs="projectImages"
      :index="ProjectIndexRef"
      @hide="onProjectHide"
    />

    <!-- Custom Cursor Component -->
    <CustomCursor />
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

.text-accent {
  color: var(--color-accent-light);
  font-weight: 700;
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

/* LightBox Trigger */
.lightbox-trigger {
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.lightbox-trigger:hover {
  transform: scale(1.02);
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
  max-width: 540px;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
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
  max-height: 274px;
  display: block;
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.wireframe-image:hover {
  transform: scale(1.02);
}

.user-flow-image {
  height: auto;
  max-height: 274px;
  display: block;
  width: 100%;
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

.user-flow-image:hover {
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

.ux-section {
  display: flex;
  gap: 64px;
  width: 100%;
  padding: 100px 0;
}

.ux-header {
  display: flex;
  flex-direction: column;
  gap: 69px;
}

.ux-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

.ux-title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
}

.ux-content {
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: var(--width);
  flex-wrap: wrap;
}

.ux-image {
  width: 600px;
  height: auto;
  border-radius: 10px;
}

.ux-biases {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 320px;
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

.result-image-showcase {
  display: flex;
  align-items: center;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;
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
}
</style>
