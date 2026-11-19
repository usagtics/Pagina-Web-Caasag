import Image from "next/image";
import { Briefcase, Zap, Check } from "lucide-react";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import {
  girosProveedores,
  beneficiosProveedores,
} from "@/data/convocatoriasData";

export function SeccionProveedores() {
  return (
    <section className="relative z-20 mx-auto -mt-12 w-full max-w-7xl px-4 lg:px-8 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <AnimacionEntrada direccion="izquierda" retraso={0.1} className="flex">
          <div className="flex w-full flex-col justify-center rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-neutral-100/50">
            <div className="inline-flex items-center gap-2 rounded-full bg-azul-50 px-3 py-1.5 mb-6 w-fit border border-azul-100">
              <Briefcase className="h-3 w-3 text-azul-900" strokeWidth={2} />
              <span className="text-xs font-bold uppercase tracking-widest text-azul-900">
                Dirigido a Empresas
              </span>
            </div>

            <h2 className="text-3xl font-black text-azul-950 sm:text-4xl lg:text-5xl leading-tight mb-4">
              Convocatoria <br />
              <span className="text-institucional-500">Proveedores 2026</span>
            </h2>

            <p className="text-neutral-600 text-base mb-8 font-light leading-relaxed">
              En CAASAG estamos integrando nuevos proveedores para ofrecer
              soluciones de calidad a una red de{" "}
              <strong className="text-azul-950 font-semibold">
                más de 150 universidades
              </strong>{" "}
              e instituciones educativas.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Giros que buscamos:
            </h3>

            <div className="flex flex-wrap gap-2">
              {girosProveedores.map((item, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-slate-50 border border-neutral-200 px-3.5 py-1.5 text-xs font-semibold text-azul-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimacionEntrada>

        <AnimacionEntrada direccion="derecha" retraso={0.2} className="flex">
          <div className="relative flex w-full flex-col justify-center overflow-hidden rounded-3xl bg-azul-950 p-8 sm:p-12 shadow-2xl">
            <Image
              src="/plantabosch/foto1-plantabosch.jpg"
              alt="Proveedores CAASAG"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-10 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-azul-950/80 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-institucional-500 text-azul-950 shadow-lg">
                  <Zap className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white">Red de Aliados</h3>
              </div>

              <ul className="space-y-4 mb-10">
                {beneficiosProveedores.map((beneficio, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className="h-5 w-5 text-institucional-400 shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-azul-100 text-sm sm:text-base font-light">
                      {beneficio}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 text-center shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-azul-300 mb-1">
                  Para más información
                </p>
                <a
                  href="tel:4792286990"
                  className="text-3xl font-black text-white tracking-tight hover:text-institucional-400 transition-colors"
                >
                  479 228 6990
                </a>
              </div>
            </div>
          </div>
        </AnimacionEntrada>
      </div>
    </section>
  );
}
