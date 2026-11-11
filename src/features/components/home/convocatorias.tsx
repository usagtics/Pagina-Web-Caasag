import Image from "next/image";
import Link from "next/link";

export function Convocatorias() {
  return (
    <main className="relative min-h-screen w-full bg-[#F8F9FA] overflow-hidden">
      <section className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden bg-azul-950">
        <Image
          src="/asamblea1/primera-asamblea1.jpg"
          alt="Convocatorias CAASAG"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mt-8">
          <span className="anim-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-institucional-500 animate-pulse"></span>
            Oportunidades 2026
          </span>
          <h1 className="anim-fade-up delay-100 text-4xl font-black text-white sm:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
            Convocatorias <span className="text-institucional-400">CAASAG</span>
          </h1>
          <p className="anim-fade-up delay-200 mx-auto max-w-xl text-sm text-azul-100 font-light sm:text-base">
            Forma parte de nuestra red de colaboración. Descubre las
            oportunidades que tenemos para tu empresa y tu institución
            educativa.
          </p>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-12 w-full max-w-[1200px] px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="anim-fade-up delay-100 flex flex-col justify-center rounded-[2rem] bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-neutral-100/50">
            <div className="inline-flex items-center gap-2 rounded-full bg-azul-50 px-3 py-1.5 mb-6 w-fit">
              <svg
                className="h-3 w-3 text-azul-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest text-azul-900">
                Dirigido a Empresas
              </span>
            </div>

            <h2 className="text-3xl font-black text-azul-950 sm:text-4xl lg:text-5xl leading-tight mb-4">
              Convocatoria <br />
              <span className="text-institucional-500">Proveedores 2026</span>
            </h2>

            <p className="text-neutral-600 text-base mb-8 font-light leading-relaxed">
              En CAASAG estamos integrando nuevos proveedores para ofrecer
              soluciones de calidad a una red de{" "}
              <strong className="text-azul-950">
                más de 150 universidades
              </strong>{" "}
              e instituciones educativas.
            </p>

            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Giros que buscamos:
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Uniformes",
                "Seguros",
                "Material y Equipo",
                "Seguridad",
                "Innovación Tecnológica",
                "Soluciones Financieras",
                "Desarrollo Web",
                "Redes Sociales",
              ].map((item, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-[#F8F9FA] border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-azul-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-azul-300 hover:shadow-md hover:text-institucional-600 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="anim-fade-up delay-200 relative flex flex-col justify-center overflow-hidden rounded-[2rem] bg-azul-950 p-8 sm:p-12 shadow-[0_8px_30px_rgb(19,43,82,0.15)]">
            <Image
              src="/plantabosch/foto1-plantabosch.jpg"
              alt="Proveedores CAASAG"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-10 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-azul-950/80"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-institucional-500 text-azul-950 shadow-lg">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Red de Aliados</h3>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Mayor visibilidad para tu empresa.",
                  "Conecta con más de 150 instituciones.",
                  "Genera nuevas oportunidades de negocio.",
                  "Establece alianzas estratégicas.",
                ].map((beneficio, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                  >
                    <svg
                      className="h-5 w-5 text-institucional-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-azul-100 text-sm sm:text-base">
                      {beneficio}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/10 p-5 text-center shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-widest text-azul-300 mb-1">
                  Para más información
                </p>
                <p className="text-3xl font-black text-white">479 228 6990</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-4 lg:px-8 pb-24">
        <div className="anim-fade-up text-center mb-10 relative z-10">
          <span className="mb-3 inline-block rounded-full bg-azul-950 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-institucional-400">
            Instituciones Educativas
          </span>
          <h2 className="text-3xl font-black text-azul-950 sm:text-4xl">
            Convocatoria de{" "}
            <span className="text-institucional-500">Agremiación 2026</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="anim-fade-up delay-100 lg:col-span-7 relative aspect-video lg:aspect-auto rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] group bg-neutral-200">
            <Image
              src="/nosotros2.jpeg"
              alt="Asamblea CAASAG"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-950/90 via-azul-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8 transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-white font-medium italic text-lg sm:text-xl leading-snug drop-shadow-md">
                "Ser CAASAG es formar parte de una red de instituciones
                educativas que impulsan, respaldan y transforman."
              </p>
            </div>
          </div>

          <div className="anim-fade-up delay-200 lg:col-span-5 flex flex-col gap-4">
            {[
              {
                name: "Colaboración",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                name: "Innovación",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                name: "Vinculación",
                icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
              },
              { name: "Crecimiento", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            ].map((valor, i) => (
              <div
                key={i}
                className="group flex flex-1 items-center gap-5 rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F8F9FA] text-azul-950 transition-all duration-300 group-hover:bg-azul-950 group-hover:text-institucional-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={valor.icon}
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-bold text-azul-950 uppercase tracking-wider">
                  {valor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="anim-fade-up delay-300 rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100/50">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-azul-950">
              Beneficios de ser parte
            </h3>
            <div className="w-12 h-1 bg-institucional-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              {
                titulo: "Innovación educativa y tecnológica",
                icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
              },
              {
                titulo: "Vinculación académica interinstitucional",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                titulo: "Consultoría y asesoría educativa",
                icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
              },
              {
                titulo: "Actualización permanente",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                titulo: "Plataformas virtuales",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
            ].map((beneficio, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center gap-3 rounded-2xl bg-[#F8F9FA] p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-neutral-100"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-azul-950 transition-all duration-500 group-hover:bg-institucional-50 group-hover:text-institucional-600 group-hover:scale-110">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={beneficio.icon}
                    />
                  </svg>
                </div>
                <p className="text-[11px] sm:text-xs font-bold leading-tight text-azul-950 transition-colors group-hover:text-institucional-600">
                  {beneficio.titulo}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12 bg-[#F8F9FA] rounded-2xl p-6">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                Atención a instituciones
              </p>
              <p className="text-2xl font-black text-azul-950">477 308 9901</p>
            </div>
            <div className="hidden md:block h-10 w-px bg-neutral-300"></div>
            <Link
              href="/contacto"
              className="btn-shine group relative rounded-full bg-azul-950 px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-institucional-500 hover:text-azul-950 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                HAZ PARTE DE CAASAG
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
