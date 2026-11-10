"use client";

import { useState } from "react";
import Image from "next/image";

interface GaleriaProps {
  fotos: string[];
  titulo: string;
}

export function GaleriaEventoAsamblea1({ fotos, titulo }: GaleriaProps) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(
    null,
  );

  const fotosDuplicadas = [...fotos, ...fotos, ...fotos, ...fotos];

  return (
    <div className="relative w-full py-10 overflow-hidden">
      <style>{`
        @keyframes scroll-infinito {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 4)); }
        }
        .animacion-carrusel {
          animation: scroll-infinito 45s linear infinite;
        }
        .animacion-carrusel:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex w-max gap-4 sm:gap-6 animacion-carrusel">
        {fotosDuplicadas.map((foto, index) => (
          <div
            key={index}
            onClick={() => setImagenSeleccionada(foto)}
            className="group relative aspect-[3/4] w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-lg sm:w-[320px] md:w-[380px]"
          >
            <Image
              src={foto}
              alt={`${titulo} - Foto ${index + 1}`}
              fill
              sizes="(max-width: 768px) 350px, 500px"
              quality={95}
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {imagenSeleccionada && (
        <div
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-azul-950/95 p-4 backdrop-blur-md sm:p-12"
          onClick={() => setImagenSeleccionada(null)}
        >
          <button
            className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setImagenSeleccionada(null);
            }}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative h-full max-h-[85vh] w-full max-w-6xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenSeleccionada}
              alt={titulo}
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
