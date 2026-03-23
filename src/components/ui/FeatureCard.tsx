import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  chromatic?: boolean;
}

const FeatureCard = ({
  icon,
  title,
  description,
  chromatic = false,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={[
        "chroma-chip chroma-plusgrid flex h-full flex-col gap-3 rounded-[18px] border border-white/15 bg-white/8 p-5 backdrop-blur-lg",
        "dark:border-slate-700/50 dark:bg-slate-900/50",
        chromatic ? "chroma-chip--chromatic" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/20 bg-white/10 text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-200">
          {icon}
        </span>
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h4>
      </div>
      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
