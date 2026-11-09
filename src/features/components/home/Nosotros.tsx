import Image from "next/image";
import Link from "next/link";

export function Nosotros() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-azul-100/60 blur-[100px] pointer-events-none"></div>
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-institucional-100/50 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 group">
            <div className="absolute -inset-4 rounded-[7rem] bg-gradient-to-tr from-institucional-500/20 to-transparent blur-2xl transition-opacity duration-500 opacity-70 group-hover:opacity-100 pointer-events-none"></div>

            <div className="relative h-[480px] w-full overflow-hidden rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-3xl rounded-bl-3xl shadow-2xl border border-white/60">
              <Image
                src="/nuestroCorporativo.jpeg"
                alt="Sobre nuestro corporativo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-azul-950/60 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-6 left-6 sm:-left-8 rounded-2xl border border-white/50 bg-white/80 p-5 shadow-[0_20px_40px_-10px_rgba(19,43,82,0.2)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-institucional-500 to-institucional-700 text-white shadow-inner">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-black text-azul-900 tracking-tight">
                    Excelencia
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-institucional-600">
                    En cada proyecto
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start text-left lg:pl-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-azul-50 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-azul-800">
                Nuestro Corporativo
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-azul-900 sm:text-5xl text-balance leading-[1.15]">
              Comprometidos con la{" "}
              <span className="text-institucional-500 relative inline-block">
                excelencia
                <span className="absolute bottom-1 left-0 w-full h-1 bg-institucional-200 rounded-full opacity-50"></span>
              </span>{" "}
              y el futuro
            </h2>

            <div className="mt-8 mb-4 h-px w-full max-w-sm bg-gradient-to-r from-azul-200 to-transparent"></div>

            <p className="text-lg leading-relaxed text-neutral-600 font-light">
              Somos una organización comprometida con la excelencia y la
              innovación, impulsando proyectos que transforman el futuro
              educativo y empresarial. Nuestra misión es crear alianzas
              estratégicas que fortalezcan el desarrollo profesional y social.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 font-light">
              Trabajamos con pasión y dedicación para brindar servicios de alta
              calidad que impulsen el crecimiento sostenible y el bienestar de
              nuestras comunidades.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/nosotros"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-institucional-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-institucional-500/30 transition-all hover:bg-institucional-400 hover:-translate-y-1"
              >
                <span className="relative z-10">Conoce nuestra historia</span>
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

              <div className="flex items-center gap-2 text-sm font-medium text-azul-900/60">
                <svg
                  className="h-5 w-5 text-institucional-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Más de 80 instituciones aliadas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
