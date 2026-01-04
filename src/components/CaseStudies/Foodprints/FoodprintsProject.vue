<script setup lang="ts">
import { ref } from "vue";
import { useScrollAnimation } from "../../../composables/useScrollAnimation";
import VueEasyLightbox from "vue-easy-lightbox";
import CustomCursor from "../../CustomCursor/CustomCursor.vue";
import amazoniaVideo from "./assets/amazonia_v1.mp4";
import carmenVideo from "./assets/carmen_v1.mp4";
import PreInterviewImage from "./assets/pre_interview.png";
import PostInterviewImage from "./assets/post_interview.png";
import "img-comparison-slider";
import ComputerFrame from "./assets/computer_frame.png";
import TableDesktop from "./assets/table_desktop.png";
import LowWireframe1 from "./assets/low_wireframe_1.png";
import LowWireframe2 from "./assets/low_wireframe_2.png";
import LowWireframe3 from "./assets/low_wireframe_3.png";
import LowWireframe4 from "./assets/low_wireframe_4.png";
import HighWireframe1 from "./assets/high_wireframe_1.png";
import HighWireframe2 from "./assets/high_wireframe_2.png";
import HighWireframe3 from "./assets/high_wireframe_3.png";

//Project Cover
import CarmenCover from "./assets/carmen_cover.png";
import AmazoniaCover from "./assets/amazonia_cover.png";
import ChefCover from "./assets/chef_cover.jpg";
import CarmenInsight from "./assets/carmen_insight.png";


// Wireframe Lightbox state
const wireframeVisibleRef = ref(false);
const wireframeIndexRef = ref(0);

// Project Lightbox state
const ProjectVisibleRef = ref(false);
const ProjectIndexRef = ref(0);

// All wireframe images - using high-resolution imported images for lightbox
const wireframeImages = [
  LowWireframe1,
  LowWireframe2,
  LowWireframe3,
  LowWireframe4,
  HighWireframe1,
  HighWireframe2,
  HighWireframe3,
];

const projectImages = [
  CarmenCover,
  AmazoniaCover,
  ChefCover,
  CarmenInsight
]

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

// Navigate to The Table project
const navigateToTheTable = () => {
  window.location.hash = '#/thetable';
  window.scrollTo(0, 0);
};

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
            Eight Months.<br />
            Four Websites.<br />
            One Vision.
          </h1>

          <div class="overview-section">
            <h2 class="section-label">01. OVERVIEW</h2>
            <p class="overview-description">
              This case study goes over my challenges and results of FoodPrints,
              a project that draws from public statistics, figures of WFP data
              across the region, diving deeper into the human narratives hidden
              within.
              <br /><br />
              Through visually compelling products—interactive displays,
              infographics, case studies, and immersive audio-visual pieces—we
              aimed to create an analytical and emotional experience centered on
              food security and nutrition.
            </p>
          </div>
        </div>

        <!-- Project Images -->
        <div class="project-images">
          <div class="image-wrapper">
            <img
            :src="CarmenCover"
            alt="Carmen Desktop Project"
            class="project-image lightbox-trigger"
            @click="openProjectLightbox(0)"
            />
          </div>
          <div class="image-wrapper">
            <img
              :src="AmazoniaCover"
              alt="Desktop Development Project 1"
              class="project-image lightbox-trigger"
              @click="openProjectLightbox(1)"
            />
          </div>
          
          <div class="image-wrapper">
            <img
              :src="ChefCover"
              alt="Desktop Development Project 2"
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
            UX / UI Designer<br />
            Web Developer
          </h3>
          <p class="role-description">
I designed both low-fidelity and high-fidelity wireframes and presented interactive demos using Figma and Dora.ai, demonstrating the storytelling approach to stakeholders and during internal staff meetings. I also conducted usability testing throughout the design iterations, continuously improving the user experience.

            <br /><br />
        As the project evolved, my primary focus shifted to development. I built the website using React.js and GSAP, ensuring rich interactivity and full responsiveness across all screen sizes.

          </p>
        </div>
        <div class="mockup-wrapper">
          <img
            :src="CarmenInsight"
            alt="MacBook Air mockup showing project"
            class="laptop-mockup lightbox-trigger"
            @click="openProjectLightbox(3)"
          />
        </div>
      </section>

      <!-- Key Challenges Section -->
      <section ref="challengesSectionRef" class="challenges-section fade-in-element">
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
              In my role as a developer, one of the biggest challenges was time.
              The deadlines were tight, as we planned to launch these three
              websites by the end of 2025. Responsiveness was also difficult to
              achieve because we had designed parallax and scrolling animations
              for several sections in all of the websites.
            </p>
          </div>
          <div class="solution-block">
            <h4 class="block-title">Solution</h4>
            <p class="block-description">
              During one of our design meetings, I proposed making some of the
              section layouts reusable so they could be easily reused in code
              and for future websites. The team agreed, and we created a shared
              library of sections—first in design and then in code—that could be
              reused across projects in order to save more time.
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
            <h3 class="process-title">Storytelling Focused</h3>
          </div>
        </div>

        <div class="wireframes-section low-fidelity">
          <div class="wireframes-content">
            <h4 class="block-title">Low-Fidelity Wireframes</h4>
            <p class="block-description">
              I began the creative process by building the first wireframes,
              focusing on storytelling and the real stories collected from
              countries like Honduras, Colombia, and El Salvador. Some concepts
              explored more ambitious ideas and were refined to thoughtfully
              align with the organization's brand guidelines
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
            <img
              :src="LowWireframe4"
              alt="Low-fidelity wireframe 4"
              class="wireframe-image"
              @click="openLightbox(3)"
            />
          </div>
        </div>

        <div class="wireframes-section high-fidelity">
          <div class="wireframes-header">
            <h4 class="block-title">High-Fidelity Wireframes</h4>
            <div class="divider-line short"></div>
          </div>
          <div class="wireframes-layout">
            <p class="block-description">
              My wireframe ideas were later used by the lead graphic
              designer, in charge of the final visual design of the websites
            </p>
            <div class="wireframes-images">
              <img
                :src="HighWireframe1"
                alt="High-fidelity wireframe 1"
                class="wireframe-image"
                @click="openLightbox(4)"
              />
              <img
                :src="HighWireframe2"
                alt="High-fidelity wireframe 2"
                class="wireframe-image"
                @click="openLightbox(5)"
              />
              <img
                :src="HighWireframe3"
                alt="High-fidelity wireframe 3"
                class="wireframe-image"
                @click="openLightbox(6)"
              />
            </div>
          </div>
        </div>

        <div class="ux-section">
          <div class="image-comparison-wrapper">
            <!-- SLIDER -->
            <img-comparison-slider value="50">
              <div
                slot="first"
                class="slider-image-wrapper"
                data-cursor-text="before"
                data-cursor-color="var(--color-accent)"
                data-cursor-text-color="var(--color-text-light)"
              >
                <img
                  :src="PreInterviewImage"
                  alt="Before redesign"
                />
              </div>

              <div
                slot="second"
                class="slider-image-wrapper"
                data-cursor-text="after"
                data-cursor-color="var(--color-accent)"
                data-cursor-text-color="var(--color-text-light)"
              >
                <img
                  :src="PostInterviewImage"
                  alt="After redesign"
                />
              </div>
            </img-comparison-slider>

            <!-- LABELS BELOW -->
            <!-- <div class="comparison-labels">
              <span class="comparison-label">Before</span>
              <span class="comparison-label">After</span>
            </div> -->
          </div>

          <div class="ux-content">
            <div class="content-header">
              <h4 class="ux-title">UX Psychology Applied</h4>
              <p class="block-description">
                The primary goal of this section was to prompt users to
                select a price point and then reveal the underlying truth behind
                that choice. After 5 usability tests, I redesigned the section (Right Image),
                taking in consideration the following cognitive bias:
              </p>
            </div>
            <div class="ux-biases">
              <div class="bias-item">
                <h5 class="bias-title">+ Progressive Disclosure</h5>
                <p class="bias-description">
                  Users are less overwhelmed if they're exposed to complex
                  features later
                </p>
              </div>
              <div class="bias-item">
                <h5 class="bias-title">+ Framing</h5>
                <p class="bias-description">
                  The way information is presented affects how users make
                  decisions
                </p>
              </div>
              <div class="bias-item">
                <h5 class="bias-title">+ Nudge</h5>
                <p class="bias-description">
                  Subtle hints can affect users' decisions (Transforming the
                  cursor in to a “CLICK” circle when hovering over the button)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Results Section -->
      <section ref="resultsSectionRef" class="results-section fade-in-element">
        <div class="results-title-wrapper">
          <h2 class="section-label">05. FINAL RESULTS</h2>
          <h3 class="results-title">Bringing the Story to Life</h3>
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
                <source :src="carmenVideo" type="video/mp4" />
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
            href="https://cdn.wfp.org/2025/foodprints/local/"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="link-title">Of Beans and Dreams |</span> The power of
            local food markets
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

        <div class="result-showcase">
          <a
            href="https://cdn.wfp.org/2025/foodprints/local/"
            class="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="link-title">Madre Amazonia |</span>
            <span class="link-description"
              >Local food, protected forests, stronger futures

              <svg
                class="external-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_232_242)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.795 4.375C10.795 4.20924 10.7292 4.05027 10.6119 3.93306C10.4947 3.81585 10.3358 3.75 10.17 3.75H1.875C1.37772 3.75 0.900805 3.94754 0.549175 4.29917C0.197544 4.65081 0 5.12772 0 5.625L0 18.125C0 18.6223 0.197544 19.0992 0.549175 19.4508C0.900805 19.8025 1.37772 20 1.875 20H14.375C14.8723 20 15.3492 19.8025 15.7008 19.4508C16.0525 19.0992 16.25 18.6223 16.25 18.125V9.83C16.25 9.66424 16.1842 9.50527 16.0669 9.38806C15.9497 9.27085 15.7908 9.205 15.625 9.205C15.4592 9.205 15.3003 9.27085 15.1831 9.38806C15.0658 9.50527 15 9.66424 15 9.83V18.125C15 18.2908 14.9342 18.4497 14.8169 18.5669C14.6997 18.6842 14.5408 18.75 14.375 18.75H1.875C1.70924 18.75 1.55027 18.6842 1.43306 18.5669C1.31585 18.4497 1.25 18.2908 1.25 18.125V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H10.17C10.3358 5 10.4947 4.93415 10.6119 4.81694C10.7292 4.69973 10.795 4.54076 10.795 4.375Z"
                    fill="#00B5E2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.0001 0.625C20.0001 0.45924 19.9343 0.300269 19.8171 0.183058C19.6999 0.065848 19.5409 0 19.3751 0L13.1251 0C12.9594 0 12.8004 0.065848 12.6832 0.183058C12.566 0.300269 12.5001 0.45924 12.5001 0.625C12.5001 0.79076 12.566 0.949732 12.6832 1.06694C12.8004 1.18415 12.9594 1.25 13.1251 1.25H17.8664L7.68263 11.4325C7.62452 11.4906 7.57842 11.5596 7.54697 11.6355C7.51552 11.7114 7.49934 11.7928 7.49934 11.875C7.49934 11.9572 7.51552 12.0386 7.54697 12.1145C7.57842 12.1904 7.62452 12.2594 7.68263 12.3175C7.74074 12.3756 7.80972 12.4217 7.88565 12.4532C7.96157 12.4846 8.04295 12.5008 8.12513 12.5008C8.20731 12.5008 8.28868 12.4846 8.36461 12.4532C8.44053 12.4217 8.50952 12.3756 8.56763 12.3175L18.7501 2.13375V6.875C18.7501 7.04076 18.816 7.19973 18.9332 7.31694C19.0504 7.43415 19.2094 7.5 19.3751 7.5C19.5409 7.5 19.6999 7.43415 19.8171 7.31694C19.9343 7.19973 20.0001 7.04076 20.0001 6.875V0.625Z"
                    fill="#00B5E2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_232_242">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </a>
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
                aria-label="Click or press Enter to restart Amazonia video"
              >
                <source :src="amazoniaVideo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                :src="ComputerFrame"
                alt="Computer Frame"
                class="laptop-frame"
              />
            </div>
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
          <article class="next-project-card" @click="navigateToTheTable">
            <div class="card-content">
              <h4 class="card-title">The Table | Harding University</h4>
              <p class="card-role">UX/UI Designer & Web Developer</p>
            </div>
            <div class="card-image">
              <img
                :src="TableDesktop"
                alt="The Table Project Desktop Preview"
              />
            </div>
          </article>
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
  max-width: 340px;
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
  flex: 1;
  min-width: 320px;
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
  width: 100%;
  max-width: 600px;
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
  flex-wrap: wrap;
  align-items: flex-start;
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
  flex-direction: column;
  gap: 32px;
  flex: 1;
  min-width: 320px;
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

  .ux-section {
    gap: 48px;
    padding: 80px 0;
  }

  .ux-title {
    font-size: 36px;
  }

  .bias-title {
    font-size: 20px;
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

  .ux-section {
    flex-direction: column;
    gap: 48px;
    padding: 60px 0;
  }

  .image-comparison-wrapper {
    width: 100%;
    max-width: 100%;
  }

  .slider-image-wrapper img,
  img-comparison-slider img {
    width: 100%;
    max-width: 100%;
  }

  .comparison-labels {
    max-width: 100%;
  }

  .ux-title {
    font-size: 28px;
  }

  .ux-content {
    width: 100%;
  }

  .bias-title {
    font-size: 18px;
  }

  .bias-description {
    padding-left: 24px;
    font-size: 15px;
  }

  .content-header {
    gap: 20px;
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

  .ux-section {
    padding: 40px 0;
    gap: 32px;
  }

  .ux-title {
    font-size: 24px;
  }

  .bias-title {
    font-size: 16px;
  }

  .bias-description {
    padding-left: 16px;
    font-size: 14px;
  }

  .content-header {
    gap: 16px;
  }

  .ux-biases {
    gap: 12px;
  }

  .image-comparison-wrapper {
    gap: 12px;
  }
}
</style>
