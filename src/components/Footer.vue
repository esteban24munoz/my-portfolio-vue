<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-divider">
        <svg width="100%" height="1" viewBox="0 0 1081 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0.5H1081" stroke="var(--color-border)"/>
          <path d="M0 0.5H1081" stroke="url(#paint0_linear_footer_divider)"/>
          <defs>
            <linearGradient id="paint0_linear_footer_divider" x1="981.817" y1="0.38255" x2="981.815" y2="0.835847" gradientUnits="userSpaceOnUse">
              <stop stop-color="var(--color-accent)"/>
              <stop offset="1" stop-color="var(--color-accent)" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">© {{ currentYear }} All rights reserved</p>
        
        <div class="footer-social">
         

          <a href="https://www.behance.net/estebanmunoz6" target="_blank" rel="noopener noreferrer" aria-label="Behance" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="29" viewBox="0 0 46 29" fill="none">
              <path d="M13.1543 0C14.4572 0 15.6613 0.0989257 16.7664 0.395702C17.8688 0.593553 18.776 1.00621 19.5816 1.50084C20.3871 1.99547 20.9863 2.7049 21.3933 3.61219C21.789 4.51665 22.0038 5.62179 22.0038 6.82585C22.0038 8.22777 21.7042 9.43183 20.9976 10.3363C20.3899 11.2408 19.3979 12.0491 18.1797 12.6455C19.8925 13.1429 21.1955 14.0474 21.9897 15.2515C22.7839 16.4555 23.2927 17.9564 23.2927 19.6692C23.2927 21.0711 22.9959 22.2752 22.4872 23.2814C21.9815 24.2954 21.2195 25.1597 20.2769 25.7884C19.3724 26.3961 18.2673 26.8908 17.0632 27.1904C15.8839 27.5026 14.6709 27.6697 13.451 27.6878L0 27.7076V0H13.1543ZM12.3487 11.2436C13.451 11.2436 14.3555 10.9468 15.0536 10.438C15.7489 9.92928 16.057 9.0333 16.057 7.93099C16.057 7.32048 15.9581 6.72693 15.7602 6.3284C15.5443 5.92575 15.2339 5.58145 14.8558 5.32501C14.4463 5.10016 14.0079 4.93278 13.5528 4.82756C13.0553 4.72863 12.5466 4.72863 11.9502 4.72863H6.13337V11.2577C6.13337 11.2436 12.3487 11.2436 12.3487 11.2436ZM12.6455 23.0948C13.2532 23.0948 13.8496 22.9959 14.3583 22.897C14.8558 22.7981 15.3645 22.5974 15.7602 22.2865C16.1559 21.9756 16.4668 21.6788 16.7664 21.1842C16.9643 20.6867 17.1621 20.079 17.1621 19.3724C17.1621 17.9705 16.7664 16.9643 15.9581 16.2577C15.1525 15.65 14.0474 15.3532 12.7444 15.3532H6.13337V23.0807H12.6483L12.6455 23.0948ZM32.0292 22.9959C32.8357 23.8005 34.0398 24.2019 35.6414 24.2C36.7437 24.2 37.7499 23.9004 38.5583 23.3916C39.361 22.7886 39.8603 22.1857 40.0563 21.5827H44.9743C44.1659 23.988 42.9619 25.7008 41.3621 26.806C39.7624 27.8093 37.8489 28.4057 35.5397 28.4057C34.0628 28.4147 32.5979 28.1413 31.2237 27.6002C29.9848 27.1431 28.8801 26.3832 28.01 25.3899C27.0796 24.466 26.3888 23.3289 25.9976 22.0773C25.503 20.7743 25.291 19.3724 25.291 17.7585C25.291 16.2577 25.4888 14.8416 25.9976 13.5386C26.5064 12.2385 27.2017 11.1305 28.1089 10.1271C29.0134 9.22267 30.1185 8.41431 31.3226 7.91686C32.6648 7.38111 34.0973 7.10766 35.5425 7.11132C37.2553 7.11132 38.7561 7.4081 40.0591 8.11471C41.3593 8.82132 42.3683 9.61838 43.1739 10.8224C43.9794 11.9248 44.5758 13.2277 44.9856 14.6325C45.1835 16.0344 45.2824 17.4476 45.1835 19.0502H30.6273C30.6273 20.6895 31.2209 22.1876 32.0292 22.9959ZM38.3604 12.4476C37.6538 11.741 36.5459 11.3425 35.2429 11.3425C34.3384 11.3425 33.6431 11.5404 33.0354 11.84C32.4277 12.1396 32.0292 12.5466 31.6335 12.9423C31.2645 13.3305 31.0186 13.8193 30.9269 14.347C30.8252 14.8416 30.7291 15.2515 30.7291 15.6472H39.7624C39.5645 14.1605 39.0586 13.1543 38.3604 12.4476ZM29.5222 1.91067H40.7657V4.61558H29.5222V1.91067Z" fill="currentColor"/>
            </svg>
          </a>
 <a href="https://github.com/esteban24munoz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="social-link">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0743 0.371887C6.74573 0.371887 0 7.11762 0 15.4462C0 22.1165 4.31501 27.7505 10.307 29.7479C11.0607 29.8798 11.3434 29.4275 11.3434 29.0318C11.3434 28.6738 11.3245 27.4867 11.3245 26.2243C7.53713 26.9214 6.5573 25.301 6.25582 24.453C6.08623 24.0196 5.35136 22.6818 4.71071 22.3238C4.18311 22.0411 3.42939 21.344 4.69186 21.3251C5.87896 21.3063 6.72689 22.418 7.00953 22.8702C8.36622 25.1502 10.5331 24.5096 11.3999 24.1139C11.5318 23.134 11.9275 22.4745 12.3609 22.0977C9.00687 21.7208 5.50211 20.4207 5.50211 14.6548C5.50211 13.0154 6.08623 11.6587 7.04722 10.6035C6.89648 10.2267 6.36888 8.68158 7.19796 6.60886C7.19796 6.60886 8.46043 6.21316 11.3434 8.15398C12.5493 7.81481 13.8306 7.64522 15.1119 7.64522C16.3933 7.64522 17.6746 7.81481 18.8805 8.15398C21.7635 6.19432 23.0259 6.60886 23.0259 6.60886C23.855 8.68158 23.3274 10.2267 23.1767 10.6035C24.1377 11.6587 24.7218 12.9966 24.7218 14.6548C24.7218 20.4395 21.1982 21.7208 17.8442 22.0977C18.3906 22.5687 18.8617 23.4732 18.8617 24.8864C18.8617 26.9026 18.8428 28.5231 18.8428 29.0318C18.8428 29.4275 19.1255 29.8986 19.8792 29.7479C22.8722 28.7384 25.473 26.8153 27.3153 24.2496C29.1576 21.6839 30.1486 18.6048 30.1485 15.4462C30.1485 7.11762 23.4028 0.371887 15.0743 0.371887Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/em-24/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-link">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.926025 2.15939C0.926025 0.966637 1.91704 0 3.13984 0H28.8601C30.0829 0 31.0739 0.966637 31.0739 2.15939V27.9891C31.0739 29.1819 30.0829 30.1485 28.8601 30.1485H3.13984C1.91704 30.1485 0.926025 29.1819 0.926025 27.9891V2.15939ZM10.2403 25.2381V11.6241H5.71631V25.2381H10.2403ZM7.97881 9.76435C9.55576 9.76435 10.5383 8.72046 10.5383 7.41277C10.509 6.07681 9.55809 5.06118 8.00881 5.06118C6.45953 5.06118 5.44775 6.0787 5.44775 7.41277C5.44775 8.72046 6.42953 9.76435 7.94881 9.76435H7.97881ZM17.2269 25.2381V17.635C17.2269 17.228 17.2569 16.821 17.3769 16.5308C17.7029 15.7187 18.4479 14.8764 19.6989 14.8764C21.3359 14.8764 21.9899 16.1238 21.9899 17.9553V25.2381H26.5139V17.4296C26.5139 13.2465 24.2829 11.3019 21.3059 11.3019C18.9059 11.3019 17.8299 12.6209 17.2269 13.5499V13.597H17.1969L17.2269 13.5499V11.6241H12.7039C12.7609 12.9017 12.7039 25.2381 12.7039 25.2381H17.2269Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--color-background);
  padding: 3.88rem 1.5rem 2.5rem;
  transition: background-color 0.3s ease;
}

.footer-content {
  max-width: 1084px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.footer-divider {
  width: 100%;
  height: 1px;
}

.footer-divider svg {
  display: block;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer-copyright {
  color: var(--color-text);
  font-size: 0.84rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  transition: color 0.3s ease;
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 3.05rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  opacity: 0.5;
}

.social-link:hover {
  opacity: 1;
  transform: translateY(-2px);
  color: var(--color-accent);
}

.social-link svg {
  height: 30px;
  width: auto;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 2rem;
  }

  .footer-content {
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-social {
    gap: 2rem;
  }

  .social-link svg {
    height: 24px;
  }

  .footer-copyright {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2.5rem 1rem 1.5rem;
  }

  .footer-social {
    gap: 1.5rem;
  }

  .social-link svg {
    height: 20px;
  }
}
</style>
