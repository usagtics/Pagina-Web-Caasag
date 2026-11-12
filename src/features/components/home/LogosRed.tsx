import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { TextoDegradado } from "@/features/ui/TextoDegradado";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { CarruselLogos } from "@/features/ui/CarruselLogos";

export function LogosRed() {
  const logos = Array.from(
    { length: 30 },
    (_, i) => `/logosagremiados/logo${i + 1}.png`,
  );

  const fila1 = logos.slice(0, 8);
  const fila2 = logos.slice(8, 16);
  const fila3 = logos.slice(16, 24);
  const fila4 = logos.slice(24, 30);

  return (
    <section
      id="directorio"
      className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-slate-50 py-24"
    >
      <div className="absolute top-1/2 left-1/2 h-[40rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/5 blur-3xl pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-6 opacity-60 pointer-events-none">
        <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

        <CarruselLogos logos={fila1} direccion="left" duracion="40s" />
        <CarruselLogos logos={fila2} direccion="right" duracion="60s" />
        <CarruselLogos logos={fila3} direccion="left" duracion="70s" />
        <CarruselLogos logos={fila4} direccion="right" duracion="55s" />
      </div>

      <div className="relative z-20 w-full py-16 bg-gradient-to-r from-transparent via-white/80 to-transparent backdrop-blur-xs">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
          <AnimacionEntrada direccion="arriba" retraso={0.1}>
            <EtiquetaSeccion
              texto="Directorio Oficial"
              className="border-neutral-200 bg-white shadow-sm [&>span:last-child]:text-azul-900"
            />
          </AnimacionEntrada>

          <AnimacionEntrada direccion="arriba" retraso={0.3}>
            <h2 className="text-3xl font-extrabold tracking-tight text-azul-950 sm:text-4xl lg:text-5xl">
              Nuestras <TextoDegradado>Instituciones</TextoDegradado>
            </h2>
          </AnimacionEntrada>

          <AnimacionEntrada direccion="arriba" retraso={0.5}>
            <p className="mt-4 max-w-2xl text-base font-light text-neutral-500 sm:text-lg">
              Desliza para descubrir la red de instituciones que construyen el
              futuro de la educación con nosotros.
            </p>
          </AnimacionEntrada>
        </div>
      </div>
    </section>
  );
}
