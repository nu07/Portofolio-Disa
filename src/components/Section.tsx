import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { FlowerIcon } from "./icons";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-blush-500">
            <span className="h-px w-10 bg-blush-300" />
            {eyebrow}
          </div>
          <h2 className="mt-4 flex flex-wrap items-center gap-3 font-display text-3xl font-semibold text-mauve-900 sm:text-4xl">
            {title}
            <FlowerIcon className="h-7 w-7 text-blush-300" />
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
