import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import { useTheme } from "../../lib/theme";

const modes = [
  { id: "system", label: "Auto" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
] as const;

const STAGE_DEVICES_LINK = "https://stagedevices.com";

interface UtilitySheetProps {
  open: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
}

const focusableSelector =
  "a[href],button:not([disabled]),[tabindex]:not([tabindex='-1']),select,textarea,input";

export default function UtilitySheet({ open, onClose, returnFocusRef }: UtilitySheetProps) {
  const { mode, setMode } = useTheme();
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const titleId = useMemo(() => `chroma-utility-sheet-${Math.random().toString(36).slice(2)}`, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousActive = document.activeElement as HTMLElement | null;
    const node = sheetRef.current;
    const focusables = node?.querySelectorAll<HTMLElement>(focusableSelector) ?? [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      const restoreTarget = returnFocusRef?.current ?? previousActive;
      restoreTarget?.focus?.();
    };
  }, [onClose, open, returnFocusRef]);

  if (!open) return null;

  return (
    <div
      className="chroma-sheet-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="chroma-sheet"
      >
        <div className="flex items-center justify-between">
          <h2 id={titleId} className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">
            Utilities
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-2 py-1 text-xs text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40 dark:text-slate-300 dark:hover:text-white"
          >
            Close
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Theme</p>
            <div className="mt-3 flex rounded-full border border-white/20 bg-white/70 p-1 text-xs text-slate-700 shadow-sm dark:bg-slate-950/60 dark:text-slate-200">
              {modes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  className={`rounded-full px-3 py-1 transition ${
                    mode === item.id
                      ? "bg-white text-slate-900 shadow dark:bg-slate-800 dark:text-white"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={STAGE_DEVICES_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/20 dark:text-slate-200"
            >
              Stage Devices
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-400"
            >
              Get Chroma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
