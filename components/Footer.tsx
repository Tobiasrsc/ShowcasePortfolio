export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-14 bg-bg px-6 pb-7 pt-16 md:gap-16 md:px-14 md:pb-8 md:pt-[90px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6 text-center md:gap-6">
        <h2 className="max-w-[600px] text-[30px] font-semibold leading-[1.15] tracking-[-0.5px] text-ink md:text-[40px] md:tracking-[-0.8px] lg:text-[52px] lg:tracking-[-1.2px]">
          Got a project in mind?
          <br />
          Let&apos;s build it.
        </h2>

        <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:items-center md:gap-5">
          <a
            href="mailto:hello@tobiasdev.com"
            className="rounded-full bg-accent px-7 py-4 text-center text-[15px] font-medium text-white transition-all hover:brightness-110 active:brightness-90"
          >
            hello@tobiasdev.com
          </a>
          <a
            href="/resume.pdf"
            className="text-center text-[15px] text-accent transition-all hover:brightness-110 active:brightness-75"
          >
            Resume  ›
          </a>
        </div>
      </div>

      <div className="flex w-full max-w-content flex-col items-center gap-3 border-t border-border pt-5 md:flex-row md:justify-between md:gap-0">
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
