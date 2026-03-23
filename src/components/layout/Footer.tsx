import { Link } from "react-router-dom";
import { base } from "../../lib/base";

const STAGE_DEVICES_LINK = "https://stagedevices.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="chroma-pagegrid border-t border-white/10">
      <div className="mx-auto max-w-6xl space-y-12 px-6 pb-16 pt-14">
        {/* CTA section */}
        <div className="rounded-2xl border border-white/10 bg-white/80 p-8 shadow-sm backdrop-blur-lg dark:bg-slate-950/60">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Get Chroma</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                A live audio-reactive visual instrument for concerts, performances, and capture workflows.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer noopener">
                <img
                  src={`${base}assets/app-store-badge.svg`}
                  alt="Download on the App Store"
                  className="h-12"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "inline-flex";
                  }}
                />
                <span
                  className="hidden items-center rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-400"
                >
                  App Store
                </span>
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer noopener">
                <img
                  src={`${base}assets/mac-app-store-badge.svg`}
                  alt="Download on the Mac App Store"
                  className="h-12"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "inline-flex";
                  }}
                />
                <span
                  className="hidden items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/20 dark:text-slate-200"
                >
                  Mac App Store
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="chroma-footer-divider" aria-hidden />

        {/* Link grid */}
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link className="transition hover:text-slate-900 dark:hover:text-white" to="/modes">
                  Modes
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-slate-900 dark:hover:text-white" to="/pro">
                  Pro
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link className="transition hover:text-slate-900 dark:hover:text-white" to="/about">
                  About
                </Link>
              </li>
              <li>
                <a
                  className="transition hover:text-slate-900 dark:hover:text-white"
                  href={STAGE_DEVICES_LINK}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Stage Devices
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link className="transition hover:text-slate-900 dark:hover:text-white" to="/privacy">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400">&copy; {year} Stage Devices</div>
      </div>
    </footer>
  );
}
