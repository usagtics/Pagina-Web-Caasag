"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MensajePresidente() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-institucional-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:col-span-5 order-1 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl rounded-tr-none border border-institucional-500/30 pointer-events-none" />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl rounded-tr-none bg-neutral-100 shadow-2xl">
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
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-institucional-600">
                  Presidente del Colegiado
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:col-span-7 order-2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-institucional-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-azul-900">
                Mensaje de la Presidencia
              </span>
            </div>

            <div className="absolute -top-12 -left-8 text-9xl font-serif text-neutral-100 select-none pointer-events-none leading-none opacity-50">
              “
            </div>

            <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl leading-snug text-azul-950 font-serif text-balance mb-6">
              Cuando unimos esfuerzos, los resultados son extraordinarios.
              Creemos en el poder de la{" "}
              <span className="text-institucional-500 italic">
                colaboración
              </span>{" "}
              para impulsar el crecimiento constante de nuestras instituciones
              educativas y garantizar una educación de la más alta calidad.
            </h2>

            <p className="relative z-10 mb-10 max-w-2xl text-base font-light leading-relaxed text-neutral-500 sm:text-lg">
              Mi compromiso es trabajar de la mano con cada institución aliada
              para fortalecer sus proyectos, mejorar sus procesos y elevar sus
              estándares académicos.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-5 border-t border-neutral-100 pt-8"
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
                <p className="text-sm font-black tracking-widest text-azul-950 uppercase">
                  Colegiado de Alianzas Académicas
                </p>
                <p className="mt-1 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  San Andrés de Guanajuato
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
