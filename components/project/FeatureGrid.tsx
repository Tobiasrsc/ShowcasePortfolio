import type { Project } from "@/lib/projects";

export default function FeatureGrid({ project }: { project: Project }) {
  return (
    <section className="bg-bg px-6 pb-16 pt-2 md:px-14 md:pb-20 lg:px-16 lg:pb-[100px]">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-9 md:grid-cols-3 md:gap-12">
        {project.features.map((f) => (
          <div key={f.title} className="flex flex-col gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl">
              {f.icon}
            </div>
            <h3 className="text-[19px] font-semibold text-ink md:text-[22px]">
              {f.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-secondary md:text-[15px]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
