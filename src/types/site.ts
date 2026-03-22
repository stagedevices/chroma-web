export type Section = 'hero' | 'demos' | 'features' | 'about' | 'community';

export interface NavItem {
  label: string;
  section: Section;
  offset?: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Demo {
  id: string;
  name: string;
  mode: string;
  description: string;
}