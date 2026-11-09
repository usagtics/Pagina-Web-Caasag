"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative hidden overflow-hidden bg-azul-950 py-2.5 text-xs font-medium text-azul-100 md:block">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 transition-colors hover:text-white">
              <svg
                className="h-4 w-4 text-institucional-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {siteConfig.contact.email}
            </span>
            {siteConfig.contact.phone && (
              <span className="flex items-center gap-2 transition-colors hover:text-white">
                <svg
                  className="h-4 w-4 text-institucional-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {siteConfig.contact.phone}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-azul-200">
              <svg
                className="h-4 w-4 text-institucional-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              San Andrés de Guanajuato
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "w-full border-b border-neutral-100 bg-white/95 backdrop-blur transition-all duration-300",
          scrolled ? "h-20 shadow-lg shadow-azul-900/5" : "h-24 shadow-sm",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-4 outline-none">
            <div className="relative h-16 w-16 shrink-0 transition-transform duration-500 group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
              <Image
                src="/caasag-colores.png"
                alt="Logo CAASAG"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-black leading-tight text-azul-900">
                Colegiado de Alianzas
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-institucional-600">
                Académicas San Andrés de Guanajuato
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-bold text-azul-900 transition-all duration-300 hover:bg-neutral-50 hover:text-institucional-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="rounded-md bg-institucional-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-institucional-600 hover:shadow-md"
            >
              Contacto
            </Link>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 text-azul-900 transition-all hover:bg-neutral-100 active:scale-95 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={cn(
                "transition-transform duration-300",
                open ? "rotate-90" : "rotate-0",
              )}
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "absolute left-0 w-full overflow-hidden border-b border-neutral-100 bg-white shadow-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-bold text-azul-900 transition-colors hover:bg-neutral-50 hover:text-institucional-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-neutral-100 pt-4 pb-2">
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-institucional-500 px-4 py-3 text-base font-bold text-white shadow-md transition-colors hover:bg-institucional-600"
            >
              Contactar ahora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
