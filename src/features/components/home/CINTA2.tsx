import Link from "next/link";

export function CINTA2() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-azul-950 py-32">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-5 pointer-events-none select-none">
        <div className="flex w-max animate-marquee-left">
          <span className="text-[10rem] font-black uppercase leading-none text-white whitespace-nowrap">
            Excelencia • Alianzas • Futuro • Innovación •
          </span>
          <span className="text-[10rem] font-black uppercase leading-none text-white whitespace-nowrap">
            Excelencia • Alianzas • Futuro • Innovación •
          </span>
        </div>
        <div className="flex w-max animate-marquee-right">
          <span className="text-[10rem] font-black uppercase leading-none text-white whitespace-nowrap">
            Educación • Colaboración • Desarrollo •
          </span>
          <span className="text-[10rem] font-black uppercase leading-none text-white whitespace-nowrap">
            Educación • Colaboración • Desarrollo •
          </span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-institucional-500 mb-8 block">
          El siguiente paso es tuyo
        </span>

        <h2 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-7xl lg:text-8xl tracking-tighter text-balance mb-12">
          Juntos somos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 via-institucional-500 to-institucional-300">
            más fuertes.
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          <Link
            href="/afiliacion"
            className="group flex flex-col items-center gap-2 outline-none"
          >
            <span className="text-2xl font-bold text-white transition-colors group-hover:text-institucional-400 flex items-center gap-3">
              Afiliar mi institución
              <svg
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="h-0.5 w-0 bg-institucional-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contacto"
            className="group flex flex-col items-center gap-2 outline-none"
          >
            <span className="text-xl font-medium text-azul-100/60 transition-colors group-hover:text-white flex items-center gap-3">
              Solicitar información
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
