import Image from "next/image";
import { profile } from "@/data/cv";
import Reveal from "./Reveal";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  FlowerIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  SparklesIcon,
} from "./icons";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-16">
      {/* decorative blobs */}
      <div className="blob -top-24 -left-24 h-96 w-96 bg-blush-200/60" />
      <div className="blob top-40 -right-32 h-[28rem] w-[28rem] bg-blush-100" />
      <div className="dots absolute inset-x-0 top-16 h-40 opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blush-600">
            <SparklesIcon className="h-4 w-4" />
            Halo, selamat datang
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-mauve-900 sm:text-6xl lg:text-7xl">
            Sri Diana{" "}
            <span className="italic text-blush-500">Sari</span>
          </h1>

          <p className="mt-4 text-lg font-bold text-mauve-600 sm:text-xl">
            {profile.degree} — {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-mauve-500">
            Fresh graduate Jaminan Mutu Pangan yang teliti dan penuh semangat,
            berpengalaman di laboratorium, produksi, hingga penelitian produk pangan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontak"
              className="group inline-flex items-center gap-2 rounded-full bg-blush-500 px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(201,99,136,0.4)] transition-all hover:-translate-y-0.5 hover:bg-blush-600"
            >
              Hubungi Saya
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#pengalaman"
              className="inline-flex items-center gap-2 rounded-full border border-blush-300 bg-white/70 px-7 py-3 text-sm font-bold text-blush-600 transition-all hover:-translate-y-0.5 hover:bg-blush-50"
            >
              Lihat Pengalaman
            </a>
            <a
              href="/CV%20Umum_Sri%20Diana%20Sari_Indo.pdf"
              download="CV - Sri Diana Sari.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-blush-300 bg-white px-7 py-3 text-sm font-bold text-blush-600 shadow-[0_8px_20px_rgba(201,99,136,0.15)] transition-all hover:-translate-y-0.5 hover:bg-blush-50"
            >
              <DownloadIcon className="h-4 w-4" />
              Unduh CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-mauve-500">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-blush-400" />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-blush-600">
              <MailIcon className="h-4 w-4 text-blush-400" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-blush-600"
            >
              <LinkedinIcon className="h-4 w-4 text-blush-400" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        {/* decorative monogram card */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[3rem] border-2 border-dashed border-blush-200" />
          <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-white to-blush-200 shadow-[0_30px_60px_rgba(201,99,136,0.25)]">
            <div className="dots absolute inset-0 opacity-50" />
            <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-blush-50 shadow-[0_16px_40px_rgba(201,99,136,0.3)] ring-8 ring-blush-100 sm:h-52 sm:w-52">
              <Image
                src="/disa.png"
                alt="Foto Sri Diana Sari"
                fill
                priority
                sizes="(min-width: 640px) 13rem, 11rem"
                className="object-cover object-[50%_25%]"
              />
            </div>
            <FlowerIcon className="absolute left-8 top-8 h-8 w-8 text-blush-300" />
            <FlowerIcon className="absolute bottom-10 right-8 h-10 w-10 text-blush-200" />
            <SparklesIcon className="absolute right-10 top-12 h-6 w-6 text-blush-400" />

            <div className="absolute bottom-6 flex flex-wrap justify-center gap-2 px-6">
              {["QA · QC", "HACCP", "Food Safety", "R&D"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blush-600 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
