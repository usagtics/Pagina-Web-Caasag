"use client";

import { useState, useEffect } from "react";
import { bloquesIdentidad } from "@/data/identidadData";

export function CarruselRumbo() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((prev) => (prev + 1) % bloquesIdentidad.length);
    }, 6000);
    return () => clearInterval(intervalo);
  }, []);

  const getButtonStyles = (index: number) => {
    const base =
      "group relative z-10 flex h-20 w-20 items-center justify-center transition-all duration-500 rounded-2xl border-2";

    if (index === activo) {
      return `${base} bg-gradient-to-br from-azul-800 to-azul-950 text-institucional-400 shadow-xl -translate-y-3 scale-110 border-azul-700`;
    }
    if (index < activo) {
      return `${base} bg-white text-institucional-500 border-institucional-300 shadow-sm`;
    }
    return `${base} bg-white text-azul-300 border-azul-100 hover:border-institucional-300 hover:text-institucional-500 shadow-sm`;
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl py-20 px-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-institucional-500/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-azul-500/10 blur-3xl rounded-full -z-10" />

      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-azul-900 shadow-sm border border-azul-100">
          <span className="h-2 w-2 rounded-full bg-institucional-500 animate-pulse" />
          Nuestra Identidad
        </span>
      </div>

      <div className="relative mb-20 flex items-center justify-between px-6 sm:px-16 max-w-3xl mx-auto z-10">
        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-azul-100 rounded-full" />

        <div
          className="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-azul-800 to-institucional-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${(activo / (bloquesIdentidad.length - 1)) * 100}%`,
          }}
        />

        {bloquesIdentidad.map((bloque, index) => (
          <button
            key={bloque.titulo}
            onClick={() => setActivo(index)}
            className={getButtonStyles(index)}
            aria-label={`Ver ${bloque.titulo}`}
          >
            <div
              className={`relative z-10 transition-transform duration-500 ${
                index === activo ? "scale-110" : "group-hover:scale-110"
              }`}
            >
              {bloque.icono}
            </div>

            {index === activo && (
              <>
                <div className="absolute -inset-1.5 rounded-3xl border border-institucional-500/40" />
                <div className="absolute -inset-3 rounded-[2rem] border border-institucional-500/20 animate-ping opacity-50" />
              </>
            )}
          </button>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl z-10">
        <div className="relative min-h-[280px] rounded-3xl bg-white p-8 sm:p-14 shadow-2xl border border-azul-50 flex items-center justify-center text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-azul-800 via-institucional-500 to-azul-800" />

          {bloquesIdentidad.map((bloque, index) => (
            <div
              key={bloque.titulo}
              className={`absolute inset-0 p-8 sm:p-14 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
                index === activo
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-institucional-600 mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-institucional-400" />
                {bloque.subtitulo}
                <span className="h-px w-8 bg-institucional-400" />
              </p>

              <h3 className="text-4xl sm:text-5xl font-black text-azul-900 mb-6 tracking-tight">
                {bloque.titulo}
              </h3>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-azul-900/80 font-light">
                {bloque.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
