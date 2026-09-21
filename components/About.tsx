import Image from "next/image";

const focusAreas = ["UI Design", "Full-Stack Development", "Web Development"];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-8 bg-bgAlt px-6 py-16 md:gap-12 md:px-14 md:py-[90px] lg:px-16"
    >
      <h2 className="text-[32px] font-semibold tracking-[-0.5px] text-ink md:text-[38px] md:tracking-[-1px] lg:text-[44px]">
        About
      </h2>

      <div className="flex w-full max-w-content flex-col gap-6 md:flex-row md:gap-8">
        <div className="group mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-[24px] bg-cardBg p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)] md:mx-0 md:w-[280px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-chipBg">
            <Image
              src="/images/portrait.png"
              alt="Portrait of Tobias"
              fill
              sizes="(min-width: 768px) 280px, 60vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-5 rounded-[24px] bg-cardBg p-8 text-center shadow-sm md:items-start md:p-10 md:text-left">
          <h3 className="max-w-[520px] text-[22px] font-semibold leading-[1.3] text-ink md:text-[25px]">
            I build for the web with an eye for design and a curiosity for
            how things work.
          </h3>
          <p className="max-w-[520px] text-[15px] leading-relaxed text-secondary">
            I&apos;m Tobias Hermans, an ICT student at Fontys developing my
            skills in full-stack development. I enjoy turning ideas into
            websites and applications that look good and are easy to use.
            Through my studies, internship, and client projects, I&apos;m
            learning to connect thoughtful design with reliable code.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-chipBg px-2.5 py-1 text-[12px] text-secondary"
              >
                {area}
              </span>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/tobias-hermans-9121a92aa"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1 text-[14px] font-medium text-accent transition-all hover:brightness-110 active:brightness-75"
          >
            <span className="underline-offset-4 group-hover:underline">
              Connect on LinkedIn
            </span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
