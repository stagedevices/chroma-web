interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  overline,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={[alignClass, "mb-12 md:mb-16 max-w-3xl", className]
        .filter(Boolean)
        .join(" ")}
    >
      {overline && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-teal-500 dark:text-teal-400">
          {overline}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
