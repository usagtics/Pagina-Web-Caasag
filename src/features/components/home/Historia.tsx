import { FondoCuadricula } from "@/features/ui/FondoCuadricula";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { siteConfig } from "@/shared/config/site";

export function Historia() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col overflow-hidden bg-azul-950 lg:flex-row">
      <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/10 blur-3xl pointer-events-none" />

      <FondoCuadricula />

      <div className="relative z-20 flex w-full flex-col justify-center px-6 py-24 sm:px-12 lg:w-[45%] lg:px-16 xl:px-24">
        <AnimacionEntrada direccion="izquierda">
          <EtiquetaSeccion texto="Nuestra Trayectoria" />

          <h2 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Antecedentes
          </h2>

          <div className="relative mb-10 border-l-2 border-institucional-500 pl-6 sm:pl-8">
            <p className="mb-6 text-lg font-light leading-loose text-azul-100/90">
              El{" "}
              <strong className="font-semibold text-white">
                {siteConfig.contact.name}
              </strong>{" "}
              surge el{" "}
              <strong className="font-semibold text-white">
                14 de noviembre del 2024
              </strong>{" "}
              en la ciudad de León, Guanajuato, México, como respuesta a la
              urgente necesidad de fortalecer las condiciones educativas en la
              región.
            </p>
            <p className="text-base font-light leading-loose text-azul-100/70 sm:text-lg">
              Reconociendo que solo mediante la colaboración interinstitucional,
              el uso estratégico de la tecnología y el compromiso con la
              excelencia académica, se pueden generar soluciones sostenibles
              para los retos del presente y el futuro.
            </p>
          </div>
        </AnimacionEntrada>
      </div>

      <AnimacionEntrada
        direccion="derecha"
        retraso={0.2}
        className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-full"
      >
        <div className="absolute inset-y-0 left-0 z-20 w-24 lg:w-48 bg-gradient-to-r from-azul-950 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-azul-950 to-transparent lg:hidden pointer-events-none" />

        <video
          src="/videito1.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          poster="/carrousel.jpeg"
          className="h-full w-full object-cover"
        >
          Tu navegador no soporta la reproducción de video.
        </video>

        <div className="absolute top-8 right-8 z-20 rounded-2xl border border-white/50 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-md">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-institucional-600">
            Fundación
          </p>
          <p className="text-xl font-black leading-none text-azul-950">
            14 Nov, 2024
          </p>
        </div>
      </AnimacionEntrada>
    </section>
  );
}
