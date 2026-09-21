import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import ProjectHero from "@/components/project/ProjectHero";
import FeatureGrid from "@/components/project/FeatureGrid";
import ImageBreak from "@/components/project/ImageBreak";
import StorySlider from "@/components/project/StorySlider";
import ProjectFooterNav from "@/components/project/ProjectFooterNav";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Tobias Hermans`,
    description: project.tagline,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main>
      <Nav />
      <ProjectHero project={project} />
      <FeatureGrid project={project} />
      <ImageBreak />
      <StorySlider phases={project.phases} />
      <ProjectFooterNav project={project} />
    </main>
  );
}
