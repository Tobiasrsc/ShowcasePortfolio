"use client";

import { useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: string[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  // Lock background scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
      {/* Nav row — X sits exactly where the hamburger was */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <span className="text-[16px] font-semibold text-ink">Tobias Hermans</span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="p-1 text-ink"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Content fills the rest of the screen, centered */}
      <div className="flex flex-1 flex-col items-center justify-center gap-9 px-8">
        <div className="flex flex-col items-center gap-7">
          {links.map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              onClick={onClose}
              className="text-[28px] font-medium text-ink"
            >
              {label}
            </Link>
          ))}
        </div>

        <ThemeToggle />

        <Link
          href="/#contact"
          onClick={onClose}
          className="w-[280px] rounded-full bg-accent py-4 text-center text-[16px] font-medium text-white transition-all hover:brightness-110 active:brightness-90"
        >
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
