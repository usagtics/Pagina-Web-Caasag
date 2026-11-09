import Image from "next/image";
import Link from "next/link";

const eventos = [
  {
    fecha: "23 Mayo, 2025",
    categoria: "Congreso",
    titulo: "Congreso Internacional de Universidades",
    descripcion:
      "El Congreso Internacional de Universidades CAASAG 2026 fue una realidad y recibimos un evento que reunió innovación, conocimiento y talento académico en un solo lugar.",
    imagen: "/congreso-universidades.jpeg",
  },
  {
    fecha: "20-21 Junio, 2025",
    categoria: "Asamblea",
    titulo: "Primera Asamblea Ordinaria CAASAG",
    descripcion:
      "Se aprobaron por unanimidad los nuevos estatutos de colaboración y se presentó el plan estratégico para el siguiente año.",
    imagen: "/evento-asamblea1.jpg",
  },
  {
    fecha: "22 Mayo, 2025",
    categoria: "2 Asamblea",
    titulo: "Segunda Asamblea Ordinaria CAASAG",
    descripcion:
      "Realizamos un recorrido con directores de instituciones educativas por las instalaciones de Bosch.",
    imagen: "/carrousel1.jpeg",
  },
  {
    fecha: "24 Sep, 2024",
    categoria: "Vinculación",
    titulo: "Visita a la Planta de Bosch",
    descripcion:
      "Realizamos un recorrido con directores de instituciones educativas por las instalaciones de Bosch.",
    imagen: "/carrousel1.jpeg",
  },
  {
    fecha: "05 Sep, 2024",
    categoria: "Prensa",
    titulo: "Rueda de Prensa: Nuevas Alianzas",
    descripcion:
      "Anunciamos oficialmente la integración de 5 nuevas universidades a nuestra red académica.",
    imagen: "/nosotros4.jpg",
  },
];

export function EventosDetalle() {
  return (
    <section className="relative w-full overflow-hidden bg-azul-950 py-24 sm:py-32">
      <div className="absolute top-0 right-1/4 h-[600px] w-[800px] -translate-y-1/2 rounded-full bg-institucional-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-azul-100">
              Nuestra Historia en Acción
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Eventos y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 to-institucional-500">
              Asambleas
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {eventos.map((evento, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <article
                key={index}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isLarge
                    ? "lg:col-span-7 h-[450px] sm:h-[550px]"
                    : "lg:col-span-5 h-[450px] sm:h-[550px]"
                }`}
              >
                <Image
                  src={evento.imagen}
                  alt={evento.titulo}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-azul-950 via-azul-950/60 to-transparent opacity-90 transition-opacity duration-500"></div>

                <div className="absolute top-5 left-5 z-10 sm:top-6 sm:left-6">
                  <span className="rounded-full bg-institucional-500 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-lg sm:px-4 sm:text-[10px]">
                    {evento.categoria}
                  </span>
                </div>

                <div className="relative z-10 m-3 rounded-2xl bg-azul-950/50 p-5 backdrop-blur-md border border-white/10 sm:m-5 sm:rounded-3xl sm:p-6">
                  <time className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-institucional-400 sm:text-xs">
                    {evento.fecha}
                  </time>

                  <h3
                    className={`mb-2 font-black leading-[1.1] text-white sm:mb-3 ${
                      isLarge
                        ? "text-xl sm:text-2xl lg:text-3xl"
                        : "text-lg sm:text-xl lg:text-2xl"
                    }`}
                  >
                    {evento.titulo}
                  </h3>

                  <p
                    className={`mb-4 text-neutral-300 font-light line-clamp-3 sm:mb-6 ${
                      isLarge
                        ? "text-sm sm:text-base max-w-lg"
                        : "text-xs sm:text-sm max-w-xs"
                    }`}
                  >
                    {evento.descripcion}
                  </p>

                  <Link
                    href="#"
                    className="group/btn inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-institucional-500 hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    Leer más
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1 sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
