<template>
  <section class="contact-section">
    <h2 ref="sectionTitleRef" class="section-title fade-in-element">Let's Work Together!</h2>

    <div ref="contactContainerRef" class="contact-container fade-in-element">
      <div class="contact-image-wrapper">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/95fcb2bc764ab373dbd4ea7c01f1d10b45de7c99?width=758" 
          alt="Contact portrait"
          class="contact-image"
        />
      </div>

      <form 
        id="my-form" 
        class="contact-form"
        action="https://formspree.io/f/mjgkpbla"
        method="POST"
        @submit="handleSubmit"
      >
        <!-- TODO: Replace YOUR_FORM_ID above with your actual Formspree form ID -->
        
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">Message</label>
          <textarea 
            id="message"
            name="message"
            class="form-textarea"
            rows="4"
            required
          ></textarea>
        </div>

        <button 
          id="my-form-button" 
          type="submit" 
          class="submit-btn"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'SENDING...' : 'SUBMIT' }}
        </button>

        <p id="my-form-status" class="form-status" v-if="formStatus">
          {{ formStatus }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const isSubmitting = ref(false)
const formStatus = ref('')

const sectionTitleRef = ref<HTMLElement | null>(null)
const contactContainerRef = ref<HTMLElement | null>(null)

// Initialize scroll animations
useScrollAnimation(sectionTitleRef, { threshold: 0.2 })
useScrollAnimation(contactContainerRef, { threshold: 0.1 })

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  
  isSubmitting.value = true
  formStatus.value = ''
  
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      formStatus.value = 'Thanks for your message! I\'ll get back to you soon.'
      form.reset()
    } else {
      const errorData = await response.json()
      formStatus.value = errorData.error || 'Oops! There was a problem submitting your form.'
    }
  } catch (error) {
    formStatus.value = 'Oops! There was a problem submitting your form.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
  width: 100%;
  max-width: 1077px;
  margin: 0 auto;
  padding: 6rem 0em 0rem 0rem;
}

.section-title {
  width: 100%;
  text-align: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: normal;
  background: var(--gradient-accent-side);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.contact-container {
  display: flex;
  align-items: flex-end;
  gap: 120px;
  width: 100%;
}

.contact-image-wrapper {
  flex-shrink: 0;
}

.contact-image {
  width: 379px;
  height: 510px;
  border-radius: 11.132px;
  object-fit: cover;
  display: block;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 33px;
  flex: 1;
  max-width: 578px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.form-label {
  color: var(--color-heading);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 15px;

  border: 1px solid transparent;
  border-radius: 4px;

  background:
    /* Inner fill */
    linear-gradient(
      var(--color-background),
      var(--color-background)
    ) padding-box,

    /* Border layer */
    linear-gradient(
      135deg,
      var(--color-accent) 0%,
      rgba(0, 181, 226, 0.25) 18%,
      rgba(60, 60, 60, 0.471) 45%,
      rgba(60, 60, 60, 0.503) 100%
    ) border-box;

  color: var(--color-text);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;

  transition: background 0.3s ease;
}


.form-input {
  height: 50px;
}

.form-textarea {
  height: 100px;
  resize: vertical;
  min-height: 100px;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text);
  opacity: 0.4;
}

.submit-btn {
  display: flex;
  width: 93px;
  height: 53px;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  background: var(--color-background-soft);
  border: 1.5px solid var(--color-border);
  font-weight: 700;
  color: var(--color-text);
  opacity: 0.85;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, color 0.3s ease, opacity 0.3s ease;

}



.submit-btn:hover:not(:disabled) {
  background: rgba(0, 181, 226, 0.15);
  border-color: var(--color-accent);
  transform: scale(1.05);
  opacity: 1;
  color: var(--color-accent);
}

.submit-btn:active:not(:disabled) {
  opacity: 0.8;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-status {
  color: var(--color-text);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 10px;
  background: rgba(0, 181, 226, 0.1);
  border-radius: 4px;
}

/* Large screens */
@media (min-width: 2560px) {
  .section-title {
    font-size: 72px;
  }

  .contact-container {
    gap: 160px;
  }

  .contact-image {
    width: 500px;
    height: 670px;
  }

  .contact-form {
    max-width: 700px;
    gap: 40px;
  }

  .form-label {
    font-size: 20px;
  }

  .form-input,
  .form-textarea {
    font-size: 18px;
    padding: 18px;
  }

  .form-input {
    height: 60px;
  }

  .form-textarea {
    height: 120px;
    min-height: 120px;
  }

  .submit-btn {
    width: 120px;
    height: 60px;
    font-size: 18px;
  }
}

/* Tablet and smaller desktops */
@media (max-width: 1440px) {
  .section-title {
    font-size: 48px;
  }

  .contact-container {
    gap: 80px;
  }

  .contact-image {
    width: 320px;
    height: 430px;
  }

  .contact-form {
    gap: 28px;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .contact-section {
    gap: 48px;
  }

  .section-title {
    font-size: 36px;
    text-align: left;
  }

  .contact-container {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }

  .contact-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 379 / 510;
  }

  .contact-form {
    width: 100%;
    max-width: 100%;
    gap: 24px;
  }

  .form-label {
    font-size: 15px;
  }

  .form-input {
    height: 48px;
  }

  .form-textarea {
    height: 90px;
  }
}

/* Mobile */
@media (max-width: 425px) {
  .contact-section {
    gap: 32px;
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
    text-align: left;
  }

  .contact-container {
    gap: 32px;
  }

  .contact-image {
    max-width: 100%;
  }

  .contact-form {
    gap: 20px;
  }

  .form-group {
    gap: 12px;
  }

  .form-label {
    font-size: 14px;
  }

  .form-input,
  .form-textarea {
    font-size: 14px;
    padding: 12px;
  }

  .form-input {
    height: 45px;
  }

  .form-textarea {
    height: 80px;
    min-height: 80px;
  }

  .submit-btn {
    width: 100%;
    max-width: 140px;
    height: 48px;
    font-size: 15px;
  }

  .form-status {
    font-size: 13px;
  }
}
</style>
