"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
            key={i}
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

      <div className="absolute inset-0 z-10 bg-azul-950/70 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-azul-950 via-azul-950/40 to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 z-20 flex pointer-events-none">
        {[0, 1, 2, 3, 4].map((panel, i) => (
          <div
            key={panel}
            className={`h-full flex-1 transition-transform duration-700 ease-in-out ${
              i % 2 === 0 ? "bg-azul-900" : "bg-institucional-600"
            }`}
            style={{
              transform: isWiping ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: isWiping ? "right" : "left",
              transitionDelay: isWiping ? `${i * 80}ms` : `${(4 - i) * 80}ms`,
            }}
          />
        ))}
      </div>

      <div className="relative z-30 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "200ms" }}
        >
          <span className="h-2 w-2 rounded-full bg-institucional-500 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">
            Comunidad CAASAG
          </span>
        </div>

        <h1
          className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-[6rem] leading-[1.05] mb-8 text-balance drop-shadow-2xl opacity-0 animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "400ms" }}
        >
          Nuestra Red <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-200 via-institucional-400 to-institucional-200">
            Académica.
          </span>
        </h1>

        <p
          className="text-lg sm:text-2xl leading-relaxed text-azul-100/90 font-light max-w-2xl mx-auto mb-12 opacity-0 animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "600ms" }}
        >
          Un colegiado que impulsa la colaboración, el fortalecimiento
          institucional y el crecimiento de la educación
        </p>

        <div
          className="opacity-0 animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "800ms" }}
        >
          <Link
            href="#directorio"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold text-azul-950 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-institucional-300 to-institucional-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
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
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-0 animate-[fadeInLeft_1s_ease-out_forwards]"
        style={{ animationDelay: "1200ms" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            Descubre más
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
