import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getNextProject } from "@/lib/projects";

export default function ProjectFooterNav({ project }: { project: Project }) {
  const nextProject = getNextProject(project.slug);

  return (
    <footer className="bg-bg px-6 pb-8 pt-4 md:px-14 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col gap-6 border-t border-border py-10 md:flex-row md:items-center md:justify-between">
        <Link href={`/work/${nextProject.slug}`} className="flex flex-col gap-2">
          <span className="text-[13px] text-secondary md:text-[14px]">
            This Project
          </span>
          <span className="text-[24px] font-semibold tracking-[-0.5px] text-ink transition-opacity hover:opacity-70 md:text-[32px]">
            {nextProject.name} →
          </span>
        </Link>
        <Link
          href="/#work"
          className="w-fit rounded-full border border-border px-6 py-[13px] text-[15px] font-medium text-ink transition-colors hover:bg-black/5 active:bg-black/[0.09] dark:hover:bg-white/[0.08] dark:active:bg-white/[0.14]"
        >
          All Projects
        </Link>
      </div>

      <div className="mx-auto flex max-w-content flex-col items-center gap-3 pt-2 text-center md:flex-row md:justify-between md:text-left">
        <span className="text-[11px] text-secondary md:text-[12px]">
          Copyright © 2026 Tobias Hermans. All rights reserved.
        </span>
        <div className="flex gap-4 md:gap-5">
          {["GitHub", "LinkedIn", "X"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[11px] text-secondary transition-opacity hover:opacity-70 md:text-[12px]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
