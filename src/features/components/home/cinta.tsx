import Link from "next/link";

export function CINTA() {
  return (
    <section className="relative overflow-hidden bg-azul-900 py-24 sm:py-32">
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-institucional-500/20 blur-[100px]"></div>
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]"></div>

      <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-institucional-500 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <span className="inline-block rounded-full bg-institucional-500/10 px-4 py-1.5 text-sm font-semibold text-institucional-400 mb-6 border border-institucional-500/20">
          Da el siguiente paso
        </span>

        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-azul-100 to-azul-300 text-balance">
          Construyamos juntos el futuro de la región
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-azul-200/80 leading-relaxed">
          Contáctanos para conocer más sobre nuestras alianzas, proyectos de
          innovación y cómo podemos colaborar para transformar la educación.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/contacto"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-institucional-500 px-8 py-4 text-sm font-bold text-white shadow-[0_0_40px_rgba(163,153,93,0.3)] transition-all hover:scale-105 hover:bg-institucional-400 hover:shadow-[0_0_60px_rgba(163,153,93,0.5)]"
          >
            <span className="relative z-10">Contactar ahora</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <Link
            href="/nosotros"
            className="inline-flex items-center justify-center rounded-full border border-azul-700 bg-azul-800/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-azul-700 hover:scale-105"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
}
