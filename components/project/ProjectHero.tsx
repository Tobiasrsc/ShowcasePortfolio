import type { Project } from "@/lib/projects";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="flex flex-col items-center gap-5 bg-bg px-6 py-14 text-center md:gap-5 md:px-14 md:py-20 lg:px-16 lg:py-[100px]">
      <span className="text-[15px] font-medium text-accent md:text-[17px]">
        {project.category}
      </span>

      <h1 className="max-w-[900px] text-[40px] font-bold leading-[1.06] tracking-[-1px] text-ink md:text-[56px] md:tracking-[-1.5px] lg:text-[80px] lg:tracking-[-2px]">
        {project.name}.
      </h1>

      <p className="max-w-[300px] text-[16px] leading-relaxed text-secondary md:max-w-[480px] md:text-[19px] lg:max-w-[680px] lg:text-[24px]">
        {project.tagline}
      </p>

      <div className="mt-2 grid grid-cols-2 gap-x-7 gap-y-5 md:flex md:flex-row md:gap-16">
        {project.meta.map((m) => (
          <div key={m.label} className="flex flex-col gap-1.5 text-left">
            <span className="text-[13px] text-secondary">{m.label}</span>
            <span className="text-[15px] font-medium text-ink">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Hero image placeholder — swap for a real screenshot */}
      <div className="mt-4 flex h-[190px] w-full max-w-[342px] items-center justify-center rounded-[20px] bg-[#0d0d10] md:h-[360px] md:max-w-[714px] lg:h-[500px] lg:max-w-[1280px]">
        <span className="text-[11px] tracking-wide text-white/40 md:text-[13px]">
          PROJECT HERO IMAGE / SCREENSHOT
        </span>
      </div>
    </section>
  );
}
