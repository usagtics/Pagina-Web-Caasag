"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";

interface NavbarProps {
  scrolled: boolean;
  onOpenMenu: () => void;
}

export function Navbar({ scrolled, onOpenMenu }: NavbarProps) {
  return (
    <div
      className={cn(
        "w-full transition-all duration-500 ease-in-out",
        scrolled
          ? "h-20 border-b border-neutral-200/50 bg-white/90 shadow-lg backdrop-blur-md"
          : "h-24 border-b border-neutral-100 bg-white shadow-sm",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-4 outline-none">
          <div className="relative h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
            <Image
              src="/caasag-colores.png"
              alt="Logo CAASAG"
              fill
              sizes="(max-width: 640px) 56px, 72px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-black leading-tight text-azul-950">
              Colegiado de Alianzas
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-institucional-500">
              Académicas San Andrés de Guanajuato
            </span>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={onOpenMenu}
          className="relative z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-azul-50 text-azul-900 transition-all hover:bg-azul-100 active:scale-95"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
