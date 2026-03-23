import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";

const supportEmail = "support@stagedevices.com";

const faqs = [
  {
    question: "Chroma doesn't respond to audio",
    answer:
      "Open Settings → Privacy & Security → Microphone and confirm Chroma has permission. If you're using an external interface, make sure it's selected as the input device in your system Sound settings before launching Chroma.",
  },
  {
    question: "The visuals stutter or drop frames",
    answer:
      "Close other GPU-intensive apps and check that Low Power Mode is off. On iPad, make sure the device isn't thermal-throttling — a hot device will reduce GPU clocks. You can also try lowering the quality tier in Chroma's settings.",
  },
  {
    question: "How do I output to a projector or external display?",
    answer:
      "Connect via HDMI or USB-C adapter. Chroma automatically detects external displays and mirrors the visual output at native resolution. On iPad, the main screen shows controls while the external display shows clean, full-screen visuals.",
  },
  {
    question: "Can I use Chroma with a DJ setup?",
    answer:
      "Yes. Route your mixer's main or booth output into your device's audio input (via a USB audio interface or headphone-jack cable). Chroma reacts to any live audio signal — it doesn't matter where it comes from.",
  },
  {
    question: "How do I restore my Pro purchase?",
    answer:
      "Open Chroma, go to Settings → Chroma Pro, and tap Restore Purchases. Make sure you're signed into the same Apple ID that made the original purchase. Purchases sync automatically across all your devices.",
  },
  {
    question: "Does Chroma work offline?",
    answer:
      "Entirely. Chroma makes no network requests during use. Audio processing, rendering, and preset storage all happen on-device. The only network activity is Apple's standard App Store purchase validation.",
  },
];

const Support = () => {
  useEffect(() => {
    document.title = "Support · Chroma";
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        overline="SUPPORT"
        title="Get help"
        subtitle="Common questions and how to reach us."
      />

      {/* FAQ */}
      <div className="space-y-4 mb-16">
        {faqs.map((faq) => (
          <GlassCard key={faq.question}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {faq.answer}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Contact */}
      <SectionHeading
        overline="STILL STUCK?"
        title="Contact us"
      />

      <GlassCard className="mb-16">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          If your question isn't covered above, email us at{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
          >
            {supportEmail}
          </a>
          . Include your device model, iOS/macOS version, and Chroma version
          (found in Settings → About) so we can help faster.
        </p>
      </GlassCard>

      {/* System requirements */}
      <SectionHeading
        overline="REQUIREMENTS"
        title="System requirements"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GlassCard>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            iPhone &amp; iPad
          </h3>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li>iOS / iPadOS 17.0 or later</li>
            <li>Microphone access for audio reactivity</li>
            <li>Metal-capable GPU (all modern devices)</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Mac
          </h3>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li>macOS 14.0 Sonoma or later</li>
            <li>Apple Silicon or Intel with Metal support</li>
            <li>Microphone or audio input device</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
};

export default Support;
