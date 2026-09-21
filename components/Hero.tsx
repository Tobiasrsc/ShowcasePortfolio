export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 bg-bg px-6 py-14 text-center md:gap-6 md:px-14 md:py-20 lg:px-16 lg:py-[90px]">
      <span className="text-[14px] font-medium text-accent md:text-[15px]">
        Full-stack developer
      </span>

      <h1 className="max-w-[900px] text-[38px] font-semibold leading-[1.08] tracking-[-1px] text-ink md:text-[56px] md:tracking-[-1.5px] lg:text-[76px] lg:tracking-[-2px]">
        Products that feel
        <br />
        as good as they work.
      </h1>

      <p className="max-w-[300px] text-[16px] leading-relaxed text-secondary md:max-w-[480px] md:text-[17px] lg:max-w-[640px] lg:text-[21px]">
        I&apos;m Tobias — I design and build web products end to end, from
        backend architecture to pixel-level polish.
      </p>

      <div className="flex w-full flex-col items-stretch gap-5 md:w-auto md:flex-row md:items-center">
        <a
          href="#work"
          className="rounded-full bg-accent px-6 py-[15px] text-center text-[16px] font-medium text-white transition-all hover:brightness-110 active:brightness-90"
        >
          View my work
        </a>
        <a
          href="/resume.pdf"
          className="group flex items-center justify-center gap-1 text-[15px] text-accent transition-all hover:brightness-110 active:brightness-75"
        >
          <span className="underline-offset-4 group-hover:underline">
            Resume
          </span>
          <span className="transition-transform group-hover:translate-x-1">
            ›
          </span>
        </a>
      </div>

      {/* Product screenshot / device mockup placeholder — swap for a real image */}
      <div className="mt-2 flex h-[220px] w-full max-w-[342px] items-center justify-center rounded-[20px] bg-[#383839] md:h-[380px] md:max-w-[714px] lg:h-[560px] lg:max-w-[1180px]">
        <span className="text-[12px] tracking-wide text-white/40 md:text-[13px]">
          PRODUCT SCREENSHOT / DEVICE MOCKUP
        </span>
      </div>
    </section>
  );
}
