import Image from "next/image";
import type { Convenio } from "@/data/convenios";

export default function ConvenioDestacado({
  convenio,
}: {
  convenio: Convenio;
}) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white md:flex-row">
      <div className="relative flex min-h-[260px] w-full items-center justify-center bg-slate-50 p-10 md:min-h-[320px] md:w-[42%] md:p-12">
        <div className="absolute left-0 top-0 h-full w-1 bg-dorado" />

        <div className="relative h-40 w-full max-w-[320px] md:h-48">
          <Image
            src={convenio.logoUrl}
            alt={`Logo de ${convenio.institucion}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex w-full flex-col justify-center p-8 md:w-[58%] md:p-12">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-dorado-oscuro">
          {convenio.tipo}
        </span>

        <h3 className="mb-5 text-2xl font-bold leading-tight text-azul-950 md:text-3xl">
          {convenio.institucion}
        </h3>

        <p className="text-base leading-8 text-slate-600">
          {convenio.descripcion}
        </p>

        <div className="mt-8 border-t border-slate-100 pt-5">
          <span className="text-sm font-medium text-slate-500">
            Convenio institucional
          </span>
        </div>
      </div>
    </article>
  );
}
