"use client";

import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

interface TopBarProps {
  scrolled: boolean;
  open: boolean;
}

export function TopBar({ scrolled, open }: TopBarProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-azul-950 text-xs font-medium text-azul-100 transition-all duration-500 ease-in-out",
        scrolled || open
          ? "max-h-0 opacity-0 py-0"
          : "max-h-12 opacity-100 py-2.5",
      )}
    >
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2 transition-colors hover:text-white">
          <svg
            className="h-4 w-4 text-institucional-400"
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
        <span className="flex items-center gap-2 text-azul-200">
          <svg
            className="h-4 w-4 text-institucional-400"
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
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {siteConfig.contact.address}
        </span>
      </div>
    </div>
  );
}
