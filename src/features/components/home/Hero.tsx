"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    titulo: (
      <>
        <span className="text-institucional-400">CAASAG</span> - Colegiado de
        Alianzas Académicas San Andrés de Guanajuato
      </>
    ),
    subtitulo:
      "Impulsamos la colaboración entre instituciones académicas para fortalecer la excelencia educativa y el desarrollo de nuestra región.",
    imagen: "/asamblea1.jpeg",
    posicion: "object-[20%_25%]",
    boton1: "Conócenos",
    link1: "/sobre-nosotros",
    boton2: "Contactar",
    link2: "/contacto",
  },
  {
    titulo: (
      <>
        Forjando el{" "}
        <span className="text-institucional-400">Futuro Académico</span> de
        Guanajuato
      </>
    ),
    subtitulo:
      "Descubre nuestra oferta educativa y únete a una comunidad comprometida con la innovación, la investigación y el éxito profesional.",
    imagen: "/carrousel.jpeg",
    posicion: "object-[center_30%]",
    boton1: "Ver Oferta",
    link1: "/oferta-educativa",
    boton2: "Contactar",
    link2: "/contacto",
  },
  {
    titulo: (
      <>
        Creando{" "}
        <span className="text-institucional-400">Alianzas Estratégicas</span>{" "}
        que Transforman
      </>
    ),
    subtitulo:
      "Trabajamos de la mano con las mejores instituciones para generar un impacto positivo y sostenible en la sociedad.",
    imagen: "/carrousel1.jpeg",
    posicion: "object-[center_20%]",
    boton1: "Nuestra Red",
    link1: "/aliados",
    boton2: "Conócenos",
    link2: "/sobre-nosotros",
  },
];

export function Hero() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative overflow-hidden bg-azul-950 text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
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
              className={`object-cover ${slide.posicion} ${index === actual ? "animate-ken-burns" : ""}`}
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-azul-950 via-azul-950/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-azul-950/60 via-transparent to-transparent opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="relative min-h-[450px] sm:min-h-[400px] lg:min-h-[380px] flex flex-col justify-end pb-10 w-full">
          {slides.map((slide, index) => {
            const esCentrado = index === 0;

            return (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-end pb-10 transition-all duration-1000 ease-in-out ${
                  index === actual
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
                  <h1
                    className={`text-balance font-extrabold leading-[1.1] drop-shadow-2xl ${
                      esCentrado
                        ? "text-3xl sm:text-4xl lg:text-[2.8rem]"
                        : "text-4xl sm:text-5xl lg:text-[3.2rem]"
                    }`}
                  >
                    {slide.titulo}
                  </h1>

                  <p
                    className={`mt-6 text-balance text-lg leading-relaxed text-white sm:text-xl drop-shadow-lg ${
                      esCentrado ? "max-w-3xl mx-auto" : "max-w-lg"
                    }`}
                  >
                    {slide.subtitulo}
                  </p>

                  <div
                    className={`mt-8 flex flex-wrap gap-4 ${
                      esCentrado ? "justify-center" : "justify-start"
                    }`}
                  >
                    <Link
                      href={slide.link1}
                      className="group rounded-md bg-institucional-500 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-institucional-500/40 transition-all hover:bg-institucional-400 hover:-translate-y-1 flex items-center gap-2"
                    >
                      {slide.boton1}
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                    <Link
                      href={slide.link2}
                      className="rounded-md border border-white/40 bg-black/20 backdrop-blur-md px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-black/40 hover:-translate-y-1"
                    >
                      {slide.boton2}
                    </Link>
                  </div>
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
            {slides.map((_, index) => (
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
