import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, Calendar, MapPin, ArrowRight } from "lucide-react";
import { eventos, getEventoBySlug } from "@/data/eventos";
import { GaleriaEventoAsamblea1 } from "@/features/components/home/GaleriaEventoAsamblea1";
import { ShareButtons } from "@/features/components/home/ShareButtons";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { FondoCuadricula } from "@/features/ui/FondoCuadricula";
import { TarjetaInfoEvento } from "@/features/ui/TarjetaInfoEvento";
import { GaleriaVideos } from "@/features/components/home/GaleriaVideos";
import { siteConfig } from "@/shared/config/site";
import { MomentosSlider } from "@/features/components/home/2Asamblea/CarruselMomentos";

const currentYear = new Date().getFullYear();

export function generateStaticParams() {
  return eventos.map((evento) => ({ slug: evento.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const evento = getEventoBySlug(slug);
  if (!evento) return { title: "Evento no encontrado | CAASAG" };
  return {
    title: `${evento.titulo} | CAASAG`,
    description: evento.descripcion,
  };
}

export default function EventoDetallePage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-azul-950 text-white">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-institucional-500 border-t-transparent" />
        </div>
      }
    >
      <EventoContenido params={params} />
    </Suspense>
  );
}

async function EventoContenido({ params }: PageProps) {
  const { slug } = await params;
  const evento = getEventoBySlug(slug);
  if (!evento) notFound();

  const currentIndex = eventos.findIndex((e) => e.slug === slug);
  const nextEvento =
    eventos.length > 1 ? eventos[(currentIndex + 1) % eventos.length] : null;

  return (
    <main className="relative min-h-screen w-full bg-azul-950">
      <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden pt-32 pb-40 sm:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src={evento.imagen}
            alt="fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center blur-2xl opacity-30"
          />
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src={evento.imagen}
            alt={evento.titulo}
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-azul-950 via-azul-950/60 to-transparent pointer-events-none" />

        <div className="relative z-20 flex w-full max-w-5xl flex-col items-center px-4 mt-auto text-center">
          <AnimacionEntrada direccion="arriba" alCargar>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-institucional-400" />
                {evento.categoria}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
                {evento.fecha}
              </span>
            </div>
          </AnimacionEntrada>

          <AnimacionEntrada direccion="arriba" retraso={0.2} alCargar>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {evento.titulo}
            </h1>
          </AnimacionEntrada>
        </div>
      </section>

      <section className="relative z-30 -mt-10 w-full overflow-hidden rounded-t-[3rem] bg-white pb-32 pt-16 sm:-mt-16 sm:rounded-t-[4rem] sm:pt-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <FondoCuadricula size={48} colorHex="#0f172a" opacityHex="03" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8">
          <AnimacionEntrada className="flex flex-col items-center justify-center gap-6 mb-16 text-center">
            <Link
              href="/eventos"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-institucional-500"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                strokeWidth={2.5}
              />
              Volver a eventos
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <TarjetaInfoEvento
                etiqueta="Fecha"
                valor={evento.fecha}
                icono={<Calendar className="h-5 w-5" strokeWidth={2} />}
              />
              <TarjetaInfoEvento
                etiqueta="Ubicación"
                valor={evento.ubicacion}
                icono={<MapPin className="h-5 w-5" strokeWidth={2} />}
              />
            </div>
          </AnimacionEntrada>

          <AnimacionEntrada className="text-center">
            {evento.contenido?.subtitulo && (
              <h2 className="mb-10 text-3xl font-black leading-tight text-azul-950 sm:text-4xl lg:text-5xl">
                {evento.contenido.subtitulo}
              </h2>
            )}

            <div className="space-y-8 text-lg font-normal leading-relaxed text-gray-600 sm:text-xl sm:leading-loose">
              <p className="text-xl text-gray-800 sm:text-2xl font-light">
                {evento.contenido?.parrafos[0] || evento.descripcion}
              </p>
              {evento.contenido?.parrafos.slice(1).map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>

            <ShareButtons titulo={evento.titulo} />
          </AnimacionEntrada>
        </div>

        <div className="relative z-10 w-full">
          {evento.contenido?.puntosClave &&
            evento.contenido.puntosClave.length > 0 && (
              <AnimacionEntrada className="w-full block">
                <MomentosSlider items={evento.contenido.puntosClave} />
              </AnimacionEntrada>
            )}
        </div>

        {((evento.videos && evento.videos.length > 0) ||
          (evento.galeria && evento.galeria.length > 0)) && (
          <AnimacionEntrada className="relative z-10 mt-24 w-full">
            <div className="mb-10 flex items-center justify-center gap-6 px-4">
              <div className="h-px w-16 bg-gray-200" />
              <h3 className="text-2xl font-bold text-azul-950">
                Galería Multimedia
              </h3>
              <div className="h-px w-16 bg-gray-200" />
            </div>

            {evento.videos && evento.videos.length === 1 ? (
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 mb-16">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black">
                  <video
                    src={evento.videos[0]}
                    controls
                    className="w-full h-full object-contain"
                    poster={evento.imagen}
                  />
                </div>
              </div>
            ) : (
              <GaleriaVideos
                videos={evento.videos || []}
                poster={evento.imagen}
              />
            )}

            {evento.galeria && evento.galeria.length > 0 && (
              <div className="w-full">
                <GaleriaEventoAsamblea1
                  fotos={evento.galeria}
                  titulo={evento.titulo}
                />
              </div>
            )}
          </AnimacionEntrada>
        )}

        {nextEvento && (
          <AnimacionEntrada className="relative z-10 mx-auto mt-32 max-w-5xl px-4 sm:px-8">
            <Link
              href={`/eventos/${nextEvento.slug}`}
              className="group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-3xl bg-white p-6 sm:p-8 border border-gray-200 shadow-sm transition-all hover:shadow-xl hover:border-institucional-300"
            >
              <div className="absolute inset-0 bg-institucional-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-xs font-bold uppercase tracking-widest text-institucional-500 mb-2">
                  Siguiente Evento
                </p>
                <h4 className="text-xl sm:text-2xl font-bold text-azul-950 group-hover:text-institucional-600 transition-colors">
                  {nextEvento.titulo}
                </h4>
              </div>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-azul-950 text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-institucional-500">
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </div>
            </Link>
          </AnimacionEntrada>
        )}

        <div className="relative z-10 mx-auto mt-12 max-w-4xl px-4 sm:px-8 text-center">
          <div className="border-t border-gray-200 pt-10 flex flex-col items-center justify-center gap-6">
            <p className="text-sm text-gray-500">
              © {currentYear} {siteConfig.contact.name}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
