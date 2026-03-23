import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import ModeBadge from "../components/ui/ModeBadge";
import { modes } from "../content/modes";

const Modes = () => {
  useEffect(() => {
    document.title = "Modes \u00b7 Chroma";
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        overline="VISUAL MODES"
        title="7 ways to see sound"
        subtitle="Each mode is a distinct audio-reactive instrument, transforming pitch, attacks, and energy into real-time visuals through Metal shaders."
      />

      <div className="flex flex-col gap-12">
        {modes.map((mode, index) => (
          <GlassCard key={mode.id}>
            <div
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {mode.name}
                  </h3>
                  <ModeBadge tier={mode.tier} />
                </div>

                <p className="text-slate-500 dark:text-slate-400 italic">
                  {mode.tagline}
                </p>

                <div className="flex flex-wrap gap-2">
                  {mode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-xs text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {mode.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-xl bg-gradient-to-br from-chroma-teal/10 to-chroma-indigo/10 h-48 flex items-center justify-center">
                  <span className="text-sm text-slate-400 dark:text-slate-500">
                    Preview coming soon
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Modes;
