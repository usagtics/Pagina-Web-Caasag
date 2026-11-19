import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { TextoDegradado } from "@/features/ui/TextoDegradado";
import { TarjetaValor } from "@/features/ui/TarjetaValor";
import { TarjetaBeneficio } from "@/features/ui/TarjetaBeneficio";
import {
  valoresAgremiacion,
  beneficiosAgremiacion,
} from "@/data/convocatoriasData";

export function SeccionAgremiacion() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 pb-24">
      <AnimacionEntrada className="text-center mb-10">
        <span className="mb-3 inline-block rounded-full bg-azul-950 px-4 py-1 text-xs font-bold uppercase tracking-widest text-institucional-400">
          Instituciones Educativas
        </span>
        <h2 className="text-3xl font-black text-azul-950 sm:text-4xl">
          Convocatoria de <TextoDegradado>Agremiación 2026</TextoDegradado>
        </h2>
      </AnimacionEntrada>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch">
        <AnimacionEntrada
          direccion="izquierda"
          retraso={0.1}
          className="lg:col-span-7 flex"
        >
          <div className="relative w-full aspect-video lg:aspect-auto rounded-3xl overflow-hidden shadow-lg group bg-neutral-200">
            <Image
              src="/nosotros2.jpeg"
              alt="Asamblea CAASAG"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-950/90 via-azul-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-medium italic text-lg sm:text-xl leading-snug drop-shadow-md">
                &ldquo;Ser CAASAG es formar parte de una red de instituciones
                educativas que impulsan, respaldan y transforman.&rdquo;
              </p>
            </div>
          </div>
        </AnimacionEntrada>

        <AnimacionEntrada
          direccion="derecha"
          retraso={0.2}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {valoresAgremiacion.map((valor, i) => (
            <TarjetaValor key={i} name={valor.name} icon={valor.icon} />
          ))}
        </AnimacionEntrada>
      </div>

      <AnimacionEntrada
        retraso={0.3}
        className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-neutral-100/50"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-azul-950">
            Beneficios de ser parte
          </h3>
          <div className="w-12 h-1 bg-institucional-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {beneficiosAgremiacion.map((beneficio, i) => (
            <TarjetaBeneficio
              key={i}
              titulo={beneficio.titulo}
              icon={beneficio.icon}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12 bg-slate-50 rounded-2xl p-6 border border-neutral-100">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
              Atención a instituciones
            </p>
            <a
              href="tel:4773089901"
              className="text-2xl font-black text-azul-950 tracking-tight hover:text-institucional-600 transition-colors"
            >
              477 308 9901
            </a>
          </div>
          <div className="hidden md:block h-10 w-px bg-neutral-200" />
          <Link
            href="/contacto"
            className="group relative inline-flex items-center gap-2 rounded-full bg-azul-950 px-8 py-4 text-xs font-bold text-white transition-all duration-300 hover:bg-institucional-500 hover:text-azul-950 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              HAZTE PARTE DE CAASAG
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </span>
          </Link>
        </div>
      </AnimacionEntrada>
    </section>
  );
}
