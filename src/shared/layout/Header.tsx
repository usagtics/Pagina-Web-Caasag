"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/shared/lib/cn";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 40);

      if (currentScrollY < 50) {
        setVisible(true);
      } else if (scrollDifference > 10) {
        setVisible(false);
      } else if (scrollDifference < -10) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
          visible ? "translate-y-0" : "-translate-y-full",
          open && "opacity-0 pointer-events-none",
        )}
      >
        <TopBar scrolled={scrolled} open={open} />
        <Navbar scrolled={scrolled} onOpenMenu={() => setOpen(true)} />
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
