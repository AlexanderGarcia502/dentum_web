import { useState, useEffect } from "react";

export function useScrollHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true); // At the top of the page
      } else {
        setIsVisible(false); // Scrolled down from top
      }
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return isVisible;
}
