import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { privacyConfig } from "../content/privacy.config";

declare const __PRIVACY_LAST_UPDATED__: string;

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy \u00b7 Chroma";
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 prose dark:prose-invert">
      <SectionHeading
        overline="LEGAL"
        title="Privacy Policy"
      />

      {/* Last updated */}
      <p className="text-sm text-slate-500 dark:text-slate-400 -mt-8 mb-8">
        Last updated: {typeof __PRIVACY_LAST_UPDATED__ !== "undefined" ? __PRIVACY_LAST_UPDATED__ : "N/A"}
      </p>

      {/* Summary chips */}
      <div className="flex flex-wrap gap-2 mb-12 not-prose">
        {privacyConfig.summaryChips.map((chip) => (
          <span
            key={chip}
            className="bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {privacyConfig.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {section.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 not-prose">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Questions? Contact{" "}
          <a
            href={`mailto:${privacyConfig.contactEmail}`}
            className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
          >
            {privacyConfig.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Privacy;
