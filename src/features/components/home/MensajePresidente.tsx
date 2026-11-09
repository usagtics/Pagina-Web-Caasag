import Image from "next/image";

export function MensajePresidente() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-institucional-500/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div
            className="relative lg:col-span-5 order-1 flex justify-center opacity-0 animate-[fadeInLeft_1s_ease-out_forwards]"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[3rem] rounded-tr-none border border-institucional-500/30 pointer-events-none"></div>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] rounded-tr-none bg-neutral-100 shadow-2xl">
                <Image
                  src="/rector.jpeg"
                  alt="Presidente del CAASAG"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 sm:-right-10 bg-white p-6 shadow-xl border-l-4 border-institucional-500 rounded-r-2xl">
                <p className="text-xl font-black text-azul-950 tracking-tight">
                  Dr. Edgar Ruben Medina Rivero
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-institucional-600 mt-1">
                  Presidente del Colegiado
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative lg:col-span-7 order-2 flex flex-col justify-center opacity-0 animate-[fadeInRight_1s_ease-out_forwards]"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-institucional-500"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-azul-900">
                Mensaje de la Presidencia
              </span>
            </div>

            <div className="absolute -top-12 -left-8 text-[10rem] font-serif text-neutral-100 select-none pointer-events-none leading-none opacity-50">
              “
            </div>

            <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-azul-950 font-serif text-balance mb-6">
              Cuando unimos esfuerzos, los resultados son extraordinarios.
              Creemos en el poder de la{" "}
              <span className="text-institucional-500 italic">
                colaboración
              </span>{" "}
              para impulsar el crecimiento constante de nuestras instituciones
              educativas y garantizar una educación de la más alta calidad.
            </h2>

            <p className="relative z-10 text-base sm:text-lg leading-relaxed text-neutral-500 font-light max-w-2xl mb-10">
              Mi compromiso es trabajar de la mano con cada institución aliada
              para fortalecer sus proyectos, mejorar sus procesos y elevar sus
              estándares académicos.
            </p>

            <div
              className="flex items-center gap-5 border-t border-neutral-100 pt-8 opacity-0 animate-[fadeInRight_1s_ease-out_forwards]"
              style={{ animationDelay: "800ms" }}
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/caasag-colores.png"
                  alt="Logo CAASAG"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-black text-azul-950 tracking-widest uppercase">
                  Colegiado de Alianzas Académicas
                </p>
                <p className="text-xs text-neutral-400 font-bold tracking-widest uppercase mt-1">
                  San Andrés de Guanajuato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
