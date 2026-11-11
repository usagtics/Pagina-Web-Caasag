"use client";

import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-azul-950/80 text-institucional-400 shadow-2xl backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-azul-900 hover:text-white group ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "pointer-events-none translate-y-10 opacity-0 scale-50"
      }`}
      aria-label="Volver arriba"
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/5"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-institucional-500 transition-all duration-150 ease-out"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
