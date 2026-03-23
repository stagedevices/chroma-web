import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";

const About = () => {
  useEffect(() => {
    document.title = "About \u00b7 Chroma";
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading
        overline="ABOUT"
        title="Stage Devices"
        subtitle="Independent engineering for live performance."
      />

      {/* Brand story */}
      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl">
        Stage Devices is an independent engineering practice building instruments
        for live performance. We make tools for performers who need precision,
        reliability, and beauty on stage.
      </p>

      {/* Philosophy */}
      <GlassCard className="mb-16">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Our approach
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          We build instruments, not toys. Every product in the Stage Devices
          catalog is designed for real-world stage use: zero-latency response,
          rock-solid reliability, and visuals that hold up on a 20-foot LED wall.
          Our stack is entirely Apple-native &mdash; Metal, AVAudioEngine,
          Accelerate, SwiftUI &mdash; with zero third-party dependencies. This
          means fewer points of failure, tighter integration with the hardware,
          and updates that ship the day new OS features land. We believe the best
          creative tools disappear during use, letting the performer focus on
          what matters: the music.
        </p>
      </GlassCard>

      {/* Other products */}
      <SectionHeading
        overline="ALSO BY STAGE DEVICES"
        title="Other products"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <GlassCard>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Tenney
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            A tuning theory workbench
          </p>
          <a
            href="https://tenneyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            tenneyapp.com
          </a>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            SyncTimer
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Ensemble synchronization
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            Coming soon
          </a>
        </GlassCard>
      </div>

      {/* Contact */}
      <SectionHeading
        overline="CONTACT"
        title="Get in touch"
      />

      <p className="text-slate-600 dark:text-slate-400">
        For general inquiries, reach out at{" "}
        <a
          href="mailto:legal@stagedevices.com"
          className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
        >
          legal@stagedevices.com
        </a>
      </p>
    </section>
  );
};

export default About;
