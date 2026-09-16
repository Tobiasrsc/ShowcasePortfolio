"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`relative h-[30px] w-[56px] shrink-0 rounded-full border transition-colors
        border-border bg-black/[0.06] dark:bg-white/[0.09]
        ${className}`}
    >
      {/* sun */}
      <span className="pointer-events-none absolute left-[8px] top-1/2 -translate-y-1/2 text-[13px] leading-none">
        ☀️
      </span>
      {/* moon */}
      <span className="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[11px] leading-none opacity-70">
        🌙
      </span>
      {/* knob */}
      <span
        className={`absolute top-[3px] h-[24px] w-[24px] rounded-full shadow-md transition-all duration-200 ease-out
          ${isDark ? "left-[29px] bg-[#0d0d0d]" : "left-[3px] bg-white"}`}
      />
    </button>
  );
}
