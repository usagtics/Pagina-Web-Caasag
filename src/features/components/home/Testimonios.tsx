"use client";

import { useState, useEffect } from "react";
import { testimonios } from "@/data/testimoniosData";
import { TestimonioCard } from "./TestimonioCard";

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
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-3 rounded-full bg-institucional-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-institucional-600 border border-institucional-100">
            Voces de nuestra red
          </span>
          <h2 className="text-3xl font-black tracking-tight text-azul-900 sm:text-5xl">
            Lo que dicen{" "}
            <span className="text-institucional-600">nuestros líderes</span>
          </h2>
        </div>

        <div className="relative min-h-[480px] w-full sm:min-h-[420px]">
          {testimonios.map((testimonio, index) => (
            <TestimonioCard
              key={index}
              testimonio={testimonio}
              isActive={index === actual}
            />
          ))}
        </div>

        <div className="relative z-30 mt-12 flex items-center justify-center gap-3">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => setActual(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === actual
                  ? "w-8 bg-institucional-500"
                  : "w-2 bg-neutral-200 hover:bg-neutral-300"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
