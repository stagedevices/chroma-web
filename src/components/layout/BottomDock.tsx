import { motion } from "framer-motion";
import type { MouseEvent, RefObject } from "react";
import { Link } from "react-router-dom";
import type { NavItem } from "./NavPill";

interface BottomDockProps {
  items: NavItem[];
  activeId?: string;
  onOpenUtilities: (event: MouseEvent<HTMLButtonElement>) => void;
  ellipsisRef: RefObject<HTMLButtonElement>;
}

export default function BottomDock({ items, activeId, onOpenUtilities, ellipsisRef }: BottomDockProps) {
  return (
    <div className="chroma-dock md:hidden">
      <div className="chroma-dock-inner">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const content = (
            <>
              {isActive ? <motion.span layoutId="dock-active" className="chroma-dock-active" /> : null}
              <span className="chroma-dock-icon" aria-hidden>
                {item.icon}
              </span>
            </>
          );

          const className = `chroma-dock-item ${isActive ? "is-active" : ""}`;

          if (item.to) {
            return (
              <Link
                key={item.id}
                to={item.to}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                title={item.label}
                className={className}
              >
                {content}
              </Link>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              title={item.label}
              className={className}
            >
              {content}
            </a>
          );
        })}
        <button
          ref={ellipsisRef}
          type="button"
          onClick={onOpenUtilities}
          className="chroma-dock-item chroma-dock-utility"
          aria-label="Open utilities"
          title="Open utilities"
        >
          <span className="chroma-dock-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="6" cy="12" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="18" cy="12" r="1.6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
