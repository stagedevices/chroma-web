import type { ReactNode } from "react";

export interface FeatureDefinition {
  title: string;
  description: string;
  icon: ReactNode;
}

export const features: FeatureDefinition[] = [
  {
    title: "Audio-Reactive",
    description:
      "Pitch detection, attack tracking, and band energy analysis drive every pixel in real time. Plug in a mic or line input and the visuals respond instantly to what you play.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M2 12h2l3-9 4 18 4-18 3 9h2" />
      </svg>
    ),
  },
  {
    title: "Stage-Ready Output",
    description:
      "Full-screen visuals with zero chrome, external display support, and recording/export built in. Designed for concerts, installations, and live streams.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Metal-Powered",
    description:
      "All rendering runs on Apple GPU hardware through Metal shaders. Quality-tier scaling ensures smooth performance from iPhone to Mac Studio.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "7 Visual Modes",
    description:
      "From flat color instruments to fractal flights and volumetric splat clouds. Each mode is a distinct visual world with its own parameter set and behavior.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];
