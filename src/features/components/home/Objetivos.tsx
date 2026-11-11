const beneficios = [
  {
    etiqueta: "01 / Innovación",
    titulo: "Innovación educativa y tecnológica",
    texto:
      "Impulsamos la adopción de nuevas herramientas y metodologías digitales para transformar la enseñanza en nuestras instituciones aliadas.",
    icono: (
      <svg
        className="h-7 w-7"
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
    colSpan: "md:col-span-2",
  },
  {
    etiqueta: "02 / Vinculación",
    titulo: "Vinculación académica interinstitucional",
    texto:
      "Creamos puentes de colaboración entre escuelas y universidades para compartir experiencias, recursos y mejores prácticas.",
    icono: (
      <svg
        className="h-7 w-7"
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
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "03 / Asesoría",
    titulo: "Consultoría y asesoría educativa",
    texto:
      "Brindamos acompañamiento especializado para la mejora continua de los procesos académicos y administrativos de tu institución.",
    icono: (
      <svg
        className="h-7 w-7"
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
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "04 / Excelencia",
    titulo: "Actualización permanente",
    texto:
      "Fomentamos la capacitación constante de docentes y directivos para mantener los más altos estándares de excelencia educativa.",
    icono: (
      <svg
        className="h-7 w-7"
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
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "05 / Digital",
    titulo: "Plataformas virtuales y entornos digitales",
    texto:
      "Facilitamos el acceso a herramientas tecnológicas que potencian el aprendizaje, la gestión escolar y la conexión remota.",
    icono: (
      <svg
        className="h-7 w-7"
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
    colSpan: "md:col-span-1",
  },
];

export function Objetivos() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mb-16">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-institucional-600">
          Lo que ofrecemos
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-azul-900 sm:text-4xl lg:text-5xl">
          Beneficios CAASAG
        </h2>
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-neutral-200 border-y border-neutral-200">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-between bg-white p-10 sm:p-14 lg:p-20 transition-colors duration-500 hover:bg-[#FDFDFD] ${beneficio.colSpan}`}
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-institucional-500 transition-all duration-500 group-hover:w-full"></div>

              <div className="flex flex-col gap-8 relative z-10">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-500 group-hover:text-institucional-600">
                  {beneficio.etiqueta}
                </span>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-azul-50 text-azul-800 transition-all duration-500 group-hover:bg-institucional-500 group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-institucional-500/30">
                  {beneficio.icono}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-azul-900 mb-4 transition-colors duration-500 group-hover:text-institucional-600">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-500 font-light transition-colors duration-500 group-hover:text-neutral-700">
                    {beneficio.texto}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
