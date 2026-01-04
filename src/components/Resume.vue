
<script setup lang="ts">
import ResumeImage from "../assets/resume_preview.png";

const pdfPath = '/EstebanMunoz_Resume.pdf';

const viewResume = () => {
  window.open(pdfPath, '_blank', 'noopener,noreferrer');
};

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'EstebanMunoz_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <section class="resume-section">
    <div class="resume-content">
      <h1 class="resume-heading">Let's get to work!</h1>
      <div class="resume-preview-container">
        <img :src="ResumeImage" alt="Resume Preview" class="resume-image" />
        <div class="resume-overlay">
          <button class="resume-button view-button" @click="viewResume">View</button>
          <button class="more-projects-btn" @click="downloadResume">Download</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 1.5rem;
  background-color: var(--color-background);
  transition: background-color 0.3s ease;
}

.resume-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  max-width: 1082px;
  width: 100%;
}

.resume-heading {
  text-align: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: normal;
  background: var(--gradient-accent-side);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.resume-preview-container {
  position: relative;
  width: 100%;
  max-width: 560px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.resume-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1040/1342;
  object-fit: cover;
}

.resume-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.resume-preview-container:hover .resume-overlay {
  opacity: 1;
}

.resume-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 45px;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  color: var(--color-text-light);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 1.55rem;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-button {
  background: var(--color-accent);
}

.view-button:hover {
  background: var(--color-accent-light);
  transform: scale(1.05);
}

.download-button {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.download-button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

@media (max-width: 1440px) {
  .resume-heading {
    font-size: 4rem;
  }

  .resume-content {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .resume-section {
    padding: 3rem 1rem;
  }

  .resume-heading {
    font-size: 2.5rem;
  }

  .resume-content {
    gap: 2rem;
  }

  .resume-button {
    width: 120px;
    height: 45px;
    font-size: 1.25rem;
  }

  .resume-overlay {
    gap: 1.5rem;
  }

  .resume-preview-container:hover .resume-overlay {
    opacity: 0;
  }

  .resume-overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 425px) {
  .resume-section {
    padding: 2rem 1rem;
  }

  .resume-heading {
    font-size: 2rem;
  }

  .resume-content {
    gap: 1.5rem;
  }

  .resume-button {
    width: 100px;
    height: 40px;
    font-size: 1rem;
  }

  .resume-overlay {
    gap: 1rem;
  }
}
</style>
