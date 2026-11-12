"use client";

import { ReactNode } from "react";

interface TransicionCarruselProps {
  activo: boolean;
  children: ReactNode;
  className?: string;
}

export function TransicionCarrusel({
  activo,
  children,
  className = "",
}: TransicionCarruselProps) {
  return (
    <div
      aria-hidden={!activo}
      className={`
        absolute inset-0
        transition-all duration-500 ease-out
        ${
          activo
            ? "z-10 translate-y-0 scale-100 opacity-100"
            : "pointer-events-none z-0 translate-y-4 scale-95 opacity-0"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
