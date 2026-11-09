import Image from "next/image";

export function HeroNosotros() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col overflow-hidden bg-azul-950 lg:min-h-[80vh] lg:flex-row">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-institucional-500/10 via-azul-950 to-azul-950"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 flex w-full flex-col justify-center px-6 py-24 sm:px-12 lg:w-[55%] lg:px-20 xl:px-28">
        <div className="relative z-10">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md animate-[fadeInLeft_0.8s_ease-out_forwards] opacity-0"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-2 w-2 rounded-full bg-institucional-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-azul-100">
              Sobre Nosotros
            </span>
          </div>

          <h1
            className="text-balance text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-[3.5rem] tracking-tight animate-[fadeInLeft_0.8s_ease-out_forwards] opacity-0"
            style={{ animationDelay: "250ms" }}
          >
            Educación que genera <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 to-institucional-500">
              oportunidades
            </span>
            , alianzas que transforman.
          </h1>

          <div
            className="mt-8 flex gap-6 animate-[fadeInLeft_0.8s_ease-out_forwards] opacity-0"
            style={{ animationDelay: "400ms" }}
          >
            <div className="w-1.5 rounded-full bg-institucional-500 hidden sm:block"></div>
            <p className="text-balance text-lg leading-relaxed text-azul-100/80 font-light lg:text-xl max-w-xl">
              En CAASAG creemos que las instituciones educativas privadas
              tenemos un papel fundamental en la construcción de un mejor futuro
              para nuestra región.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-[45%] min-h-[400px] lg:min-h-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-20 w-24 lg:w-32 bg-gradient-to-r from-azul-950 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-azul-950 to-transparent lg:hidden pointer-events-none"></div>

        <div
          className="relative h-full w-full overflow-hidden animate-[fadeInRight_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          <Image
            src="/conocenos4.png"
            alt="Conócenos CAASAG"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-azul-900/10 mix-blend-overlay pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
