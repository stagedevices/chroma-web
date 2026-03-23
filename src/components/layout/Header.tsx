import { useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { useCondensedNav } from "../../hooks/useCondensedNav";
import { useTheme } from "../../lib/theme";
import { base } from "../../lib/base";
import BottomDock from "./BottomDock";
import NavPill from "./NavPill";
import type { NavItem } from "./NavPill";
import UtilitySheet from "./UtilitySheet";

export default function Header() {
  const location = useLocation();
  const condensed = useCondensedNav({ threshold: 140, hysteresis: 36 });
  const [sheetOpen, setSheetOpen] = useState(false);
  const [iconError, setIconError] = useState(false);
  const { mode, setMode } = useTheme();
  const ellipsisRef = useRef<HTMLButtonElement>(null);

  const activeId = useMemo(() => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/modes")) return "modes";
    if (path.startsWith("/pro")) return "pro";
    if (path.startsWith("/press")) return "press";
    if (path.startsWith("/about")) return "about";
    return undefined;
  }, [location.pathname]);

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        id: "home",
        label: "Home",
        to: "/",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 11.5l8-6.5 8 6.5v7a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
          </svg>
        ),
      },
      {
        id: "modes",
        label: "Modes",
        to: "/modes",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
          </svg>
        ),
      },
      {
        id: "pro",
        label: "Pro",
        to: "/pro",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 4.8 5.3.8-3.9 3.8.9 5.3-4.7-2.5-4.7 2.5.9-5.3-3.9-3.8 5.3-.8z" />
          </svg>
        ),
      },
      {
        id: "press",
        label: "Press",
        to: "/press",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 9h8M7 12h8M7 15h5" />
          </svg>
        ),
      },
      {
        id: "about",
        label: "About",
        to: "/about",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v0M12 11v5" />
          </svg>
        ),
      },
    ],
    [],
  );

  const handleOpenUtilities = (event: MouseEvent<HTMLButtonElement>) => {
    ellipsisRef.current = event.currentTarget;
    setSheetOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto hidden max-w-6xl items-center px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3">
            {!iconError ? (
              <img
                src={`${base}assets/app-icon.png`}
                alt="Chroma"
                className="h-10 w-10 rounded-[10px]"
                onError={() => setIconError(true)}
              />
            ) : null}
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              chroma
            </span>
          </div>
          <NavPill items={navItems} activeId={activeId} condensed={condensed} />
          <div className="flex items-center justify-end gap-3">
            {condensed ? (
              <button
                ref={ellipsisRef}
                type="button"
                onClick={handleOpenUtilities}
                className="chroma-pill-item chroma-pill-utility"
                aria-label="Open utilities"
                title="Open utilities"
              >
                <span className="chroma-pill-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="12" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="18" cy="12" r="1.6" />
                  </svg>
                </span>
              </button>
            ) : (
              <div className="glass-pill flex rounded-full p-1 text-[11px] text-slate-700 dark:text-slate-200">
                {[
                  { id: "system", label: "Auto" },
                  { id: "light", label: "Light" },
                  { id: "dark", label: "Dark" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMode(item.id)}
                    className={`rounded-full px-3 py-1 transition ${
                      mode === item.id
                        ? "bg-white text-slate-900 shadow dark:bg-slate-800 dark:text-white"
                        : "opacity-70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      <BottomDock
        items={navItems}
        activeId={activeId}
        onOpenUtilities={handleOpenUtilities}
        ellipsisRef={ellipsisRef}
      />
      <UtilitySheet open={sheetOpen} onClose={() => setSheetOpen(false)} returnFocusRef={ellipsisRef} />
    </>
  );
}
