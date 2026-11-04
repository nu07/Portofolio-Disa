import { profile } from "@/data/cv";
import { FlowerIcon, HeartIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-blush-100 bg-cream py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <a href="#beranda" className="flex items-center gap-2 font-display text-xl font-semibold text-mauve-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 text-blush-500">
            <FlowerIcon className="h-5 w-5" />
          </span>
          {profile.name}
        </a>
        <p className="max-w-md text-sm leading-relaxed text-mauve-400">
          {profile.degree} — {profile.tagline}
        </p>
        <p className="flex items-center gap-1.5 text-xs font-semibold text-mauve-400">
          © 2026 {profile.name} · Dibuat dengan
          <HeartIcon className="h-3.5 w-3.5 text-blush-400" />
          menggunakan Next.js
        </p>
      </div>
    </footer>
  );
}
