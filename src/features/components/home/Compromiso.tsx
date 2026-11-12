import Image from "next/image";
import { compromisos } from "@/data/compromisosData";

export function Compromiso() {
  return (
    <section className="relative bg-slate-50 pb-32">
      <div className="relative w-full overflow-hidden bg-azul-950 shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/nosotros2.jpeg"
            alt="Nuestro compromiso"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-azul-950 via-azul-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-azul-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center sm:px-16 sm:py-36 lg:items-start lg:px-20 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-institucional-500" />
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
          {compromisos.map((compromiso) => (
            <div
              key={compromiso.titulo}
              className="group relative flex flex-col items-start rounded-3xl border border-neutral-100 bg-white p-6 shadow-xl shadow-azul-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-azul-900/20"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-azul-50 text-azul-800 transition-colors duration-500 group-hover:scale-110 group-hover:bg-institucional-500 group-hover:text-white">
                {compromiso.icono}
              </div>

              <h3 className="mb-3 text-base font-bold leading-tight text-azul-900 transition-colors group-hover:text-institucional-600">
                {compromiso.titulo}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-500 font-light sm:text-sm">
                {compromiso.descripcion}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl bg-institucional-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
