import { useState } from "react";
import { base } from "../../lib/base";

interface BadgeRowProps {
  className?: string;
}

const BadgeRow = ({ className }: BadgeRowProps) => {
  const [iosImageFailed, setIosImageFailed] = useState(false);
  const [macImageFailed, setMacImageFailed] = useState(false);

  return (
    <div
      className={["flex flex-wrap items-center gap-4", className]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href="#"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="inline-block transition-opacity hover:opacity-80"
      >
        {iosImageFailed ? (
          <span className="inline-flex h-10 items-center rounded-lg border border-slate-300 bg-black px-4 text-sm font-medium text-white dark:border-slate-600">
            App Store
          </span>
        ) : (
          <img
            src={`${base}assets/app-store-badge.svg`}
            alt="Download on the App Store"
            className="h-10"
            onError={() => setIosImageFailed(true)}
          />
        )}
      </a>

      <a
        href="#"
        rel="noopener noreferrer"
        aria-label="Download on the Mac App Store"
        className="inline-block transition-opacity hover:opacity-80"
      >
        {macImageFailed ? (
          <span className="inline-flex h-10 items-center rounded-lg border border-slate-300 bg-black px-4 text-sm font-medium text-white dark:border-slate-600">
            Mac App Store
          </span>
        ) : (
          <img
            src={`${base}assets/mac-app-store-badge.svg`}
            alt="Download on the Mac App Store"
            className="h-10"
            onError={() => setMacImageFailed(true)}
          />
        )}
      </a>
    </div>
  );
};

export default BadgeRow;
