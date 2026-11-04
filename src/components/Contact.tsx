import { profile } from "@/data/cv";
import Section from "./Section";
import Reveal from "./Reveal";
import {
  FlowerIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";

export default function Contact() {
  return (
    <Section id="kontak" eyebrow="Kontak" title="Mari Terhubung" className="bg-blush-50/50">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush-500 via-blush-600 to-blush-700 p-10 text-center text-white shadow-[0_30px_70px_rgba(201,99,136,0.4)] sm:p-16">
          <FlowerIcon className="absolute -left-6 -top-6 h-32 w-32 text-white/10" />
          <FlowerIcon className="absolute -bottom-8 -right-8 h-40 w-40 text-white/10" />
          <div className="dots absolute inset-0 opacity-10" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blush-100">
              Terbuka untuk peluang baru
            </p>
            <h3 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Mari berkolaborasi menciptakan pangan yang{" "}
              <span className="italic">aman & bermutu</span>
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-blush-100 sm:text-base">
              Saya senang berdiskusi seputar Quality Assurance, Quality Control,
              Food Safety, maupun Product Development. Jangan ragu untuk menyapa!
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-blush-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={`https://wa.me/${profile.phoneIntl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blush-100">
              <MapPinIcon className="h-4 w-4" />
              {profile.location}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
