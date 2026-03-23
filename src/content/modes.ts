export interface ModeDefinition {
  id: string;
  name: string;
  tagline: string;
  tier: "free" | "pro";
  tags: string[];
  description: string;
}

export const modes: ModeDefinition[] = [
  {
    id: "color-shift",
    name: "Color Shift",
    tagline: "Flat Hue Instrument",
    tier: "free",
    tags: ["Tone-Locked", "Directional PWM", "Color Feedback"],
    description:
      "A pure color instrument that maps pitch directly to hue. The entire display becomes a single reactive surface, sweeping through the spectrum in response to what you play.",
  },
  {
    id: "prism-field",
    name: "Prism Field",
    tagline: "Refracted Stage Flow",
    tier: "free",
    tags: ["Facet Field", "Dispersion", "Attack Shards"],
    description:
      "Light refracts through a faceted field that responds to audio energy. Attacks scatter sharp shards of color while sustained tones spread soft dispersion across the surface.",
  },
  {
    id: "shapes",
    name: "Shapes",
    tagline: "Shapes in Depth",
    tier: "pro",
    tags: ["ADSR Shapes", "Decay Field", "Edge Glow"],
    description:
      "Geometric forms emerge and dissolve with ADSR-like envelopes driven by live audio. Each note spawns shapes that glow, stack, and decay into a layered depth field.",
  },
  {
    id: "fractal-caustics",
    name: "Fractal Caustics",
    tagline: "Orbit-Driven Fractal Field",
    tier: "pro",
    tags: ["Julia Core", "Pulse Events", "Palette Banks"],
    description:
      "Julia-set fractals orbit and mutate in response to pitch and attack intensity. Pulse events trigger structural shifts while palette banks provide curated color worlds.",
  },
  {
    id: "mandelbrot-corridor",
    name: "Mandelbrot Corridor",
    tagline: "Classic Mandelbrot Flight",
    tier: "pro",
    tags: ["Boundary Zoom", "Guided POIs", "Stream Variants"],
    description:
      "A guided flight through the Mandelbrot set, with audio driving zoom depth and boundary navigation. Points of interest are curated for visual impact during live performance.",
  },
  {
    id: "splat",
    name: "Splat",
    tagline: "Volumetric Splat Cloud",
    tier: "pro",
    tags: ["Gaussian Splats", "3D Camera", "Audio Nebula"],
    description:
      "Gaussian splat clouds form a volumetric nebula that breathes with audio input. A 3D camera orbits the scene while attacks inject bursts of luminous particle density.",
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Node Graph Builder",
    tier: "pro",
    tags: ["Patch Canvas", "Node Graph", "Live Output"],
    description:
      "Build your own visual pipeline with a node-graph editor. Patch audio analysis nodes into shader parameters, blend modes, and output transforms for fully custom instruments.",
  },
];
