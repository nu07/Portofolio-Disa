import { profile } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import { HeartIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function About() {
  return (
    <Section id="tentang" eyebrow="Tentang Saya" title="Ringkasan Profil">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="h-full rounded-3xl border border-blush-100 bg-white p-8 shadow-[0_16px_40px_rgba(201,99,136,0.08)] sm:p-10">
            <p className="text-base leading-8 text-mauve-600 sm:text-lg sm:leading-9">
              {profile.summary}
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blush-500">
                Minat Karier
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.interests.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-blush-50 px-4 py-1.5 text-sm font-bold text-blush-600"
                  >
                    <HeartIcon className="h-3.5 w-3.5" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blush-500">
                Area Pengetahuan
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.knowledges.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blush-200 px-4 py-1.5 text-sm font-semibold text-mauve-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col gap-4">
            {[
              { icon: MapPinIcon, label: "Domisili", value: profile.location, href: null },
              { icon: PhoneIcon, label: "Telepon / WhatsApp", value: profile.phone, href: `https://wa.me/${profile.phoneIntl}` },
              { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: LinkedinIcon, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href ?? undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-blush-100 bg-white p-5 shadow-[0_12px_30px_rgba(201,99,136,0.07)] transition-all hover:-translate-y-1 hover:border-blush-200"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush-50 text-blush-500 transition-colors group-hover:bg-blush-100">
                  <item.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-mauve-400">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block font-bold text-mauve-800">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
