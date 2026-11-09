const decalogo = [
  "Prometo trabajar con pasión por el bienestar educativo de mi comunidad.",
  "Seré leal a los principios del CAASAG y a sus fines colectivos.",
  "Actuaré con transparencia, justicia y responsabilidad en todas mis funciones.",
  "Haré de la honestidad mi guía diaria en cada palabra, decisión y acción.",
  "Impulsaré la colaboración entre instituciones con respeto y apertura.",
  "Utilizaré la tecnología como una herramienta para el bien común.",
  "Me prepararé constantemente para ser agente de cambio en la educación.",
  "Rechazaré todo acto de corrupción, discriminación o injusticia.",
  "Escucharé, dialogaré y aprenderé con humildad de mis colegas.",
  "Seré orgullosamente parte de esta alianza que construye un futuro mejor.",
];

export function Decalogo() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-100/40 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/3 rounded-full bg-institucional-100/40 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl px-4 text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-azul-50 px-3 py-1 border border-azul-100 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-azul-900">
              Código de Ética
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-azul-950 sm:text-4xl lg:text-5xl text-balance">
            Decálogo del{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-azul-800 to-institucional-600">
              Agremiado
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-500 font-light max-w-2xl mx-auto">
            Nuestros 10 compromisos fundamentales con la excelencia, la
            integridad y el futuro de la educación.
          </p>
        </div>

        <div className="w-full border-y border-neutral-200 bg-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {decalogo.map((texto, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-5 bg-white p-6 transition-colors duration-500 hover:bg-gradient-to-br hover:from-azul-50/50 hover:to-white sm:p-8 lg:px-12"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-azul-900 scale-y-0 transition-transform duration-500 group-hover:scale-y-100 origin-top"></div>

                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-base sm:text-lg font-black text-azul-200 transition-all duration-500 group-hover:bg-azul-900 group-hover:text-institucional-400 group-hover:shadow-md">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                <div className="flex-1 pt-1 sm:pt-2">
                  <p className="text-[15px] sm:text-base leading-relaxed text-neutral-600 font-light transition-colors duration-500 group-hover:text-azul-950">
                    {texto}
                  </p>
                </div>

                <div className="hidden sm:flex opacity-0 transition-opacity duration-500 group-hover:opacity-100 pt-2 sm:pt-3">
                  <svg
                    className="h-5 w-5 text-institucional-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="group relative inline-flex cursor-default items-center gap-3 rounded-full border border-azul-100 bg-white px-6 py-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-azul-50 text-azul-900">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-widest text-azul-950">
                Aprobado oficialmente
              </span>
              <span className="text-[10px] font-medium text-neutral-500">
                Por el Consejo Directivo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
