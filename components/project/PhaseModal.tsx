"use client";

import { useEffect } from "react";
import type { ProjectPhase } from "@/lib/projects";

export default function PhaseModal({
  phase,
  index,
  count,
  onClose,
  onPrev,
  onNext,
}: {
  phase: ProjectPhase;
  index: number;
  count: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-[560px] flex-col gap-6 rounded-[24px] bg-cardBg p-6 shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg text-ink transition-transform hover:scale-105 active:scale-95 md:right-6 md:top-6"
        >
          <span className="text-base font-semibold">✕</span>
        </button>

        <div className="flex h-[180px] w-full items-center justify-center rounded-[18px] bg-chipBg md:h-[240px]">
          <span className="text-[11px] text-secondary">PHOTO</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[13px] font-medium text-accent">
            Card {index + 1} of {count}
          </span>
          <h3 className="text-[22px] font-semibold text-ink md:text-[28px]">
            {phase.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-secondary md:text-[16px]">
            {phase.detail}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-full border border-border px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-black/5 active:bg-black/[0.09] dark:hover:bg-white/[0.08] dark:active:bg-white/[0.14]"
          >
            ‹ Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            className="rounded-full border border-border px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-black/5 active:bg-black/[0.09] dark:hover:bg-white/[0.08] dark:active:bg-white/[0.14]"
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}
