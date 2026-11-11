"use client";

import { useState, useEffect } from "react";

const testimonios = [
  {
    video: "/testimonios/testimonio1.mp4",
    cita: "Tener el gusto de colaborar con universidades a nivel nacional para impulsar a la educación desde el nivel superior, superior y posgrados, y sentimos la unión de universidades",
    autor: "Lic. José Horacio Ochoa Chávez",
    cargo: "Rector-Instituto Educativo UCAP",
  },
  {
    video: "/testimonios/testimonio2.mp4",
    cita: "Significa llevar a la vanguardia, tener oportunidades con otras empresas y la colaboración de otras instituciones aprendemos.",
    autor: "Lic. Christian Cifuentes Arguello",
    cargo:
      "Rector-Centro de Estudios para la Salud y Asistencias en Emergencias",
  },
  {
    video: "/testimonios/testimonio3.mp4",
    cita: "Es importante que las empresas trabajen de la mano, aprendemos de cada una de las instituciones ya que nos permite ver hacía e futuro y mejorar",
    autor: "Lic. Rubén Ángel Valdez Hoffay Calvo",
    cargo: "Rector-Centro Universitario Acacias",
  },
];

export function Testimonios() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
    }, 12000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/5 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-institucional-600">
            Voces de nuestra red
          </span>
          <h2 className="text-3xl font-extrabold text-azul-900 sm:text-4xl">
            Lo que dicen nuestros líderes
          </h2>
        </div>

        <div className="relative min-h-[500px] w-full sm:min-h-[450px]">
          {testimonios.map((testimonio, index) => {
            const isActive = index === actual;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isActive
                    ? "pointer-events-auto z-10 translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none z-0 translate-y-8 scale-95 opacity-0"
                }`}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 shadow-[0_20px_60px_-15px_rgba(19,43,82,0.1)] md:flex-row">
                  <div className="relative h-72 w-full shrink-0 bg-azul-950 md:h-auto md:w-[45%]">
                    <video
                      src={testimonio.video}
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-azul-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/5"></div>
                  </div>

                  <div className="relative flex flex-col justify-center p-8 sm:p-12 md:w-[55%]">
                    <svg
                      className="absolute right-8 top-8 h-24 w-24 text-institucional-500/10"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    <p className="relative z-10 mb-8 text-xl font-light italic leading-relaxed text-neutral-600 sm:text-2xl">
                      "{testimonio.cita}"
                    </p>

                    <div className="mt-auto">
                      <div className="mb-4 h-1 w-12 rounded-full bg-institucional-500"></div>
                      <p className="text-lg font-black text-azul-900">
                        {testimonio.autor}
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-wide text-institucional-600">
                        {testimonio.cargo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-30 mt-12 flex items-center justify-center gap-3">
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
