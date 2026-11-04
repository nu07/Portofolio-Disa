import { publications } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, BookOpenIcon } from "./icons";

export default function Publications() {
  return (
    <Section id="publikasi" eyebrow="Publikasi" title="Publikasi & Karya Tulis" className="bg-blush-50/50">
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 120} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-blush-100 bg-white p-8 shadow-[0_16px_40px_rgba(201,99,136,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,99,136,0.14)]">
              <span className="absolute -right-6 -top-8 font-display text-[9rem] font-semibold italic leading-none text-blush-50 select-none">
                {pub.year}
              </span>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-500 text-white shadow-[0_10px_25px_rgba(201,99,136,0.35)]">
                    <BookOpenIcon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blush-700">
                    {pub.type} · {pub.year}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold italic leading-snug text-mauve-900">
                  &ldquo;{pub.title}&rdquo;
                </h3>
                <p className="mt-3 text-sm font-bold text-blush-600">{pub.source}</p>
                <p className="mt-2 text-xs leading-relaxed text-mauve-400">{pub.authors}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blush-500 transition-colors hover:text-blush-700"
                  >
                    {pub.linkLabel}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
