import Image from "next/image";
import { FondoCuadricula } from "@/features/ui/FondoCuadricula";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { TextoDegradado } from "@/features/ui/TextoDegradado";

export function HeroNosotros() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col overflow-hidden bg-azul-950 lg:min-h-[80vh] lg:flex-row">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-institucional-500/10 via-azul-950 to-azul-950" />
        <FondoCuadricula />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-center px-6 py-24 sm:px-12 lg:w-[55%] lg:px-20 xl:px-28">
        <div className="relative z-10">
          <AnimacionEntrada direccion="izquierda" alCargar>
            <EtiquetaSeccion texto="Sobre Nosotros" />
          </AnimacionEntrada>

          <AnimacionEntrada direccion="izquierda" retraso={0.15} alCargar>
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl tracking-tight">
              Educación que genera <br className="hidden sm:block" />
              <TextoDegradado>oportunidades</TextoDegradado>, alianzas que
              transforman.
            </h1>
          </AnimacionEntrada>

          <AnimacionEntrada
            direccion="izquierda"
            retraso={0.3}
            alCargar
            className="mt-8 flex gap-6"
          >
            <div className="hidden w-1.5 rounded-full bg-institucional-500 sm:block" />
            <p className="max-w-xl text-balance text-lg font-light leading-relaxed text-azul-100/80 lg:text-xl">
              En CAASAG creemos que las instituciones educativas privadas
              tenemos un papel fundamental en la construcción de un mejor futuro
              para nuestra región.
            </p>
          </AnimacionEntrada>
        </div>
      </div>

      <div className="relative w-full overflow-hidden lg:w-[45%] min-h-[400px] lg:min-h-full">
        <div className="absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-azul-950 to-transparent pointer-events-none lg:w-32" />
        <div className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-azul-950 to-transparent pointer-events-none lg:hidden" />

        <AnimacionEntrada
          direccion="derecha"
          retraso={0.2}
          alCargar
          className="relative h-full w-full"
        >
          <Image
            src="/conocenos4.png"
            alt="Conócenos CAASAG"
            fill
            className="object-cover object-center"
            priority
          />
        </AnimacionEntrada>

        <div className="absolute inset-0 z-10 mix-blend-overlay bg-azul-900/10 pointer-events-none" />
      </div>
    </section>
  );
}
