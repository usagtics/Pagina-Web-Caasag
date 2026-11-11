import Image from "next/image";

const compromisos = [
  {
    titulo: "Innovación educativa y tecnológica",
    descripcion:
      "Impulsamos la adopción de nuevas herramientas y metodologías digitales para transformar la enseñanza.",
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
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    titulo: "Vinculación académica interinstitucional",
    descripcion:
      "Creamos puentes de colaboración entre escuelas y universidades para compartir experiencias y recursos.",
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    titulo: "Consultoría y asesoría educativa",
    descripcion:
      "Brindamos acompañamiento especializado para la mejora continua de los procesos académicos.",
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
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    titulo: "Actualización permanente",
    descripcion:
      "Fomentamos la capacitación constante de docentes y directivos para mantener altos estándares.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    titulo: "Plataformas virtuales y entornos digitales",
    descripcion:
      "Facilitamos el acceso a herramientas tecnológicas que potencian el aprendizaje y la gestión escolar.",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center sm:px-16 sm:py-36 lg:items-start lg:px-20 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-institucional-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              El Valor de la Alianza
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Lo que ofrecemos a nuestras{" "}
            <span className="text-institucional-400">instituciones</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-light text-azul-100/80 text-balance sm:text-xl">
            Elevar la calidad educativa a través de la unión de nuestras
            instituciones, generando un ecosistema de colaboración y crecimiento
            compartido.
          </p>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 sm:gap-5">
          {compromisos.map((compromiso, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0_15px_40px_-10px_rgba(19,43,82,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-10px_rgba(19,43,82,0.3)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-azul-50 text-azul-800 shadow-sm transition-colors duration-500 group-hover:scale-110 group-hover:bg-institucional-500 group-hover:text-white">
                {compromiso.icono}
              </div>

              <h3 className="mb-3 text-base font-bold leading-tight text-azul-900 transition-colors group-hover:text-institucional-600">
                {compromiso.titulo}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-500 font-light sm:text-sm">
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
