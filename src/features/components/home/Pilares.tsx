import { pilaresData } from "@/data/pilaresData";

export function Pilares() {
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
          <span className="text-sm font-bold uppercase tracking-widest text-institucional-600">
            Nuestros Pilares
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-azul-800 sm:text-4xl">
            Construyendo el futuro académico
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Trabajamos de la mano con diversas instituciones para impulsar una
            educación de vanguardia en el Colegiado de San Andrés de Guanajuato.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pilaresData.map((pilar, index) => (
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
