import Image from "next/image";

const compromisos = [
  {
    titulo: "Alianzas de Alto Nivel",
    descripcion:
      "Convenios estratégicos a nivel nacional e internacional para nuestras instituciones.",
    icono: (
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    titulo: "Movilidad Académica",
    descripcion:
      "Programas de intercambio académico y docente que enriquecen la experiencia.",
    icono: (
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
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    titulo: "Innovación Educativa",
    descripcion:
      "Capacitaciones continuas y acceso a tecnologías de vanguardia para el desarrollo.",
    icono: (
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    titulo: "Proyección Social",
    descripcion:
      "Participación en foros y proyectos compartidos que generan un impacto positivo.",
    icono: (
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function Compromiso() {
  return (
    <section className="relative bg-[#F8F9FA] pb-32">
      <div className="relative w-full overflow-hidden bg-azul-950 shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/nosotros2.jpeg"
            alt="Nuestro compromiso"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-azul-950 via-azul-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-azul-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center sm:px-16 sm:py-36 lg:items-start lg:text-left lg:px-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              El Valor de la Alianza
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Lo que ofrecemos a nuestras{" "}
            <span className="text-institucional-400">instituciones</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-azul-100/80 font-light text-balance">
            Elevar la calidad educativa a través de la unión de nuestras
            instituciones, generando un ecosistema de colaboración y crecimiento
            compartido.
          </p>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-24 max-w-6xl px-4 sm:px-8">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {compromisos.map((compromiso, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start rounded-3xl bg-white p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(19,43,82,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-10px_rgba(19,43,82,0.3)] border border-neutral-100"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-azul-50 text-azul-800 transition-colors duration-500 group-hover:bg-institucional-500 group-hover:text-white group-hover:scale-110 shadow-sm">
                {compromiso.icono}
              </div>

              <h3 className="text-lg font-bold text-azul-900 mb-3 group-hover:text-institucional-600 transition-colors">
                {compromiso.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500 font-light">
                {compromiso.descripcion}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl bg-institucional-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
