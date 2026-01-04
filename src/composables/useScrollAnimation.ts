import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  animationClass?: string
}

export function useScrollAnimation(
  elementRefs: Ref<HTMLElement[]> | Ref<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    animationClass = 'fade-in-visible'
  } = options

  let observer: IntersectionObserver | null = null

  const observeElements = () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    // Disconnect existing observer before creating a new one
    if (observer) {
      observer.disconnect()
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)
            // Optional: unobserve after animation to improve performance
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    // Handle both single element and array of elements
    const elements = Array.isArray(elementRefs.value)
      ? elementRefs.value
      : elementRefs.value
      ? [elementRefs.value]
      : []

    elements.forEach((el) => {
      if (el) {
        observer?.observe(el)
      }
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(observeElements, 100)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    observeElements
  }
}
