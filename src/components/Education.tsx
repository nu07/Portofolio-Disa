import { education } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import { FlowerIcon, GraduationCapIcon } from "./icons";

export default function Education() {
  return (
    <Section id="pendidikan" eyebrow="Pendidikan" title="Pendidikan & Proyek Akademik" className="bg-blush-50/50">
      <Reveal>
        <div className="rounded-3xl border border-blush-100 bg-white p-8 shadow-[0_16px_40px_rgba(201,99,136,0.08)] sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blush-500 text-white shadow-[0_10px_25px_rgba(201,99,136,0.4)]">
                <GraduationCapIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-mauve-900">
                  {education.school}
                </h3>
                <p className="mt-1 font-semibold text-mauve-600">{education.program}</p>
              </div>
            </div>
            <span className="rounded-full bg-blush-100 px-5 py-2 text-sm font-bold text-blush-700">
              {education.period}
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-blush-500">
              Mata Kuliah Relevan
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-blush-200 bg-blush-50/60 px-4 py-1.5 text-sm font-semibold text-mauve-600"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {education.projects.map((group, i) => (
          <Reveal key={group.year} delay={i * 120}>
            <div className="h-full rounded-3xl border border-blush-100 bg-white p-8 shadow-[0_16px_40px_rgba(201,99,136,0.08)]">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blush-500 px-4 py-1 font-display text-lg font-semibold italic text-white">
                  {group.year}
                </span>
                <span className="h-px flex-1 bg-blush-100" />
                <FlowerIcon className="h-5 w-5 text-blush-300" />
              </div>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-mauve-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
