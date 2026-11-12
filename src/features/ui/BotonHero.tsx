import Link from "next/link";
import { ReactNode } from "react";

interface BotonHeroProps {
  href: string;
  children: ReactNode;
  variante?: "primario" | "secundario";
  className?: string;
}

export function BotonHero({
  href,
  children,
  variante = "secundario",
  className = "",
}: BotonHeroProps) {
  const estilosBase =
    "rounded-md px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1";

  const variantes = {
    primario:
      "bg-institucional-500 text-azul-950 hover:bg-institucional-400 shadow-lg",
    secundario:
      "border border-white/40 bg-black/25 backdrop-blur-md text-white hover:bg-black/40",
  };

  return (
    <Link
      href={href}
      className={`${estilosBase} ${variantes[variante]} ${className}`}
    >
      {children}
    </Link>
  );
}
