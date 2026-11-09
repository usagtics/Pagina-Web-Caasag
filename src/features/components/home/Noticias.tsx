import Image from "next/image";
import Link from "next/link";

const noticias = [
  {
    categoria: "Convenio",
    fecha: "15 Oct, 2026",
    titulo: "Nueva alianza estratégica con la Universidad Tecnológica",
    extracto:
      "Firmamos un acuerdo para facilitar el intercambio académico y las prácticas profesionales de nuestros agremiados.",
    imagen: "/asamblea1.jpeg",
    link: "/blog/nueva-alianza",
  },
  {
    categoria: "Evento",
    fecha: "02 Oct, 2026",
    titulo: "Exitosa Asamblea Anual de Rectores y Directores",
    extracto:
      "Más de 40 instituciones se reunieron para trazar la ruta de la excelencia educativa en Guanajuato.",
    imagen: "/carrousel.jpeg",
    link: "/blog/asamblea-anual",
  },
  {
    categoria: "Convocatoria",
    fecha: "28 Sep, 2026",
    titulo: "Beca de movilidad internacional para docentes",
    extracto:
      "Abre la convocatoria para el programa de capacitación en innovación educativa en Europa.",
    imagen: "/carrousel1.jpeg",
    link: "/blog/becas-movilidad",
  },
];

export function Noticias() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-institucional-600 mb-3 block">
              Actualidad CAASAG
            </span>
            <h2 className="text-3xl font-extrabold text-azul-900 sm:text-4xl text-balance">
              Últimas noticias y eventos
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-bold text-azul-800 hover:text-institucional-600 transition-colors"
          >
            Ver todas las noticias
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((noticia, index) => (
            <article
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-azul-900/10"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-950/60 to-transparent opacity-80"></div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-institucional-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <time className="mb-3 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  {noticia.fecha}
                </time>
                <h3 className="mb-3 text-xl font-bold leading-tight text-azul-900 group-hover:text-institucional-600 transition-colors">
                  {noticia.titulo}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600 font-light">
                  {noticia.extracto}
                </p>

                <Link
                  href={noticia.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-azul-800"
                >
                  Leer artículo
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
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
          ))}
        </div>
      </div>
    </section>
  );
}
