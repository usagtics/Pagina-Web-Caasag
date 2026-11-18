"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroConveniosData } from "@/data/convenios";
import { TransicionCortina } from "@/features/ui/TransicionCortina";

export default function HeroConvenios() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isWiping, setIsWiping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const initialTimeout = setTimeout(() => {
      setIsWiping(false);
    }, 600);

    const interval = setInterval(() => {
      setIsWiping(true);

      timeout = setTimeout(() => {
        setCurrentImage(
          (prev) => (prev + 1) % heroConveniosData.imagenesFondo.length,
        );

        setIsWiping(false);
      }, 1100);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex h-[75vh] min-h-[600px] w-full items-center justify-center overflow-hidden">
      {heroConveniosData.imagenesFondo.map((imagen, index) => (
        <Image
          key={imagen}
          src={imagen}
          alt={`Firma de convenios Cassag - Foto ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 z-0 bg-azul-950/60 mix-blend-multiply" />

      <div className="absolute top-0 left-0 z-[1] h-1 w-full bg-gradient-to-r from-dorado-oscuro via-dorado to-dorado-claro" />

      <div className="relative z-10 mx-auto mt-12 flex max-w-4xl flex-col items-center px-4 text-center">
        <div className="mb-8 flex items-center gap-2 rounded-full border border-dorado/50 bg-dorado/15 px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-dorado-claro" />

          <span className="text-[10px] font-bold uppercase tracking-widest text-dorado-claro sm:text-xs">
            {heroConveniosData.badge}
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          {heroConveniosData.titulo}
          <br className="hidden md:block" />

          <span className="text-dorado">
            {heroConveniosData.tituloDestacado}
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
          {heroConveniosData.subtitulo}
        </p>
      </div>

      <TransicionCortina isWiping={isWiping} />
    </section>
  );
}
