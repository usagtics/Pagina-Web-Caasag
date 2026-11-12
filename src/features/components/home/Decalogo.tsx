import { FondoCuadricula } from "@/features/ui/FondoCuadricula";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { TextoDegradado } from "@/features/ui/TextoDegradado";
import { TarjetaDecalogo } from "@/features/ui/TarjetaDecalogo";
import { decalogoData } from "@/data/decalogoData";

export function Decalogo() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <FondoCuadricula size={48} colorHex="#0f172a" opacityHex="05" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl px-4 text-center mb-16">
          <EtiquetaSeccion
            texto="Código de Ética"
            className="mx-auto border-azul-100 bg-azul-50 [&>span:last-child]:text-azul-900"
          />

          <h2 className="text-3xl font-extrabold tracking-tight text-azul-950 sm:text-4xl lg:text-5xl text-balance">
            Decálogo del <TextoDegradado>Agremiado</TextoDegradado>
          </h2>

          <p className="mt-4 text-base text-neutral-500 font-light max-w-2xl mx-auto">
            Nuestros 10 compromisos fundamentales con la excelencia, la
            integridad y el futuro de la educación.
          </p>
        </div>

        <div className="w-full border-y border-neutral-200 bg-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {decalogoData.map((texto, index) => (
              <TarjetaDecalogo key={index} numero={index + 1} texto={texto} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="group relative inline-flex cursor-default items-center gap-3 rounded-full border border-azul-100 bg-white px-6 py-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-azul-50 text-azul-900">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-widest text-azul-950">
                Aprobado oficialmente
              </span>
              <span className="text-xs font-medium text-neutral-500">
                Por el Consejo Directivo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
