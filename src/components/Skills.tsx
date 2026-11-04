import { certifications, skillGroups, tools } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import { AwardIcon, HeartIcon, SparklesIcon } from "./icons";

const groupIcons = [HeartIcon, SparklesIcon];

export default function Skills() {
  return (
    <Section id="keahlian" eyebrow="Keahlian" title="Keahlian & Kompetensi">
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[i % groupIcons.length];
          return (
            <Reveal key={group.title} delay={i * 120} className="h-full">
              <div className="h-full rounded-3xl border border-blush-100 bg-white p-8 shadow-[0_16px_40px_rgba(201,99,136,0.08)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush-50 text-blush-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-mauve-900">{group.title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-mauve-600">
                      <HeartIcon className="mt-0.5 h-4 w-4 shrink-0 text-blush-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}

        <Reveal delay={240} className="h-full">
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-3xl border border-blush-200 bg-gradient-to-br from-blush-500 to-blush-600 p-8 text-white shadow-[0_20px_50px_rgba(201,99,136,0.35)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
                  <AwardIcon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold">Sertifikasi</h3>
              </div>
              {certifications.map((cert) => (
                <div key={cert.title} className="mt-6 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                  <p className="font-bold">{cert.title}</p>
                  <p className="mt-1 text-sm text-blush-100">{cert.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-blush-100 bg-white p-8 shadow-[0_16px_40px_rgba(201,99,136,0.08)]">
              <h3 className="font-display text-xl font-semibold text-mauve-900">Perangkat</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-blush-50 px-4 py-1.5 text-sm font-bold text-blush-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
