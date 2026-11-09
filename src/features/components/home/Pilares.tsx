export function Pilares() {
  const pilares = [
    {
      titulo: "Excelencia Académica",
      descripcion:
        "Promovemos la calidad educativa y la formación integral de los futuros profesionales de Guanajuato.",
      icono: (
        <svg
          className="h-8 w-8 text-institucional-500 transition-transform duration-300 group-hover:scale-110"
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
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      titulo: "Vinculación Institucional",
      descripcion:
        "Creamos alianzas estratégicas entre instituciones para potenciar el desarrollo regional.",
      icono: (
        <svg
          className="h-8 w-8 text-institucional-500 transition-transform duration-300 group-hover:scale-110"
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
    },
    {
      titulo: "Investigación y Desarrollo",
      descripcion:
        "Fomentamos proyectos de investigación que generan un impacto positivo en nuestra sociedad.",
      icono: (
        <svg
          className="h-8 w-8 text-institucional-500 transition-transform duration-300 group-hover:scale-110"
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
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#132B52 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-institucional-600">
            Nuestros Pilares
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-azul-800 sm:text-4xl">
            Construyendo el futuro académico
          </p>
          <p className="mt-4 text-lg text-neutral-500">
            Trabajamos de la mano con diversas instituciones para impulsar una
            educación de vanguardia en el Colegiado de San Andrés de Guanajuato.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-institucional-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-azul-50 transition-colors duration-300 group-hover:bg-azul-800">
                <div className="transition-colors duration-300 group-hover:text-white">
                  {pilar.icono}
                </div>
              </div>

              <h3 className="text-xl font-bold text-azul-800">
                {pilar.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {pilar.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
