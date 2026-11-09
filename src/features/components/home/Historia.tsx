import Image from "next/image";

export function Historia() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col overflow-hidden bg-azul-950 lg:flex-row">
      <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-20 flex w-full flex-col justify-center px-6 py-24 sm:px-12 lg:w-[45%] lg:px-16 xl:px-24">
        <div className="animate-[fadeInLeft_1s_ease-out_forwards] opacity-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-azul-100">
              Nuestra Trayectoria
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
            Antecedentes
          </h2>

          <div className="relative border-l-2 border-institucional-500 pl-6 sm:pl-8 mb-10">
            <p className="text-lg leading-loose text-azul-100/90 font-light mb-6">
              El <strong className="font-semibold text-white">CAASAG</strong>{" "}
              surge el{" "}
              <strong className="font-semibold text-white">
                14 de noviembre del 2024
              </strong>{" "}
              en la ciudad de León, Guanajuato, México, como respuesta a la
              urgente necesidad de fortalecer las condiciones educativas en la
              región.
            </p>
            <p className="text-base sm:text-lg leading-loose text-azul-100/70 font-light">
              Reconociendo que solo mediante la colaboración interinstitucional,
              el uso estratégico de la tecnología y el compromiso con la
              excelencia académica, se pueden generar soluciones sostenibles
              para los retos del presente y el futuro.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-full animate-[fadeInRight_1s_ease-out_forwards] opacity-0">
        <div className="absolute inset-y-0 left-0 z-20 w-24 lg:w-48 bg-gradient-to-r from-azul-950 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-azul-950 to-transparent lg:hidden pointer-events-none"></div>

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

        <div className="absolute top-8 right-8 z-20 rounded-2xl bg-white/90 px-6 py-4 shadow-xl backdrop-blur-md border border-white/50">
          <p className="text-[10px] font-bold uppercase tracking-widest text-institucional-600 mb-1">
            Fundación
          </p>
          <p className="text-xl font-black text-azul-950 leading-none">
            14 Nov, 2024
          </p>
        </div>
      </div>
    </section>
  );
}
