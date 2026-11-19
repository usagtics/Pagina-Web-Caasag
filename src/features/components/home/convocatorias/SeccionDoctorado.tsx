import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  UserCheck,
  GraduationCap,
  Handshake,
  TrendingUp,
  MonitorPlay,
  Award,
  ArrowRight,
} from "lucide-react";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { beneficiosDoctorado } from "@/data/convocatoriasData";

const iconosDoctorado = [
  Globe,
  UserCheck,
  GraduationCap,
  Handshake,
  TrendingUp,
  MonitorPlay,
];

export function SeccionDoctorado() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 pb-24">
      <div className="overflow-hidden rounded-3xl bg-azul-950 shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <AnimacionEntrada
            direccion="izquierda"
            retraso={0.1}
            className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-institucional-400 mb-3">
              Colegio Oficial Internacional de Doctores
            </p>

            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight mb-2">
              Colegiatura Oficial
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-institucional-400 mb-8">
              Doctorado Honoris Causa
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {beneficiosDoctorado.map((texto, i) => {
                const Icono = iconosDoctorado[i];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-institucional-400">
                      <Icono className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-azul-100 font-light leading-snug pt-1">
                      {texto}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 rounded-2xl bg-institucional-500/15 border border-institucional-400/30 p-4 mb-8">
              <Award className="h-6 w-6 text-institucional-400 shrink-0" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white">
                Incluye toga, birrete, diploma y medalla
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <p className="text-sm italic text-azul-200">
                Únase a una comunidad internacional de excelencia académica.
              </p>
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-institucional-500 px-6 py-3 text-xs font-bold text-azul-950 transition-colors hover:bg-white shrink-0"
              >
                SOLICITAR INFORMACIÓN
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimacionEntrada>

          <AnimacionEntrada
            direccion="derecha"
            retraso={0.2}
            className="lg:col-span-5 flex items-center justify-center bg-azul-950 p-4 sm:p-6"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/honoris.jpg"
                alt="Colegiatura Oficial Doctorado Honoris Causa"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain rounded-2xl"
              />
            </div>
          </AnimacionEntrada>
        </div>
      </div>
    </section>
  );
}
