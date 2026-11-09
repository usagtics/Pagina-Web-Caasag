const objetivos = [
  {
    etiqueta: "01 / Alianzas",
    titulo: "Alianzas Estratégicas",
    texto:
      "Impulsar alianzas académicas que fortalezcan el desarrollo integral de las instituciones educativas.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    colSpan: "md:col-span-2",
  },
  {
    etiqueta: "02 / Tecnología",
    titulo: "Innovación Digital",
    texto:
      "Promover el uso de tecnologías educativas innovadoras en los procesos de enseñanza-aprendizaje.",
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
  {
    etiqueta: "03 / Innovación",
    titulo: "Vanguardia Educativa",
    texto:
      "Promover el uso de tecnologías educativas innovadoras en los procesos de enseñanza-aprendizaje.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "04 / Calidad",
    titulo: "Excelencia Regional",
    texto:
      "Contribuir a la mejora de la calidad educativa mediante proyectos compartidos de impacto regional.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "05 / Comunidad",
    titulo: "Red de Apoyo",
    texto:
      "Establecer una red de apoyo entre instituciones que favorezca el intercambio de conocimientos, experiencias y recursos.",
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
        <h2 className="text-3xl font-extrabold tracking-tight text-azul-900 sm:text-4xl lg:text-5xl">
          Objetivos Generales
        </h2>
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-neutral-200 border-y border-neutral-200">
          {objetivos.map((objetivo, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-between bg-white p-10 sm:p-14 lg:p-20 transition-colors duration-500 hover:bg-[#FDFDFD] ${objetivo.colSpan}`}
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-institucional-500 transition-all duration-500 group-hover:w-full"></div>

              <div className="flex flex-col gap-8 relative z-10">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-500 group-hover:text-institucional-600">
                  {objetivo.etiqueta}
                </span>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-azul-50 text-azul-800 transition-all duration-500 group-hover:bg-institucional-500 group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-institucional-500/30">
                  {objetivo.icono}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-azul-900 mb-4 transition-colors duration-500 group-hover:text-institucional-600">
                    {objetivo.titulo}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-500 font-light transition-colors duration-500 group-hover:text-neutral-700">
                    {objetivo.texto}
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
