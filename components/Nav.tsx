"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = ["About", "Work", "Skills", "Contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-bg px-5 py-4 md:px-10 md:py-5">
        <span className="text-[16px] font-semibold text-ink">Tobias Hermans</span>

        {/* Desktop links — hidden below md */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[14px] text-ink transition-opacity hover:opacity-60"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-[9px] text-[13px] font-medium text-white transition-all hover:brightness-110 active:brightness-90"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile hamburger — hidden md and up */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px] p-1 md:hidden"
        >
          <span className="h-[2px] w-[22px] rounded bg-ink" />
          <span className="h-[2px] w-[22px] rounded bg-ink" />
          <span className="h-[2px] w-[22px] rounded bg-ink" />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  );
}
