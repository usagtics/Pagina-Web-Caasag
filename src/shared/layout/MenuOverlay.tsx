"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex items-center justify-center transition-all duration-500",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div className="absolute inset-0 bg-azul-950/95">
        <Image
          src="/cintillo-logos.jpg"
          alt="Fondo CAASAG"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-950 via-azul-950/80 to-transparent"></div>
      </div>

      <div
        className={cn(
          "relative z-10 w-full max-w-3xl mx-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-12 scale-95 opacity-0",
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col gap-1 mt-4">
          {siteConfig.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-center justify-between border-b border-white/10 py-4 transition-all duration-500 hover:pl-2",
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{
                transitionDelay: open ? `${index * 80 + 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-bold text-institucional-500 font-mono transition-transform duration-300 group-hover:-translate-y-1">
                  0{index + 1}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-institucional-400">
                  {item.label}
                </span>
              </div>
              <svg
                className="h-5 w-5 text-white/20 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div
          className={cn(
            "mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
          style={{
            transitionDelay: open
              ? `${siteConfig.nav.length * 80 + 200}ms`
              : "0ms",
          }}
        >
          <Link
            href="/contacto"
            onClick={onClose}
            className="group relative w-full sm:w-auto rounded-full bg-institucional-500 px-8 py-3.5 text-sm font-bold text-azul-950 shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all hover:scale-105"
          >
            HAZTE MIEMBRO
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white/50 text-xs sm:text-sm">
            <span>contacto@caasag.mx</span>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-white/30"></span>
            <span>479 228 6990</span>
          </div>
        </div>
      </div>
    </div>
  );
}
