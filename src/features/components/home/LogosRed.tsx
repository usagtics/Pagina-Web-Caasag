import Image from "next/image";

export function LogosRed() {
  const logos = Array.from(
    { length: 30 },
    (_, i) => `/logosagremiados/logo${i + 1}.png`,
  );

  const fila1 = logos.slice(0, 8);
  const fila2 = logos.slice(8, 16);
  const fila3 = logos.slice(16, 24);
  const fila4 = logos.slice(24, 30);

  return (
    <section
      id="directorio"
      className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-[#F8F9FA]"
    >
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-60 pointer-events-none z-0">
        <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#F8F9FA] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent"></div>

        <div className="flex w-max animate-marquee-left">
          {[...fila1, ...fila1].map((logo, index) => (
            <div key={`f1-${index}`} className="mx-4 shrink-0">
              <div className="relative flex h-24 w-48 sm:h-28 sm:w-56 items-center justify-center rounded-2xl border border-neutral-200/50 bg-white p-4 shadow-sm">
                <Image
                  src={logo}
                  alt="Institución"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex w-max animate-marquee-right"
          style={{ animationDuration: "60s" }}
        >
          {[...fila2, ...fila2].map((logo, index) => (
            <div key={`f2-${index}`} className="mx-4 shrink-0">
              <div className="relative flex h-24 w-48 sm:h-28 sm:w-56 items-center justify-center rounded-2xl border border-neutral-200/50 bg-white p-4 shadow-sm">
                <Image
                  src={logo}
                  alt="Institución"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex w-max animate-marquee-left"
          style={{ animationDuration: "70s" }}
        >
          {[...fila3, ...fila3].map((logo, index) => (
            <div key={`f3-${index}`} className="mx-4 shrink-0">
              <div className="relative flex h-24 w-48 sm:h-28 sm:w-56 items-center justify-center rounded-2xl border border-neutral-200/50 bg-white p-4 shadow-sm">
                <Image
                  src={logo}
                  alt="Institución"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex w-max animate-marquee-right"
          style={{ animationDuration: "55s" }}
        >
          {[...fila4, ...fila4].map((logo, index) => (
            <div key={`f4-${index}`} className="mx-4 shrink-0">
              <div className="relative flex h-24 w-48 sm:h-28 sm:w-56 items-center justify-center rounded-2xl border border-neutral-200/50 bg-white p-4 shadow-sm">
                <Image
                  src={logo}
                  alt="Institución"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative z-20 w-full py-16"
        style={{
          background:
            "linear-gradient(90deg, rgba(248,249,250,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(248,249,250,0) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-azul-900">
              Directorio Oficial
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-azul-950 sm:text-4xl lg:text-5xl">
            Nuestras{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-500 to-institucional-700">
              Instituciones
            </span>
          </h2>

          <p className="mt-4 text-base text-neutral-500 font-light sm:text-lg max-w-2xl">
            Desliza para descubrir la red de instituciones que construyen el
            futuro de la educación con nosotros.
          </p>
        </div>
      </div>
    </section>
  );
}
