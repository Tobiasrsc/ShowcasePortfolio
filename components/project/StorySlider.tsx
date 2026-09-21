"use client";

import { useState } from "react";
import type { ProjectPhase } from "@/lib/projects";
import PhaseModal from "./PhaseModal";

function Slide({ phase, onOpen }: { phase: ProjectPhase; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-[86%] shrink-0 flex-col items-center gap-6 rounded-[24px] bg-cardBg p-6 text-left transition-transform hover:-translate-y-0.5 active:translate-y-0 md:w-[68%] md:flex-row md:gap-10 md:p-10 lg:w-[calc(50%-12px)]"
    >
      <div className="flex h-[170px] w-full items-center justify-center rounded-[18px] bg-chipBg md:h-[220px] md:w-[300px] md:shrink-0">
        <span className="text-[11px] text-secondary">PHOTO</span>
      </div>
      <div className="flex w-full flex-col gap-2.5 md:gap-3">
        <h3 className="text-[19px] font-semibold text-ink md:text-[24px]">
          {phase.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-secondary md:text-[15px]">
          {phase.desc}
        </p>
      </div>
    </button>
  );
}

export default function StorySlider({ phases }: { phases: ProjectPhase[] }) {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = phases.length;

  const go = (next: number) => {
    setIndex(((next % count) + count) % count); // wrap around both directions
  };

  const goOpen = (next: number) => {
    setOpenIndex(((next % count) + count) % count);
  };

  return (
    <section className="bg-bgAlt px-6 py-16 md:px-14 md:py-20 lg:px-16 lg:py-[100px]">
      <div className="relative mx-auto max-w-content">
        <div className="overflow-hidden rounded-[24px]">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out [--step:calc(86%+16px)] md:gap-5 md:[--step:calc(68%+20px)] lg:gap-6 lg:[--step:calc(50%+12px)]"
            style={{ transform: `translateX(calc(var(--step) * -${index}))` }}
          >
            {phases.map((phase, i) => (
              <Slide key={phase.title} phase={phase} onOpen={() => setOpenIndex(i)} />
            ))}
          </div>
        </div>

        {/* Prev / next arrows — fully functional, wrap around at the ends */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(index - 1)}
          className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg text-ink shadow-md transition-transform hover:scale-105 active:scale-95 md:h-[52px] md:w-[52px]"
        >
          <span className="text-lg font-semibold">‹</span>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(index + 1)}
          className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-bg text-ink shadow-md transition-transform hover:scale-105 active:scale-95 md:h-[52px] md:w-[52px]"
        >
          <span className="text-lg font-semibold">›</span>
        </button>
      </div>

      {/* Dots — reflect the real current slide, and are clickable */}
      <div className="mt-6 flex justify-center gap-2">
        {phases.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`rounded-full transition-all ${
              i === index ? "h-2 w-2 bg-accent" : "h-1.5 w-1.5 bg-border"
            }`}
          />
        ))}
      </div>

      {openIndex !== null && (
        <PhaseModal
          phase={phases[openIndex]}
          index={openIndex}
          count={count}
          onClose={() => setOpenIndex(null)}
          onPrev={() => goOpen(openIndex - 1)}
          onNext={() => goOpen(openIndex + 1)}
        />
      )}
    </section>
  );
}
