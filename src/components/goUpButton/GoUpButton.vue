<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  isVisible.value = scrollPosition > 100
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    :class="['go-up-button', { visible: isVisible }]"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.35732 0.355621C8.88313 -0.118565 8.11307 -0.118565 7.63889 0.355621L0.355621 7.63889C-0.118564 8.11307 -0.118564 8.88313 0.355621 9.35732C0.829807 9.8315 1.59986 9.8315 2.07405 9.35732L8.5 2.93128L14.926 9.35348C15.4001 9.82766 16.1702 9.82766 16.6444 9.35348C17.1185 8.87929 17.1185 8.10923 16.6444 7.63505L9.36115 0.351778L9.35732 0.355621Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<style scoped>
.go-up-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.2s ease, background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  z-index: 999;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: var(--color-text);
}

.go-up-button.visible {
  opacity: 1;
  visibility: visible;
}

.go-up-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-text-light);
}

.go-up-button:active {
  transform: scale(0.95);
}

.go-up-button svg {
  width: 18px;
  height: 10px;
}

@media (max-width: 768px) {
  .go-up-button {
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }

  .go-up-button svg {
    width: 16px;
    height: 9px;
  }
}

@media (max-width: 480px) {
  .go-up-button {
    bottom: 15px;
    right: 15px;
    width: 44px;
    height: 44px;
    border-radius: 22px;
  }

  .go-up-button svg {
    width: 14px;
    height: 8px;
  }
}
</style>
