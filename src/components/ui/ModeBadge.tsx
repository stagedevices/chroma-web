interface ModeBadgeProps {
  tier: "free" | "pro";
}

const ModeBadge = ({ tier }: ModeBadgeProps) => {
  if (tier === "free") {
    return (
      <span className="inline-flex items-center rounded-full bg-teal-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        Free
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
      Pro
    </span>
  );
};

export default ModeBadge;
