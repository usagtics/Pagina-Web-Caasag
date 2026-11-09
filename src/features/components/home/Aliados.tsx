import Image from "next/image";

export function Aliados() {
  const todosLosLogos = Array.from(
    { length: 30 },
    (_, i) => `/logosagremiados/logo${i + 1}.png`,
  );

  const fila1 = todosLosLogos.slice(0, 15);
  const fila2 = todosLosLogos.slice(15, 30);

  return (
    <section className="bg-[#F8F9FA] py-24 overflow-hidden relative border-y border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 mb-16 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-black tracking-tight text-azul-900 sm:text-5xl">
          Nuestra Red de{" "}
          <span className="text-institucional-500">Confianza</span>
        </h2>

        <p className="text-lg sm:text-xl font-light text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Instituciones que colaboran con{" "}
          <strong className="font-semibold text-azul-800">CAASAG</strong> para
          impulsar la excelencia académica en la región.
        </p>
      </div>

      <div className="relative w-full marquee-container flex flex-col gap-6">
        <div className="absolute left-0 top-0 z-20 h-full w-24 sm:w-48 bg-gradient-to-r from-[#F8F9FA] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-20 h-full w-24 sm:w-48 bg-gradient-to-l from-[#F8F9FA] to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-marquee-left">
          <div className="flex items-center gap-6 px-3">
            {fila1.map((logo, index) => (
              <div
                key={`f1-${index}`}
                className="relative flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-neutral-100/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <Image
                  src={logo}
                  alt={`Aliado ${index + 1}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 px-3" aria-hidden="true">
            {fila1.map((logo, index) => (
              <div
                key={`f1-dup-${index}`}
                className="relative flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-neutral-100/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <Image
                  src={logo}
                  alt={`Aliado ${index + 1}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-max animate-marquee-right">
          <div className="flex items-center gap-6 px-3">
            {fila2.map((logo, index) => (
              <div
                key={`f2-${index}`}
                className="relative flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-neutral-100/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <Image
                  src={logo}
                  alt={`Aliado ${index + 16}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 px-3" aria-hidden="true">
            {fila2.map((logo, index) => (
              <div
                key={`f2-dup-${index}`}
                className="relative flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-neutral-100/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <Image
                  src={logo}
                  alt={`Aliado ${index + 16}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
