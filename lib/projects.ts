export interface ProjectPhase {
  title: string;
  desc: string;
  detail: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  tint: string;
  image: string;
  // Detail page content
  category: string;
  tagline: string;
  meta: { label: string; value: string }[];
  features: ProjectFeature[];
  phases: ProjectPhase[];
}

export const projects: Project[] = [
  {
    slug: "joint-forces-legal",
    name: "Joint Forces Legal",
    tag: "Next.js · Tailwind",
    desc: "Corporate site for a Dutch law firm — practice areas, team profiles, and a bilingual EN/NL experience.",
    tint: "#e5f0ee",
    image: "/images/joint-forces-legal.png",
    category: "Case Study",
    tagline:
      "A bilingual corporate site for a Dutch law firm, rebuilt for clarity and trust.",
    meta: [
      { label: "Client", value: "Joint Forces Legal" },
      { label: "Role", value: "Design & Development" },
      { label: "Timeline", value: "6 weeks" },
      { label: "Stack", value: "Next.js, Tailwind" },
    ],
    features: [
      {
        icon: "🎯",
        title: "The Challenge",
        desc: "An outdated site that undersold two decades of legal expertise, with no clear path for international clients to reach the right practice area.",
      },
      {
        icon: "🧭",
        title: "The Approach",
        desc: "A bilingual (NL/EN) information architecture built around practice areas and people, with a calm, editorial visual language that reads as established rather than flashy.",
      },
      {
        icon: "✅",
        title: "The Result",
        desc: "A site that reflects the firm's standing — clearer navigation, faster time-to-contact, and a design system the team can extend themselves.",
      },
    ],
    phases: [
      {
        title: "Kickoff & discovery",
        desc: "Mapping every practice area and interviewing the partners.",
        detail:
          "Sat down with each partner to understand how clients actually find their way to the firm today — referral, search, or word of mouth — and where the old site lost them. That input became a map of every practice area, ranked by how international clients search for it.",
      },
      {
        title: "Content structure",
        desc: "Building the full bilingual NL/EN sitemap.",
        detail:
          "Every practice area and profile page was drafted in both Dutch and English from day one, rather than translated after the fact. That kept the two language trees structurally identical, so switching languages never drops a visitor onto a different page.",
      },
      {
        title: "Visual design",
        desc: "An editorial type system that reads calm and trustworthy.",
        detail:
          "Leaned on a restrained type scale, generous whitespace, and a muted palette borrowed from print legal publications — the goal was a site that reads as established rather than trying to look like a startup.",
      },
      {
        title: "Launch",
        desc: "Handoff and training the team on the new CMS.",
        detail:
          "Ran two training sessions with the office manager so the team could publish new profiles and case updates themselves, then stayed on for two weeks post-launch to fix anything that came up under real traffic.",
      },
    ],
  },
  {
    slug: "owow-atlas",
    name: "OWOW Atlas",
    tag: "React · GSAP",
    desc: "Internal animation library — GSAP and Reanimated snippets, browsable and ready to copy into any project.",
    tint: "#f2eae0",
    image: "/images/owow-atlas.png",
    category: "Internal Tool",
    tagline:
      "A browsable library of production-ready animation snippets for the team.",
    meta: [
      { label: "Client", value: "OWOW" },
      { label: "Role", value: "Design & Development" },
      { label: "Timeline", value: "3 weeks" },
      { label: "Stack", value: "React, GSAP" },
    ],
    features: [
      {
        icon: "🧩",
        title: "The Challenge",
        desc: "Animation snippets scattered across old projects, redone from scratch every time a new one was needed.",
      },
      {
        icon: "📚",
        title: "The Approach",
        desc: "A single searchable library, categorized by type, each with a live preview and a one-click copy of the code.",
      },
      {
        icon: "⚡",
        title: "The Result",
        desc: "Faster handoff between design and engineering, and a consistent motion language across every OWOW project.",
      },
    ],
    phases: [
      {
        title: "Audit",
        desc: "Collecting every animation used across past projects.",
        detail:
          "Went through a year of shipped projects pulling out every GSAP timeline and Reanimated snippet that was reused more than once — over 40 in total, scattered across a dozen repos with no shared naming or source of truth.",
      },
      {
        title: "System",
        desc: "Grouping snippets into a consistent category structure.",
        detail:
          "Sorted everything into categories like entrance, scroll-triggered, and gesture-driven motion, then rewrote each snippet against a shared set of easing and duration tokens so they'd feel consistent side by side.",
      },
      {
        title: "Build",
        desc: "A live preview + copy-code component for each snippet.",
        detail:
          "Each entry renders its own live, interactive preview next to the exact code block, with a one-click copy button — no more opening a past project just to find how a transition was done.",
      },
      {
        title: "Rollout",
        desc: "Adopted as the default reference across the team.",
        detail:
          "Shared it in a team walkthrough and linked it from the onboarding docs. New motion work now starts by checking the library first, which has already cut down on near-duplicate animations across projects.",
      },
    ],
  },
  {
    slug: "renewers-ai",
    name: "Renewers.ai",
    tag: "Next.js · AI",
    desc: "AI-powered recruitment platform — campaigns, applicant tracking and WhatsApp follow-up in one system.",
    tint: "#e6e9f2",
    image: "/images/renewers.png",
    category: "Product",
    tagline: "An AI-powered recruitment platform, from campaign to hire.",
    meta: [
      { label: "Client", value: "Renewers" },
      { label: "Role", value: "Full-Stack Development" },
      { label: "Timeline", value: "8 weeks" },
      { label: "Stack", value: "Next.js, AI" },
    ],
    features: [
      {
        icon: "📉",
        title: "The Challenge",
        desc: "SMBs losing candidates to larger companies with bigger recruitment budgets and dedicated teams.",
      },
      {
        icon: "🤖",
        title: "The Approach",
        desc: "One system combining AI-generated campaigns, an applicant tracker, and automatic WhatsApp follow-up.",
      },
      {
        icon: "📈",
        title: "The Result",
        desc: "A predictable pipeline of candidates for teams without a dedicated recruiter.",
      },
    ],
    phases: [
      {
        title: "Research",
        desc: "Interviewing SMB hiring managers about their pain points.",
        detail:
          "Talked to a dozen SMB owners who handle hiring themselves. The pattern was consistent: job posts written in a rush, candidates going quiet after the first message, and no time to chase them across email and WhatsApp.",
      },
      {
        title: "Core flow",
        desc: "Designing the campaign-to-candidate pipeline.",
        detail:
          "Mapped one continuous flow from campaign brief to hire — generate the posting, publish it, track applicants, and move them through stages — so a hiring manager never has to leave the tool to piece things together.",
      },
      {
        title: "AI integration",
        desc: "Building the content and matching engine.",
        detail:
          "Built the model that drafts campaign copy from a short brief and ranks incoming applicants against the role, plus the WhatsApp follow-up flow that nudges candidates who've gone quiet.",
      },
      {
        title: "Launch",
        desc: "Onboarding the first cohort of companies.",
        detail:
          "Onboarded ten SMBs by hand, sitting in on their first campaign to catch friction points in real time. Their feedback shaped the second round of the matching engine before the wider rollout.",
      },
    ],
  },
  {
    slug: "owow-dashboard",
    name: "OWOW Dashboard",
    tag: "React · Vercel",
    desc: "Client-facing project dashboard — budgets, updates and file approvals in one clean workspace.",
    tint: "#e5f0e6",
    image: "/images/owow-dashboard.png",
    category: "Product",
    tagline: "A calm home base for clients to track their project.",
    meta: [
      { label: "Client", value: "OWOW" },
      { label: "Role", value: "Design & Development" },
      { label: "Timeline", value: "4 weeks" },
      { label: "Stack", value: "React, Vercel" },
    ],
    features: [
      {
        icon: "📬",
        title: "The Challenge",
        desc: "Project updates scattered across email and Slack, hard for clients to track.",
      },
      {
        icon: "🗂️",
        title: "The Approach",
        desc: "One dashboard for budgets, updates and file approvals, kept intentionally simple.",
      },
      {
        icon: "🙌",
        title: "The Result",
        desc: "Fewer status-update calls, and a clearer sense of progress for every client.",
      },
    ],
    phases: [
      {
        title: "Discovery",
        desc: "Shadowing client check-in calls to find the real pain points.",
        detail:
          "Sat in on a week of client check-ins and found the same question came up every time — 'where are we at?' — because budgets, updates and files each lived in a different tool with no single view.",
      },
      {
        title: "IA",
        desc: "Structuring budgets, updates and files into one clear layout.",
        detail:
          "Structured the dashboard around the one question clients actually asked, putting current status and budget at the top and pushing file history and older updates into secondary views instead of one long feed.",
      },
      {
        title: "Build",
        desc: "A production dashboard connected to the real project data.",
        detail:
          "Wired the dashboard directly into the project data OWOW's team already tracks internally, so updates appear automatically instead of requiring someone to re-enter them for the client view.",
      },
      {
        title: "Rollout",
        desc: "Rolled out to every active OWOW client.",
        detail:
          "Rolled it out gradually across active clients, starting with the ones who asked for status updates most often, and used their feedback to tighten the file-approval flow before the full rollout.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
