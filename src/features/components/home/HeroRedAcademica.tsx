"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { TextoDegradado } from "@/features/ui/TextoDegradado";
import { TransicionCortina } from "@/features/ui/TransicionCortina";
import { IndicadorScroll } from "@/features/ui/IndicadorScroll";

const imagenesFondo = [
  "/nosotros3.jpg",
  "/red-academica1.jpeg",
  "/carrousel1.jpeg",
];

export function HeroRedAcademica() {
  const [indice, setIndice] = useState(0);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIsWiping(true);

      setTimeout(() => {
        setIndice((prev) => (prev + 1) % imagenesFondo.length);
        setIsWiping(false);
      }, 700);
    }, 6000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-azul-950">
      <div className="absolute inset-0 z-0">
        {imagenesFondo.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === indice ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt="Nuestra Red Académica"
              fill
              priority={i === 0}
              className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                i === indice ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-azul-950/70 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-azul-950 via-azul-950/40 to-transparent pointer-events-none" />

      <TransicionCortina isWiping={isWiping} />

      <div className="relative z-30 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <AnimacionEntrada direccion="arriba" retraso={0.2} alCargar>
          <EtiquetaSeccion texto="Comunidad CAASAG" />
        </AnimacionEntrada>

        <AnimacionEntrada direccion="arriba" retraso={0.4} alCargar>
          <h1 className="mb-8 text-balance text-5xl font-black leading-tight tracking-tight text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
            Nuestra Red <br />
            <TextoDegradado>Académica.</TextoDegradado>
          </h1>
        </AnimacionEntrada>

        <AnimacionEntrada direccion="arriba" retraso={0.6} alCargar>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-azul-100/90 sm:text-2xl">
            Un colegiado que impulsa la colaboración, el fortalecimiento
            institucional y el crecimiento de la educación.
          </p>
        </AnimacionEntrada>

        <AnimacionEntrada direccion="arriba" retraso={0.8} alCargar>
          <Link
            href="#directorio"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold text-azul-950 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            <span className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-institucional-300 to-institucional-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-white">
              Explorar Directorio
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
          </Link>
        </AnimacionEntrada>
      </div>

      <AnimacionEntrada
        direccion="arriba"
        retraso={1.2}
        alCargar
        className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
      >
        <IndicadorScroll texto="Descubre más" />
      </AnimacionEntrada>
    </section>
  );
}
