<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
    (e: 'complete'): void
}>()

const containerRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

const animateText = async () => {
    if (!nameRef.value || !titleRef.value || !containerRef.value) return

    // Animate name: line reveal from baseline upward
    gsap.fromTo(nameRef.value,
        {
            y: '100%'
        },
        {
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            onComplete: () => {
                // Animate title after name completes (short delay for hierarchy)
                setTimeout(() => {
                    if (titleRef.value) {
                        gsap.fromTo(titleRef.value,
                            {
                                y: '100%'
                            },
                            {
                                y: '0%',
                                duration: 1,
                                ease: 'power3.out',
                                onComplete: () => {
                                    // After both animations complete, fade out preloader
                                    setTimeout(() => {
                                        if (containerRef.value) {
                                            gsap.to(containerRef.value, {
                                                opacity: 0,
                                                duration: 0.6,
                                                ease: 'power2.inOut',
                                                onComplete: () => {
                                                    if (containerRef.value) {
                                                        containerRef.value.style.display = 'none'
                                                    }
                                                    emit('complete')
                                                }
                                            })
                                        }
                                    }, 800)
                                }
                            }
                        )
                    }
                }, 300)
            }
        }
    )
}

onMounted(() => {
    // Start animation (initial state is set in CSS)
    animateText()
})
</script>

<template>
    <div ref="containerRef" class="preloader-container">
        <div class="preloader-wrapper">
            <div class="preloader-line-container">
                <div ref="nameRef" class="preloader-name">Esteban Muñoz</div>
            </div>
            <div class="preloader-line-container">
                <div ref="titleRef" class="preloader-title">Front-End Developer & UX/UI Designer</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.preloader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-dark);
    z-index: 9999;
    text-align: center;
}

.preloader-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90vw;
    margin: 0 auto;
}

.preloader-line-container {
    overflow: hidden;
    display: inline-block;
}

.preloader-name {
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 0.05em;
    color: var(--color-text-light);
    text-align: center;
    font-family: Inter, system-ui, sans-serif;
    transform: translateY(100%);
    display: inline-block;
}

.preloader-title {
    font-weight: 400;
    font-size: 1.125rem;
    letter-spacing: 0.08em;
    background: var(--gradient-accent-side);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
    font-family: Inter, system-ui, sans-serif;
    transform: translateY(100%);
    display: inline-block;
}

/* Tablet styles (641px to 1024px) */
@media (min-width: 641px) {
    .preloader-name {
        font-size: 3.5rem;
    }

    .preloader-title {
        font-size: 1.5rem;
    }
}

/* Desktop styles (1025px and above) */
@media (min-width: 1025px) {
    .preloader-name {
        font-size: 4.5rem;
    }

    .preloader-title {
        font-size: 1.75rem;
    }
}
</style>
