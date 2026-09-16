"use client";

import { useRef, useState } from "react";

const categories = [
  { name: "Languages", tags: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { name: "Frontend", tags: ["React", "Next.js", "Tailwind", "Vue", "React Native"] },
  { name: "Backend", tags: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST"] },
  { name: "Infra & Tools", tags: ["Docker", "AWS", "CI/CD", "Git", "Figma"] },
];

function SkillCard({ category }: { category: (typeof categories)[number] }) {
  return (
    <div className="w-[240px] shrink-0 rounded-[18px] bg-cardBg p-6 md:w-full snap-center">
      <h3 className="mb-3.5 text-[16px] font-medium text-ink">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-chipBg px-2.5 py-1 text-[12px] text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 240 + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.min(categories.length - 1, Math.max(0, index)));
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-9 bg-bgAlt px-6 py-16 md:gap-11 md:px-14 md:py-[90px] lg:px-16"
    >
      <h2 className="text-[32px] font-semibold tracking-[-0.5px] text-ink md:text-[38px] md:tracking-[-1px] lg:text-[44px]">
        Skills
      </h2>

      {/* Mobile slider */}
      <div className="w-full md:hidden">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="no-scrollbar snap-x-mandatory flex gap-4 overflow-x-auto px-1 py-1"
        >
          {categories.map((c) => (
            <SkillCard key={c.name} category={c} />
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {categories.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all ${
                i === active ? "h-2 w-2 bg-accent" : "h-1.5 w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet: 2x2, Desktop: 4 across */}
      <div className="hidden w-full max-w-content grid-cols-2 gap-5 md:grid lg:grid-cols-4">
        {categories.map((c) => (
          <SkillCard key={c.name} category={c} />
        ))}
      </div>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-black/5 active:bg-black/[0.09] dark:hover:bg-white/[0.08] dark:active:bg-white/[0.14]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.42 3.44 10.01 8.21 11.63.6.11.82-.27.82-.59 0-.29-.01-1.25-.02-2.27-3.34.75-4.04-1.44-4.04-1.44-.55-1.43-1.34-1.81-1.34-1.81-1.09-.77.08-.76.08-.76 1.21.09 1.85 1.27 1.85 1.27 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.37-5.47-6.09 0-1.35.47-2.45 1.24-3.31-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.26a11.3 11.3 0 0 1 6.01 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.7.24 2.96.12 3.27.77.86 1.24 1.96 1.24 3.31 0 4.73-2.81 5.77-5.48 6.08.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.39 0 .32.22.71.83.59C20.56 22.3 24 17.71 24 12.29 24 5.5 18.63 0 12 0Z" />
        </svg>
        View on GitHub
      </a>
    </section>
  );
}
