import React, { useState, useEffect } from "react";
import "./goUpButton.css";

function GoUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`go-up-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
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
          fill="#ffffff"
        />
      </svg>
    </button>
  );
}

export default GoUpButton;
