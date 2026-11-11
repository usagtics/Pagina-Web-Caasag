import Image from "next/image";
import Link from "next/link";
import { eventos } from "@/data/eventos";

export function Noticias() {
  const asambleasDestacadas = [
    "primera-asamblea-ordinaria",
    "segunda-asamblea-ordinaria",
    "tercera-asamblea-ordinaria",
  ];

  const noticias = eventos
    .filter((evento) => asambleasDestacadas.includes(evento.slug))
    .map((evento) => ({
      categoria: evento.categoria,
      fecha: evento.fecha,
      titulo: evento.titulo,
      extracto: evento.descripcion,
      imagen: evento.imagen,
      link: `/eventos/${evento.slug}`,
    }));

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-institucional-600">
              Actualidad CAASAG
            </span>
            <h2 className="text-3xl font-extrabold text-azul-900 sm:text-4xl text-balance">
              Últimas noticias y eventos
            </h2>
          </div>
          <Link
            href="/eventos"
            className="group inline-flex items-center gap-2 text-sm font-bold text-azul-800 transition-colors hover:text-institucional-600"
          >
            Ver todos los eventos
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

        <div className="grid gap-8 md:grid-cols-3">
          {noticias.map((noticia, index) => (
            <article
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-azul-900/10"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-950/60 to-transparent opacity-80"></div>

                <div className="absolute left-4 top-4 z-10">
                  <span className="rounded-full bg-institucional-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <time className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {noticia.fecha}
                </time>
                <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-azul-900 transition-colors group-hover:text-institucional-600">
                  {noticia.titulo}
                </h3>
                <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-neutral-600 line-clamp-3">
                  {noticia.extracto}
                </p>

                <Link
                  href={noticia.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-azul-800"
                >
                  Leer más
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
