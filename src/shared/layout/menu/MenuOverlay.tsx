"use client";

import { useEffect } from "react";
import { cn } from "@/shared/lib/cn";
import { siteConfig } from "@/shared/config/site";

import { MenuBackground } from "../MenuBackground";
import { MenuHeader } from "../MenuHeader";
import { MenuLinks } from "./MenuLinks";
import { MenuFooter } from "./MenuFooter";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const menuItems = [
    ...siteConfig.nav,
    { href: "/convenios", label: "Convenios" },
  ];

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] flex items-center justify-center transition-all duration-500",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <MenuBackground />

      <div
        className={cn(
          "relative z-10 mx-4 w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-azul-950/65 p-8 shadow-xl backdrop-blur-md transition-all duration-500 ease-out sm:p-12",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-[0.98] opacity-0",
        )}
      >
        <MenuHeader onClose={onClose} />

        <MenuLinks items={menuItems} open={open} onClose={onClose} />

        <MenuFooter
          open={open}
          onClose={onClose}
          delay={menuItems.length * 60 + 100}
        />
      </div>
    </div>
  );
}
