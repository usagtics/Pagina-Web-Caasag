import { FondoCuadricula } from "@/features/ui/FondoCuadricula";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";

export function CintilloInstituciones() {
  return (
    <section className="relative w-full overflow-hidden bg-azul-950 py-16 sm:py-20 border-y border-institucional-500/30">
      <FondoCuadricula size={40} colorHex="#ffffff" opacityHex="03" />

      <div className="absolute top-1/2 left-1/2 h-72 w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <EtiquetaSeccion
              texto="Nuestro Compromiso"
              className="mx-auto lg:mx-0 border-institucional-500/30 bg-white/5"
            />

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Fortalecer la educación a través de{" "}
              <span className="text-institucional-400">alianzas sólidas</span>.
            </h2>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-6 sm:flex-row lg:flex-col lg:items-end lg:gap-8">
            <div className="text-center lg:text-right">
              <p className="text-4xl font-black text-white sm:text-5xl">+80</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-azul-100/60">
                Instituciones Aliadas
              </p>
            </div>

            <div className="hidden h-px w-full bg-white/10 sm:block lg:h-px lg:w-24" />

            <div className="text-center lg:text-right">
              <p className="text-4xl font-black text-white sm:text-5xl">100%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-azul-100/60">
                Compromiso Educativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
