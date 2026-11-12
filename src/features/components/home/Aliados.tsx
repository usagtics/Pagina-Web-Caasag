import { FilaLogos } from "./FilaLogos";

const logosAgremiados = Array.from({ length: 30 }, (_, index) => ({
  src: `/logosagremiados/logo${index + 1}.png`,
  alt: `Institución aliada ${index + 1}`,
}));

export function Aliados() {
  const primeraFila = logosAgremiados.slice(0, 15);
  const segundaFila = logosAgremiados.slice(15);

  return (
    <section className="relative overflow-hidden border-y border-neutral-100 bg-[#F8F9FA] py-24">
      <div className="relative z-10 mx-auto mb-16 flex max-w-7xl flex-col items-center px-4 text-center">
        <h2 className="text-4xl font-black tracking-tight text-azul-900 sm:text-5xl">
          Nuestra Red de{" "}
          <span className="text-institucional-500">Confianza</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-relaxed text-neutral-500 sm:text-xl">
          Instituciones que colaboran con{" "}
          <strong className="font-semibold text-azul-800">CAASAG</strong> para
          impulsar la excelencia académica en la región.
        </p>
      </div>

      <div className="marquee-container relative flex w-full flex-col gap-6">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent sm:w-48" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent sm:w-48" />

        <div className="flex w-max animate-marquee-left">
          <FilaLogos logos={primeraFila} />
          <FilaLogos logos={primeraFila} duplicar />
        </div>

        <div className="flex w-max animate-marquee-right">
          <FilaLogos logos={segundaFila} />
          <FilaLogos logos={segundaFila} duplicar />
        </div>
      </div>
    </section>
  );
}
