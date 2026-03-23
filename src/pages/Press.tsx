import { useEffect, useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { pressManifest } from "../content/press.manifest";
import { copyText } from "../lib/clipboard/copyText";
import { base } from "../lib/base";

type CopyKey = "oneLiner" | "short" | "extended";

const copyBlocks: { key: CopyKey; label: string }[] = [
  { key: "oneLiner", label: "One-liner" },
  { key: "short", label: "Short" },
  { key: "extended", label: "Extended" },
];

const Press = () => {
  useEffect(() => {
    document.title = "Press \u00b7 Chroma";
  }, []);

  const [copiedKey, setCopiedKey] = useState<CopyKey | null>(null);

  const handleCopy = async (key: CopyKey) => {
    const success = await copyText(pressManifest.copyBlocks[key]);
    if (success) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      {/* Hero */}
      <SectionHeading
        overline="PRESS KIT"
        title="Chroma Press Resources"
        subtitle="Everything you need to cover Chroma. Download assets, copy descriptions, and find key facts below."
      />

      {/* Quick facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
        {pressManifest.quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-baseline gap-3 py-2 border-b border-slate-100 dark:border-slate-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 shrink-0">
              {fact.label}
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {fact.value}
            </span>
          </div>
        ))}
      </div>

      {/* Copy blocks */}
      <SectionHeading
        overline="DESCRIPTIONS"
        title="Copy blocks"
        subtitle="Ready-to-use descriptions for articles and listings."
      />

      <div className="flex flex-col gap-6 mb-20">
        {copyBlocks.map(({ key, label }) => (
          <GlassCard key={key}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {label}
              </h3>
              <button
                onClick={() => handleCopy(key)}
                className="shrink-0 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {copiedKey === key ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pressManifest.copyBlocks[key]}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Media section */}
      <SectionHeading
        overline="MEDIA"
        title="Assets & Screenshots"
        subtitle="Screenshots and branding assets for editorial use."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl bg-gradient-to-br from-chroma-teal/10 to-chroma-indigo/10 h-48 flex items-center justify-center"
          >
            <span className="text-sm text-slate-400 dark:text-slate-500">
              Preview coming soon
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-20">
        <img
          src={`${base}assets/app-icon.png`}
          alt="Chroma app icon"
          className="w-16 h-16 rounded-2xl"
        />
        <a
          href={`${base}assets/app-icon.png`}
          download
          className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
        >
          Download App Icon
        </a>
      </div>

      {/* Usage rules */}
      <SectionHeading
        overline="GUIDELINES"
        title="Usage Rules"
      />

      <ul className="list-disc list-inside space-y-2 mb-20 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {pressManifest.usageRules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>

      {/* Contact */}
      <SectionHeading
        overline="CONTACT"
        title="Get in touch"
      />

      <p className="text-slate-600 dark:text-slate-400">
        For press inquiries, contact{" "}
        <a
          href={`mailto:${pressManifest.contactEmail}`}
          className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
        >
          {pressManifest.contactEmail}
        </a>
      </p>
    </section>
  );
};

export default Press;
