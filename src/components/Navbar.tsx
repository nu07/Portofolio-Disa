"use client";

import { useEffect, useState } from "react";
import { CloseIcon, FlowerIcon, MenuIcon } from "./icons";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#penelitian", label: "Penelitian" },
  { href: "#organisasi", label: "Organisasi" },
  { href: "#publikasi", label: "Publikasi" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-blush-100 bg-cream/90 shadow-[0_8px_30px_rgba(201,99,136,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#beranda" className="flex items-center gap-2 font-display text-xl font-semibold text-mauve-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 text-blush-500">
            <FlowerIcon className="h-5 w-5" />
          </span>
          Disa<span className="text-blush-500">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.slice(0, 6).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-mauve-600 transition-colors hover:text-blush-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontak"
              className="rounded-full bg-blush-500 px-5 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(201,99,136,0.35)] transition-all hover:-translate-y-0.5 hover:bg-blush-600"
            >
              Kontak
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-mauve-700 transition-colors hover:bg-blush-50 lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-blush-100 bg-cream/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-mauve-700 transition-colors hover:bg-blush-50 hover:text-blush-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
