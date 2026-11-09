export function CintilloInstituciones() {
  return (
    <section className="relative w-full overflow-hidden bg-azul-950 py-16 sm:py-20 border-y border-institucional-500/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/10 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
              <span className="text-sm text-institucional-500">✦</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-institucional-400">
                Nuestro Compromiso
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl text-balance">
              Fortalecer la educación a través de{" "}
              <span className="text-institucional-400">alianzas sólidas</span>.
            </h2>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-6 sm:flex-row lg:flex-col lg:items-end lg:gap-8">
            <div className="text-center lg:text-right">
              <p className="text-4xl font-black text-white sm:text-5xl">+80</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-azul-100/60">
                Instituciones Aliadas
              </p>
            </div>

            <div className="hidden h-px w-full bg-white/10 sm:block lg:h-px lg:w-24"></div>

            <div className="text-center lg:text-right">
              <p className="text-4xl font-black text-white sm:text-5xl">100%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-azul-100/60">
                Compromiso Educativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
