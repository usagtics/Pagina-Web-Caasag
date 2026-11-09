"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonios = [
  {
    cita: "Pertenecer al CAASAG ha sido un parteaguas para nuestra universidad. Las alianzas estratégicas nos han permitido ofrecer a nuestros alumnos experiencias internacionales y prácticas profesionales de primer nivel.",
    autor: "Dr. Roberto Méndez",
    cargo: "Rector de la Universidad del Bajío",
    imagen: "/asamblea1.jpeg",
  },
  {
    cita: "La colaboración entre instituciones que promueve el Colegiado es fundamental. Juntos hemos logrado estandarizar procesos de calidad y elevar la excelencia académica en todo el estado.",
    autor: "Mtra. Elena Gómez",
    cargo: "Directora del Instituto Tecnológico de Guanajuato",
    imagen: "/carrousel.jpeg",
  },
  {
    cita: "El compromiso del CAASAG con la innovación educativa es real. Gracias a su red de contactos, hemos podido implementar nuevos modelos de enseñanza que benefician directamente a nuestra comunidad estudiantil.",
    autor: "Ing. Carlos Villalobos",
    cargo: "Director General de Grupo Educativo del Centro",
    imagen: "/carrousel1.jpeg",
  },
];

export function Testimonios() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
    }, 8000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-institucional-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-institucional-600 mb-4 block">
            Voces de nuestra red
          </span>
          <h2 className="text-3xl font-extrabold text-azul-900 sm:text-4xl">
            Lo que dicen nuestros líderes
          </h2>
        </div>

        <div className="relative min-h-[450px] sm:min-h-[350px] w-full">
          {testimonios.map((testimonio, index) => {
            const isActive = index === actual;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                    : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
                }`}
              >
                <div className="flex flex-col md:flex-row h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 shadow-[0_20px_60px_-15px_rgba(19,43,82,0.1)]">
                  <div className="relative w-full md:w-[40%] h-64 md:h-auto shrink-0">
                    <Image
                      src={testimonio.imagen}
                      alt={testimonio.autor}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-azul-950/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10"></div>
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-12 md:w-[60%] relative">
                    <svg
                      className="absolute top-8 right-8 h-24 w-24 text-institucional-500/10"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    <p className="relative z-10 text-xl sm:text-2xl font-light leading-relaxed text-neutral-600 italic mb-8">
                      "{testimonio.cita}"
                    </p>

                    <div className="mt-auto">
                      <div className="h-1 w-12 bg-institucional-500 rounded-full mb-4"></div>
                      <p className="text-lg font-black text-azul-900">
                        {testimonio.autor}
                      </p>
                      <p className="text-sm font-semibold text-institucional-600 uppercase tracking-wide">
                        {testimonio.cargo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center items-center gap-3 relative z-30">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => setActual(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === actual
                  ? "w-10 bg-institucional-500"
                  : "w-2.5 bg-neutral-200 hover:bg-neutral-300"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
