import type { Section } from '@/types/site';

export const scrollToSection = (section: Section, offset = 80) => {
  const element = document.getElementById(section);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
