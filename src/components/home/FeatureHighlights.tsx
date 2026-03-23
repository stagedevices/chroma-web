import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import { features } from "../../content/features";

const FeatureHighlights = () => {
  return (
    <section id="features">
      <SectionHeading overline="FEATURES" title="Built for the stage" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            chromatic
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
