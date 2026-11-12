export function CINTA2() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-azul-950 py-32">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-5 pointer-events-none select-none">
        <div className="flex w-max animate-marquee-left">
          <span className="text-8xl md:text-9xl font-black uppercase leading-none text-white whitespace-nowrap">
            Excelencia • Alianzas • Futuro • Innovación •
          </span>
          <span className="text-8xl md:text-9xl font-black uppercase leading-none text-white whitespace-nowrap">
            Excelencia • Alianzas • Futuro • Innovación •
          </span>
        </div>
        <div className="flex w-max animate-marquee-right">
          <span className="text-8xl md:text-9xl font-black uppercase leading-none text-white whitespace-nowrap">
            Educación • Colaboración • Desarrollo •
          </span>
          <span className="text-8xl md:text-9xl font-black uppercase leading-none text-white whitespace-nowrap">
            Educación • Colaboración • Desarrollo •
          </span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 h-96 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-institucional-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-institucional-500 mb-8 block">
          El siguiente paso es tuyo
        </span>

        <h2 className="text-5xl font-extrabold leading-tight text-white sm:text-7xl lg:text-8xl tracking-tighter text-balance mb-12">
          Juntos somos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 via-institucional-500 to-institucional-300">
            más fuertes.
          </span>
        </h2>
      </div>
    </section>
  );
}
