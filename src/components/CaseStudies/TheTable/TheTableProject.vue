<script setup lang="ts">
import { ref } from "vue";
import { useScrollAnimation } from "../../../composables/useScrollAnimation";
import VueEasyLightbox from "vue-easy-lightbox";
import CustomCursor from "../../CustomCursor/CustomCursor.vue";
import "img-comparison-slider";
import ComputerFrame from "./assets/computer_frame.png";

import TableCover from "./assets/table_cover_trans.png";
import LoginCover from "./assets/login_cover_trans.png";
import SystemCover from "./assets/system_cover_trans.png";
import TableInsight from "./assets/table_insight.png";
import SpringHillsCover from "./assets/spring_hills_cover.png";

// Wireframes Images
import LowWireframe1 from "./assets/wireframe-1.jpg";
import LowWireframe2 from "./assets/wireframe-2.jpg";
import LowWireframe3 from "./assets/wireframe-3.jpg";
import LoginWireframe1 from "./assets/login-wireframe.jpg";
import DashboardWireframe1 from "./assets/dashboard-wireframe.jpg";

// Project Videos
import TableVideo from "./assets/thetable_video.mp4";

// Lightbox state for wireframes
const visibleRef = ref(false);
const indexRef = ref(0);

// Lightbox state for project images
const ProjectVisibleRef = ref(false);
const ProjectIndexRef = ref(0);

// All wireframe images - using high-resolution imported images for lightbox
const wireframeImages = [
  LowWireframe1,
  LowWireframe2,
  LowWireframe3,
  LoginWireframe1,
  DashboardWireframe1,
];

// All project images - using high-resolution imported images for lightbox
const projectImages = [TableCover, LoginCover, SystemCover, TableInsight];

// Open lightbox with specific image
const openLightbox = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

// Close lightbox
const onHide = () => {
  visibleRef.value = false;
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

// Navigate to next  project
const navigateToNextProject = () => {
  window.location.hash = '#/springhillsranch';
  window.scrollTo(0, 0);
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
            A Platform <br />
            That Serves <br />
            Everyone
          </h1>

          <div class="overview-section">
            <h2 class="section-label">01. OVERVIEW</h2>
            <p class="overview-description">
              TheTable’s website was designed to provide real-time inventory
              updates, giving students instant visibility into the availability
              of items at the food pantry. The platform has significantly
              improved both operational efficiency and user experience when
              looking for items.

              <br /><br />
              Since its launch in Fall 2024, the website has supported a
              <span class="text-accent">total of 3,678 shopping visitors</span>.
              Beyond inventory management, the site also enhances accessibility
              to administrative tools, offering a user-friendly interface for
              volunteers and board members alike. This project demonstrates how
              thoughtful digital design can streamline operations while
              increasing engagement and accessibility for all stakeholders.
            </p>
          </div>
        </div>

        <!-- Project Images -->
        <div class="project-images">
          <div class="image-wrapper">
            <img
              :src="TableCover"
              alt="Table Cover"
              class="project-image lightbox-trigger"
              @click="openProjectLightbox(0)"
            />
          </div>
          <div class="image-wrapper" style="scale: 1.1">
            <img
              :src="LoginCover"
              alt="Login Cover"
              class="project-image lightbox-trigger"
              @click="openProjectLightbox(1)"
            />
          </div>
          <div class="image-wrapper">
            <img
              :src="SystemCover"
              alt="System Cover"
              class="project-image lightbox-trigger"
              @click="openProjectLightbox(2)"
            />
          </div>
        </div>
      </section>

      <!-- Role Section -->
      <section ref="roleSectionRef" class="role-section fade-in-element">
        <div class="role-content">
          <h2 class="section-label">02. ROLE</h2>
          <h3 class="role-title">
            UX / UI Designer &<br />
            Lead Web Developer
          </h3>
          <p class="role-description">
            I designed and implemented TheTable’s website in React, focusing on
            a clean, intuitive interface that allows students to see real-time
            pantry inventory and volunteers/board members to access management
            tools easily.
            <br /><br />
            As the lead developer,
            <span class="text-accent"
              >I managed a team of three web developers</span
            >, through which we further enhanced the system by creating a
            barcode scanning feature that integrates product images via an API
            and automates checkout by updating the MySQL database in real time.
            This solution improved operational efficiency and reduced manual
            errors.
          </p>
        </div>
        <div class="mockup-wrapper">
          <img
            :src="TableInsight"
            alt="Table Insight"
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
            <h3 class="challenges-title">A Human-Centered Solution</h3>
          </div>
        </div>

        <div class="challenges-content">
          <div class="challenge-block">
            <h4 class="block-title">Challenge</h4>
            <p class="block-description">
              The #1 challenge was to design a website that reduces the stigma
              around food insecurity on campus while providing real-time
              inventory visibility for students and staff. The platform needed
              to clearly show which pantry items were in stock without exposing
              sensitive information, while also supporting multiple user
              groups—students, volunteers, and board members—with different
              needs and access levels.
            </p>
          </div>
          <div class="solution-block">
            <h4 class="block-title">Solution</h4>
            <p class="block-description">
              In one of our board meetings, I proposed making the pantry
              inventory public after hearing from students that they didn’t know
              which products were available and had to visit the building just
              to find out. After discussing the idea, it was approved. I then
              began designing a human-centered website with my team that
              showcases real-time inventory status—clearly indicating which
              items are in stock or out of stock—while also providing
              information about The Table’s mission, hours, and ways to donate.
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
            <h3 class="process-title">Designing with Purpose</h3>
          </div>
        </div>

        <div class="wireframes-section low-fidelity">
          <div class="wireframe-header">
            <h4 class="wireframe-title">
              Homepage <br />Low-Fidelity Wireframes
            </h4>
            <p class="wireframe-description">
              I started the design of the public homepage website with a
              human-centered approach. The pantry inventory should clearly
              indicate which items are in or out of stock. The design should
              also highlight the Table’s mission, hours, and donation options,
              making it easy for students to access essential information at a
              glance.
            </p>
          </div>

          <div class="wireframes-images">
            <img
              :src="LowWireframe1"
              alt="Low-fidelity wireframe 1"
              class="wireframe-image"
              @click="openLightbox(0)"
            />
            <img
              :src="LowWireframe2"
              alt="Low-fidelity wireframe 2"
              class="wireframe-image"
              @click="openLightbox(1)"
            />
            <img
              :src="LowWireframe3"
              alt="Low-fidelity wireframe 3"
              class="wireframe-image"
              @click="openLightbox(2)"
            />
          </div>
        </div>

        <div class="divider-line short"></div>

        <div class="wireframes-section high-fidelity">
          <div class="wireframe-header">
            <h4 class="wireframe-title">
              Login and Dashboard <br />Low-Fidelity Wireframes
            </h4>
            <p class="wireframe-description">
              These were designed with security as a priority. My team and I decided to authenticate users using a University ID combined with a 4-digit PIN, ensuring controlled access for volunteers and board members.
<br /><br />
Once logged in, the dashboard allows volunteers to check out shoppers, register pantry items, and add new shoppers, streamlining daily operations through a clear, task-focused interface.
            </p>
          </div>

          <div class="wireframes-images">
            <img
              :src="LoginWireframe1"
              alt="Login wireframe 1"
              width="500px"
              class="wireframe-image"
              @click="openLightbox(3)"
            />
            <img
              :src="DashboardWireframe1"
              alt="Dashboard wireframe 2"
              width="500px"
              class="wireframe-image"
              @click="openLightbox(4)"
            />
          </div>
        </div>
      </section>

      <!-- Final Results Section -->
      <section ref="resultsSectionRef" class="results-section fade-in-element">
        <div class="results-title-wrapper">
          <h2 class="section-label">05. FINAL RESULTS</h2>
          <h3 class="results-title">An Efficient Service on Campus</h3>
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
                aria-label="Click or press Enter to restart Carmen video"
              >
                <source :src="TableVideo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                :src="ComputerFrame"
                alt="Computer Frame"
                class="laptop-frame"
              />
            </div>
          </div>

          <h4 class="block-title">
            The Table <br /><span style="opacity: 0.7; font-size: smaller">
              Only Accessable on Campus
            </span>
          </h4>
        </div>

        <div class="result-image-showcase">
          <h4 class="block-title">System Interface</h4>

          <img
            :src="LoginCover"
            alt="High-fidelity wireframe 1"
            @click="openProjectLightbox(1)"
          />
          <img
            :src="SystemCover"
            alt="High-fidelity wireframe 2"
            @click="openProjectLightbox(2)"
          />
        </div>
      </section>

      <!-- Next Project Section -->
      <section class="next-project-section">
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
              <h4 class="card-title">Spring Hills Ranch | Freelance</h4>
              <p class="card-role">UX/UI Designer & Full Stack Developer</p>
            </div>
            <div class="card-image">
              <img
                :src="SpringHillsCover"
                alt="Spring Hills Ranch Preview"
              />
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Lightbox Components -->
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="wireframeImages"
      :index="indexRef"
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

.wireframes-section {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
}

.wireframes-section.low-fidelity {
  flex-direction: row;
  gap: 133px;
}

.wireframes-section.high-fidelity {
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

.wireframe-header {
  display: flex;
  align-items: flex-start;
  gap: 235px;
  width: 100%;
  flex-wrap: wrap;
}

.wireframe-title {
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-heading);
  margin: 0;
  min-width: 212px;
  flex-shrink: 0;
}

.wireframe-description {
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
  max-width: 350px;
  width: 100%;
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

.result-image-showcase img {
  height: auto;
  max-height: 274px;
  cursor: zoom-in;
  transition: transform 0.2s ease;
}
.result-image-showcase img:hover {
  transform: scale(1.02);
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
