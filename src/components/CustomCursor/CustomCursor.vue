<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const cursorRef = ref<HTMLDivElement | null>(null);
const textRef = ref<HTMLSpanElement | null>(null);
let quickToX: any = null;
let quickToY: any = null;
let observer: MutationObserver | null = null;

onMounted(() => {
  const cursor = cursorRef.value;
  const text = textRef.value;

  if (!cursor || !text) return;

  // Initialize GSAP quickTo for smooth cursor movement
  quickToX = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3.out' });
  quickToY = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3.out' });

  // Set initial state
  gsap.set(cursor, {
    width: 20,
    height: 20,
    opacity: 0,
    backgroundColor: 'transparent',
    xPercent: -50,
    yPercent: -50
  });

  gsap.set(text, {
    opacity: 0
  });

  // Mouse move handler
  const handleMouseMove = (e: MouseEvent) => {
    if (quickToX && quickToY) {
      quickToX(e.clientX);
      quickToY(e.clientY);
    }
  };

  // Mouse enter handler for interactive elements
  const handleMouseEnter = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const cursorText = target.getAttribute('data-cursor-text');
    const cursorColor = target.getAttribute('data-cursor-color');
    const cursorTextColor = target.getAttribute('data-cursor-text-color') || 'var(--color-text-dark)';

    if (cursorText && cursorColor) {
      text.textContent = cursorText;
      text.style.color = cursorTextColor;

      gsap.to(cursor, {
        width: 80,
        height: 80,
        opacity: 1,
        backgroundColor: cursorColor,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(text, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };


  // Mouse leave handler for interactive elements
  const handleMouseLeave = () => {
    gsap.to(text, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in'
    });

    gsap.to(cursor, {
      width: 20,
      height: 20,
      opacity: 0,
      backgroundColor: 'transparent',
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        text.style.color = 'var(--color-text-dark)';
      }
    });
  };

  // Add mouse move listener
  window.addEventListener('mousemove', handleMouseMove);

  // Function to attach listeners to interactive elements
  const attachListeners = () => {
    const interactiveElements = document.querySelectorAll('[data-cursor-text][data-cursor-color]');
    interactiveElements.forEach(element => {
      element.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      element.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      element.addEventListener('mouseenter', handleMouseEnter as EventListener);
      element.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });
  };

  // Initial attachment
  attachListeners();

  // Observer to watch for dynamically added elements
  observer = new MutationObserver(() => {
    attachListeners();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    const interactiveElements = document.querySelectorAll('[data-cursor-text][data-cursor-color]');
    interactiveElements.forEach(element => {
      element.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      element.removeEventListener('mouseleave', handleMouseLeave as EventListener);
    });
    if (observer) {
      observer.disconnect();
    }
  });
});
</script>

<template>
  <div ref="cursorRef" class="custom-cursor">
    <span ref="textRef" class="cursor-text"></span>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: normal;
}

.cursor-text {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: -0.007px;
  text-align: center;
  user-select: none;
  transition: color 0.3s ease;
}
</style>
