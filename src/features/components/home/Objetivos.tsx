import { beneficios } from "@/data/beneficiosData";

export function Objetivos() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mb-16">
        <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-institucional-600">
          Lo que ofrecemos
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-azul-900 sm:text-4xl lg:text-5xl">
          Beneficios CAASAG
        </h2>
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border-y border-neutral-200">
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.etiqueta}
              className={`group relative flex flex-col justify-between bg-white p-10 sm:p-14 lg:p-20 hover:bg-slate-50/50 transition-colors duration-500 ${beneficio.colSpan}`}
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-institucional-500 transition-all duration-500 group-hover:w-full" />

              <div className="flex flex-col gap-8 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-300 group-hover:text-institucional-600">
                  {beneficio.etiqueta}
                </span>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-azul-50 text-azul-800 transition-all duration-300 group-hover:bg-institucional-500 group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-institucional-500/30">
                  {beneficio.icono}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-azul-900 mb-4 transition-colors duration-300 group-hover:text-institucional-600">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-500 font-light transition-colors duration-300 group-hover:text-neutral-700">
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
