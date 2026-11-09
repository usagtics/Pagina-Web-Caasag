"use client";

import { useState, useEffect } from "react";

const bloques = [
  {
    titulo: "Misión",
    subtitulo: "Nuestro compromiso diario",
    descripcion:
      "Unir esfuerzos entre instituciones educativas para promover el desarrollo académico, tecnológico y humano, mediante alianzas colaborativas que generen impacto positivo y sostenible en la educación local, nacional e internacional y sus comunidades.",
    icono: (
      <svg
        className="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    titulo: "Visión",
    subtitulo: "Hacia dónde nos dirigimos",
    descripcion:
      "Ser un referente regional en innovación educativa y cooperación académica, que impulse la transformación del sistema educativo a través de alianzas sólidas, tecnología de vanguardia y compromiso social.",
    icono: (
      <svg
        className="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    titulo: "Valores",
    subtitulo: "Lo que nos define",
    descripcion:
      "Colaboración, Innovación, Compromiso Social, Ética, Excelencia Académica, Honestidad, Transparencia, Lealtad.",
    icono: (
      <svg
        className="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export function CarruselRumbo() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((prev) => (prev + 1) % bloques.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-5xl py-20 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-institucional-500/15 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-azul-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative text-center mb-16 z-10 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-azul-900 shadow-sm border border-azul-100">
          <span className="h-2 w-2 rounded-full bg-institucional-500 animate-pulse"></span>
          Nuestra Identidad
        </span>
      </div>

      <div className="relative mb-20 flex items-center justify-between px-6 sm:px-16 max-w-3xl mx-auto z-10">
        <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-azul-100 rounded-full"></div>

        <div
          className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-azul-800 to-institucional-500 rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_15px_rgba(19,43,82,0.2)]"
          style={{ width: `${(activo / (bloques.length - 1)) * 100}%` }}
        ></div>

        {bloques.map((bloque, index) => {
          const isActive = index === activo;
          const isPast = index < activo;

          return (
            <button
              key={index}
              onClick={() => setActivo(index)}
              className={`group relative z-10 flex h-20 w-20 items-center justify-center transition-all duration-500 rounded-2xl ${
                isActive
                  ? "bg-gradient-to-br from-azul-800 to-azul-950 text-institucional-400 shadow-[0_15px_35px_rgba(19,43,82,0.4)] -translate-y-3 scale-110 border border-azul-700"
                  : isPast
                    ? "bg-white text-institucional-500 border-2 border-institucional-300 shadow-sm"
                    : "bg-white text-azul-300 border-2 border-azul-100 hover:border-institucional-300 hover:text-institucional-500 shadow-sm"
              }`}
            >
              <div
                className={`relative z-10 transition-transform duration-500 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
              >
                {bloque.icono}
              </div>

              {isActive && (
                <>
                  <div className="absolute -inset-1.5 rounded-[1.25rem] border border-institucional-500/40"></div>
                  <div className="absolute -inset-3 rounded-[1.5rem] border border-institucional-500/20 animate-ping opacity-50"></div>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-4xl z-10">
        <div className="relative min-h-[280px] rounded-[2rem] bg-white p-8 sm:p-14 shadow-[0_20px_60px_-15px_rgba(19,43,82,0.15)] border border-azul-50 flex items-center justify-center text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-azul-800 via-institucional-500 to-azul-800"></div>

          {bloques.map((bloque, index) => {
            const isActive = index === activo;

            return (
              <div
                key={index}
                className={`absolute inset-0 p-8 sm:p-14 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 scale-95 blur-sm pointer-events-none"
                }`}
              >
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-institucional-600 mb-4 flex items-center gap-3 justify-center">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-institucional-400"></span>
                  {bloque.subtitulo}
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-institucional-400"></span>
                </p>

                <h3 className="text-4xl sm:text-6xl font-black text-azul-900 mb-6 tracking-tight relative z-10">
                  {bloque.titulo}
                </h3>

                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-azul-900/70 font-light relative z-10">
                  {bloque.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
