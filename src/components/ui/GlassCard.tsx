import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  plusgrid?: boolean;
}

const GlassCard = ({ children, className, plusgrid = false }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl",
        "dark:border-slate-700/40 dark:bg-slate-900/50",
        "light:border-slate-200/60 light:bg-white/70",
        plusgrid ? "chroma-plusgrid" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
