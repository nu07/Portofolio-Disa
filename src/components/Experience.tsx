import { experiences } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import { BriefcaseIcon } from "./icons";

export default function Experience() {
  return (
    <Section id="pengalaman" eyebrow="Pengalaman" title="Pengalaman Kerja & Magang">
      <div className="relative space-y-8 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px before:bg-blush-200 sm:before:left-[1.45rem]">
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.role}-${exp.period}`} delay={i * 80}>
            <article className="relative pl-14 sm:pl-20">
              <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blush-500 shadow-[0_8px_20px_rgba(201,99,136,0.25)] ring-4 ring-blush-100 sm:h-12 sm:w-12">
                <BriefcaseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>

              <div className="rounded-3xl border border-blush-100 bg-white p-6 shadow-[0_16px_40px_rgba(201,99,136,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,99,136,0.14)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-mauve-900 sm:text-2xl">
                    {exp.role}
                  </h3>
                  <span className="rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blush-700">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-2 font-bold text-blush-600">{exp.org}</p>
                {exp.note && <p className="mt-1 text-sm italic text-mauve-400">{exp.note}</p>}
                <ul className="mt-5 space-y-3">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-mauve-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
