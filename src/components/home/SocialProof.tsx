import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const SocialProof = () => {
  return (
    <section>
      <SectionHeading overline="TESTIMONIALS" title="What performers are saying" />

      <GlassCard>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Testimonials coming soon. We're collecting feedback from early users.
        </p>
      </GlassCard>
    </section>
  );
};

export default SocialProof;
