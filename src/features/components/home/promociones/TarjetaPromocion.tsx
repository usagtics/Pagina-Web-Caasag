import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Promocion } from "@/data/promocionesData";

interface TarjetaPromocionProps {
  promocion: Promocion;
}

export function TarjetaPromocion({ promocion }: TarjetaPromocionProps) {
  const {
    etiqueta,
    titulo,
    descripcion,
    imagen,
    alt,
    meta,
    textoBoton,
    href,
    oscuro,
  } = promocion;

  return (
    <article
      className={`flex flex-col md:flex-row overflow-hidden rounded-2xl border ${
        oscuro
          ? "bg-azul-950 text-white border-azul-900"
          : "bg-slate-50 text-azul-950 border-neutral-200"
      }`}
    >
      <div className="w-full md:w-80 lg:w-96 shrink-0 bg-azul-950 flex items-center justify-center">
        <Image
          src={imagen}
          alt={alt}
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 384px"
          className="w-full h-auto block"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        <p
          className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
            oscuro ? "text-institucional-400" : "text-institucional-600"
          }`}
        >
          {etiqueta}
        </p>

        <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
          {titulo}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-4 ${
            oscuro ? "text-azul-100" : "text-neutral-600"
          }`}
        >
          {descripcion}
        </p>

        <p
          className={`text-xs font-medium mb-6 ${
            oscuro ? "text-azul-200" : "text-neutral-500"
          }`}
        >
          {meta}
        </p>

        <Link
          href={href}
          className={`group inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
            oscuro
              ? "bg-institucional-500 text-azul-950 hover:bg-white"
              : "bg-azul-950 text-white hover:bg-institucional-500 hover:text-azul-950"
          }`}
        >
          {textoBoton}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
