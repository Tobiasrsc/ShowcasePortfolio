"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex w-[260px] shrink-0 flex-col overflow-hidden rounded-[20px] bg-cardBg shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(0,0,0,0.16)] active:translate-y-0 active:shadow-[0_3px_10px_rgba(0,0,0,0.06)] md:w-full snap-center"
    >
      <div
        className="relative h-[170px] w-full md:h-[180px] lg:h-[280px]"
        style={{ backgroundColor: project.tint }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 768px) 50vw, 260px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 lg:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-semibold text-ink lg:text-[21px]">
            {project.name}
          </h3>
          <span className="text-accent transition-transform group-hover:translate-x-0.5">
            ›
          </span>
        </div>
        <p className="text-[13px] leading-relaxed text-secondary lg:text-[15px]">
          {project.desc}
        </p>
        <span className="mt-1 w-fit rounded-full bg-chipBg px-2.5 py-1 text-[11px] text-secondary lg:text-[12px]">
          {project.tag}
        </span>
      </div>
    </Link>
  );
}

export default function Work() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 260 + 16; // card width + gap-4
    const index = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.min(projects.length - 1, Math.max(0, index)));
  };

  return (
    <section
      id="work"
      className="flex flex-col items-center gap-9 bg-bg px-6 py-16 md:gap-11 md:px-14 md:py-[90px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-[32px] font-semibold tracking-[-0.5px] text-ink md:text-[38px] md:tracking-[-1px] lg:text-[44px]">
          Selected Work
        </h2>
        <p className="text-[15px] text-secondary md:text-[16px]">
          A few projects I&apos;m proud of.
        </p>
      </div>

      {/* Mobile: horizontal snap-scroll slider with live dots */}
      <div className="w-full md:hidden">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="no-scrollbar snap-x-mandatory flex gap-4 overflow-x-auto scroll-px-6 px-1 py-1"
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all ${
                i === active ? "h-2 w-2 bg-accent" : "h-1.5 w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet / desktop: static grid */}
      <div className="hidden w-full max-w-content grid-cols-2 gap-6 md:grid">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <Link
        href="/work"
        className="rounded-full border border-border px-6 py-[13px] text-[15px] font-medium text-ink transition-colors hover:bg-black/5 active:bg-black/[0.09] dark:hover:bg-white/[0.08] dark:active:bg-white/[0.14]"
      >
        View All Work  →
      </Link>
    </section>
  );
}
