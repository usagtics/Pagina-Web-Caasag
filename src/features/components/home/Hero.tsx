"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { BotonHero } from "@/features/ui/BotonHero";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { heroSlides } from "@/data/heroData";

export function Hero() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative overflow-hidden bg-azul-950 text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === actual ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.imagen}
              alt="Fondo"
              fill
              className={`object-cover ${slide.posicion} ${
                index === actual ? "animate-ken-burns" : ""
              }`}
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-azul-950 via-azul-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-950/60 via-transparent to-transparent opacity-40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="relative min-h-[450px] sm:min-h-[400px] lg:min-h-[380px] flex flex-col justify-end pb-10 w-full">
          {heroSlides.map((slide, index) => {
            const esCentrado = index === 0;
            const activo = index === actual;

            return (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-end pb-10 transition-all duration-1000 ease-in-out ${
                  activo
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div
                  className={`flex flex-col w-full ${
                    esCentrado
                      ? "items-center text-center max-w-4xl mx-auto"
                      : "items-start text-left max-w-2xl"
                  }`}
                >
                  {activo && (
                    <AnimacionEntrada direccion="arriba" alCargar>
                      <h1
                        className={`text-balance font-extrabold leading-[1.1] drop-shadow-2xl ${
                          esCentrado
                            ? "text-3xl sm:text-4xl lg:text-[2.8rem]"
                            : "text-4xl sm:text-5xl lg:text-[3.2rem]"
                        }`}
                      >
                        {slide.titulo}
                      </h1>
                    </AnimacionEntrada>
                  )}

                  {activo && (
                    <AnimacionEntrada direccion="arriba" retraso={0.2} alCargar>
                      <p
                        className={`mt-6 text-balance text-lg leading-relaxed text-white sm:text-xl drop-shadow-lg ${
                          esCentrado ? "max-w-3xl mx-auto" : "max-w-lg"
                        }`}
                      >
                        {slide.subtitulo}
                      </p>
                    </AnimacionEntrada>
                  )}

                  {activo && (
                    <AnimacionEntrada direccion="arriba" retraso={0.4} alCargar>
                      <div
                        className={`mt-8 flex flex-wrap gap-4 ${
                          esCentrado ? "justify-center" : "justify-start"
                        }`}
                      >
                        {slide.boton1 && slide.link1 && (
                          <BotonHero href={slide.link1} variante="primario">
                            {slide.boton1}
                          </BotonHero>
                        )}
                        {slide.boton2 && slide.link2 && (
                          <BotonHero href={slide.link2} variante="secundario">
                            {slide.boton2}
                          </BotonHero>
                        )}
                      </div>
                    </AnimacionEntrada>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative w-full h-8 mt-12 z-30">
          <div
            className={`absolute flex items-center gap-3 transition-all duration-700 ease-in-out ${
              actual === 0
                ? "left-1/2 -translate-x-1/2"
                : "left-0 translate-x-0"
            }`}
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActual(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === actual
                    ? "w-10 bg-institucional-500"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
