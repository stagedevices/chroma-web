interface DeviceFrameProps {
  className?: string;
}

const DeviceFrame = ({ className }: DeviceFrameProps) => {
  return (
    <div
      className={[
        "relative mx-auto flex items-end justify-center gap-6 md:gap-10",
        "[perspective:1200px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* iPhone */}
      <div
        className="relative flex-shrink-0 [transform:rotateY(6deg)]"
        style={{ width: "clamp(100px, 18vw, 180px)", aspectRatio: "9 / 19.5" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[20px] border-2 border-slate-300/40 bg-gradient-to-br from-slate-800/30 to-slate-900/50 dark:border-slate-600/40 dark:from-slate-700/30 dark:to-slate-900/60">
          <div className="flex h-full flex-col items-center justify-center p-3 text-center">
            <div className="mb-2 h-1 w-8 rounded-full bg-slate-600/30 dark:bg-slate-400/20" />
            <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">
              Screenshot coming soon
            </span>
          </div>
        </div>
      </div>

      {/* iPad */}
      <div
        className="relative hidden flex-shrink-0 sm:block [transform:rotateY(-2deg)]"
        style={{ width: "clamp(160px, 28vw, 300px)", aspectRatio: "3 / 4" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[16px] border-2 border-slate-300/40 bg-gradient-to-br from-slate-800/30 to-slate-900/50 dark:border-slate-600/40 dark:from-slate-700/30 dark:to-slate-900/60">
          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
            <div className="mb-2 h-1 w-10 rounded-full bg-slate-600/30 dark:bg-slate-400/20" />
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
              Screenshot coming soon
            </span>
          </div>
        </div>
      </div>

      {/* Mac */}
      <div
        className="relative hidden flex-shrink-0 md:block [transform:rotateY(-5deg)]"
        style={{ width: "clamp(200px, 32vw, 360px)", aspectRatio: "16 / 10" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[10px] border-2 border-slate-300/40 bg-gradient-to-br from-slate-800/30 to-slate-900/50 dark:border-slate-600/40 dark:from-slate-700/30 dark:to-slate-900/60">
          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
            <div className="mb-2 h-1 w-12 rounded-full bg-slate-600/30 dark:bg-slate-400/20" />
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Screenshot coming soon
            </span>
          </div>
        </div>
        {/* Stand */}
        <div className="absolute -bottom-3 left-1/2 h-3 w-16 -translate-x-1/2 rounded-b-md border-x-2 border-b-2 border-slate-300/30 bg-slate-400/10 dark:border-slate-600/30" />
      </div>
    </div>
  );
};

export default DeviceFrame;
