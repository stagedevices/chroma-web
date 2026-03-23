import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import FeatureHighlights from "../components/home/FeatureHighlights";
import SocialProof from "../components/home/SocialProof";
import BadgeRow from "../components/ui/BadgeRow";
import GlassCard from "../components/ui/GlassCard";

const Home = () => {
  useEffect(() => {
    document.title = "Chroma";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <HeroSection />

      <div className="mt-24">
        <FeatureHighlights />
      </div>

      <div className="mt-24">
        <SocialProof />
      </div>

      <div className="mt-24 pb-24">
        <GlassCard className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Get Chroma
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Available now on iOS and Mac.
          </p>
          <BadgeRow className="mt-6 justify-center" />
        </GlassCard>
      </div>
    </div>
  );
};

export default Home;
