import { organizations } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import { UsersIcon } from "./icons";

export default function Organization() {
  return (
    <Section id="organisasi" eyebrow="Organisasi" title="Pengalaman Organisasi & Kepanitiaan">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((item, i) => (
          <Reveal key={item.org} delay={(i % 3) * 100} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-blush-100 bg-white p-7 shadow-[0_16px_40px_rgba(201,99,136,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,99,136,0.14)]">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-50 text-blush-500">
                  <UsersIcon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blush-700">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-mauve-900">
                {item.org}
              </h3>
              <p className="mt-1 text-sm font-bold text-blush-600">{item.role}</p>
              <ul className="mt-4 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-mauve-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
