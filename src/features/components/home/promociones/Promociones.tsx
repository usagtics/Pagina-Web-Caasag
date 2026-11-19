import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { promocionesDestacadas } from "@/data/promocionesData";
import { TarjetaPromocion } from "./TarjetaPromocion";

export function Promociones() {
  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-institucional-600 mb-1">
              Destacados 2026
            </p>
            <h2 className="text-2xl font-bold text-azul-950 sm:text-3xl">
              Próximos Eventos y Convocatorias
            </h2>
          </div>

          <Link
            href="/convocatorias"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-azul-950 hover:text-institucional-600 transition-colors"
          >
            Ver todas las convocatorias
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-6">
          {promocionesDestacadas.map((promo, i) => (
            <AnimacionEntrada
              key={promo.id}
              direccion={i % 2 === 0 ? "izquierda" : "derecha"}
              retraso={0.1 * (i + 1)}
            >
              <TarjetaPromocion promocion={promo} />
            </AnimacionEntrada>
          ))}
        </div>
      </div>
    </section>
  );
}
