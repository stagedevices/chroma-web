import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import BadgeRow from "../components/ui/BadgeRow";

const proFeatures = [
  {
    title: "5 Extra Modes",
    description:
      "Unlock Shapes, Fractal Caustics, Mandelbrot Corridor, Splat, and Custom beyond the two free modes.",
  },
  {
    title: "Recording & Export",
    description:
      "Capture your visuals in high quality. Record sessions and export video files directly from the app.",
  },
  {
    title: "External Display",
    description:
      "Route full-screen visuals to a projector or external monitor for stage-ready output.",
  },
  {
    title: "Unlimited Presets",
    description:
      "Save and recall as many presets as you need. Build a library tuned to your instruments and venues.",
  },
  {
    title: "Mode Morphing",
    description:
      "Smoothly transition between visual modes during a performance for seamless set flow.",
  },
  {
    title: "Custom Node Graph",
    description:
      "Build your own visual pipeline by patching audio analysis nodes into shader parameters.",
  },
];

const comparisonRows = [
  { feature: "Modes", free: "2", pro: "7" },
  { feature: "Recording", free: "\u2717", pro: "\u2713" },
  { feature: "External Display", free: "\u2717", pro: "\u2713" },
  { feature: "Presets", free: "3", pro: "Unlimited" },
  { feature: "Node Graph", free: "\u2717", pro: "\u2713" },
];

const Pro = () => {
  useEffect(() => {
    document.title = "Pro \u00b7 Chroma";
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        overline="CHROMA PRO"
        title="Unlock the full instrument"
        subtitle="Two modes are free forever. Pro unlocks the complete toolset."
      />

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {proFeatures.map((feature) => (
          <GlassCard key={feature.title}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
              <span className="text-lg text-teal-500">&#9670;</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Comparison table */}
      <SectionHeading
        overline="COMPARE"
        title="Free vs Pro"
        align="center"
        className="mx-auto"
      />

      <div className="mb-20">
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Feature
                  </th>
                  <th className="pb-4 text-sm font-semibold text-slate-500 dark:text-slate-400 text-center">
                    Free
                  </th>
                  <th className="pb-4 text-sm font-semibold text-center">
                    <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
                      Pro
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-slate-100 dark:border-slate-800 last:border-0"
                  >
                    <td className="py-4 text-sm text-slate-700 dark:text-slate-300">
                      {row.feature}
                    </td>
                    <td className="py-4 text-sm text-slate-500 dark:text-slate-400 text-center">
                      {row.free}
                    </td>
                    <td className="py-4 text-sm text-slate-900 dark:text-white font-medium text-center">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      {/* Pricing cards */}
      <SectionHeading
        overline="PRICING"
        title="Choose your plan"
        align="center"
        className="mx-auto"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
        <GlassCard>
          <div className="text-center space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Monthly
            </h3>
            <div className="text-4xl font-black text-slate-900 dark:text-white">
              $4.99
              <span className="text-base font-normal text-slate-500 dark:text-slate-400">
                {" "}
                / month
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Cancel anytime
            </p>
          </div>
        </GlassCard>

        <GlassCard className="ring-2 ring-teal-500/50">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Annual
              </h3>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Best Value
              </span>
            </div>
            <div className="text-4xl font-black text-slate-900 dark:text-white">
              $34.99
              <span className="text-base font-normal text-slate-500 dark:text-slate-400">
                {" "}
                / year
              </span>
            </div>
            <span className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
              1 week free trial
            </span>
          </div>
        </GlassCard>
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center">
        <BadgeRow />
      </div>
    </section>
  );
};

export default Pro;
