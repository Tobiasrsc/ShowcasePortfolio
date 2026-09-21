import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "All Work — Tobias Hermans",
};

export default function AllWorkPage() {
  return (
    <main>
      <Nav />
      <section className="flex flex-col items-center gap-10 bg-bg px-6 py-16 md:px-14 md:py-20 lg:px-16">
        <h1 className="text-[32px] font-semibold tracking-[-0.5px] text-ink md:text-[44px]">
          All Work
        </h1>
        <div className="grid w-full max-w-content grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-cardBg shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(0,0,0,0.16)]"
            >
              <div className="h-[200px] w-full" style={{ backgroundColor: p.tint }} />
              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-[21px] font-semibold text-ink">{p.name}</h2>
                  <span className="text-accent transition-transform group-hover:translate-x-0.5">
                    ›
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-secondary">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
