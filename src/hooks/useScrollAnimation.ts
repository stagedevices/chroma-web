import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('animate-slide-up');
          if (once) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [threshold, once]);
};