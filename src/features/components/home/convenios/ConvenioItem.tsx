import Image from "next/image";
import type { Convenio } from "@/data/convenios";

export default function ConvenioItem({ convenio }: { convenio: Convenio }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-300 hover:border-dorado/70">
      <div className="relative flex h-[230px] items-center justify-center bg-white px-8 py-10 sm:h-[250px]">
        <div className="relative h-full w-full max-w-[300px] transition-transform duration-300 group-hover:scale-[1.04]">
          <Image
            src={convenio.logoUrl}
            alt={`Logo de ${convenio.institucion}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain"
          />
        </div>

        <span className="absolute bottom-4 left-5 border-l-2 border-dorado pl-2 text-[10px] font-semibold uppercase tracking-wider text-dorado-oscuro">
          {convenio.tipo}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t border-slate-100 bg-slate-50/50 px-6 py-6">
        <h3 className="text-lg font-bold leading-snug text-azul-950">
          {convenio.institucion}
        </h3>

        <div className="mb-4 mt-3 h-[2px] w-65 bg-dorado" />

        <p className="flex-1 text-sm leading-7 text-slate-600">
          {convenio.descripcion}
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-4">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-slate-500">
            Convenio vigente
          </span>
        </div>
      </div>
    </article>
  );
}
