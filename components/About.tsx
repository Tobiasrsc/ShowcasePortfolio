const stats = [
  { num: "5+", label: "Years experience" },
  { num: "40+", label: "Projects shipped" },
  { num: "12", label: "Happy clients" },
];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-8 bg-bgAlt px-6 py-16 md:gap-12 md:px-14 md:py-[90px] lg:px-16"
    >
      <h2 className="text-[32px] font-semibold tracking-[-0.5px] text-ink md:text-[38px] md:tracking-[-1px] lg:text-[44px]">
        About
      </h2>

      <div className="flex w-full max-w-[1280px] flex-col items-center gap-8 rounded-[24px] bg-cardBg p-8 shadow-sm md:flex-row md:items-center md:gap-10 md:p-10">
        {/* Portrait placeholder — swap for a real photo */}
        <div className="flex h-[190px] w-[160px] shrink-0 items-center justify-center rounded-[18px] bg-chipBg md:h-[270px] md:w-[220px]">
          <span className="text-[11px] text-secondary">PORTRAIT</span>
        </div>

        <div className="flex flex-col items-center gap-5 text-center md:items-start md:gap-5 md:text-left">
          <h3 className="max-w-[480px] text-[22px] font-semibold leading-[1.3] text-ink md:text-[25px]">
            I build things for the web — and sweat the details most people
            skip.
          </h3>
          <p className="max-w-[480px] text-[15px] leading-relaxed text-secondary">
            5+ years shipping production software across startups and
            agencies — from React frontends to distributed backend systems. I
            care about clean architecture, fast load times, and interfaces
            that feel obvious to use.
          </p>

          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-[22px] font-semibold text-accent md:text-[24px]">
                  {s.num}
                </span>
                <span className="text-[12px] text-secondary">{s.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-[14px] font-medium text-accent transition-all hover:brightness-110 active:brightness-75"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
