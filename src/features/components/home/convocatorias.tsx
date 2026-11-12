import Image from "next/image";
import Link from "next/link";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { TextoDegradado } from "@/features/ui/TextoDegradado";
import { TarjetaValor } from "@/features/ui/TarjetaValor";
import { TarjetaBeneficio } from "@/features/ui/TarjetaBeneficio";
import {
  girosProveedores,
  beneficiosProveedores,
  valoresAgremiacion,
  beneficiosAgremiacion,
} from "@/data/convocatoriasData";

export function Convocatorias() {
  return (
    <main className="relative min-h-screen w-full bg-slate-50 overflow-hidden">
      <section className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden bg-azul-950">
        <Image
          src="/asamblea1/primera-asamblea1.jpg"
          alt="Convocatorias CAASAG"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mt-8">
          <AnimacionEntrada direccion="arriba" alCargar>
            <EtiquetaSeccion
              texto="Oportunidades 2026"
              className="mx-auto border-white/20 bg-white/10 text-white"
            />
          </AnimacionEntrada>

          <AnimacionEntrada direccion="arriba" retraso={0.2} alCargar>
            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
              Convocatorias <TextoDegradado>CAASAG</TextoDegradado>
            </h1>
          </AnimacionEntrada>

          <AnimacionEntrada direccion="arriba" retraso={0.4} alCargar>
            <p className="mx-auto max-w-xl text-sm text-azul-100 font-light sm:text-base">
              Forma parte de nuestra red de colaboración. Descubre las
              oportunidades que tenemos para tu empresa y tu institución
              educativa.
            </p>
          </AnimacionEntrada>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-12 w-full max-w-7xl px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <AnimacionEntrada
            direccion="izquierda"
            retraso={0.1}
            className="flex"
          >
            <div className="flex w-full flex-col justify-center rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-neutral-100/50">
              <div className="inline-flex items-center gap-2 rounded-full bg-azul-50 px-3 py-1.5 mb-6 w-fit border border-azul-100">
                <svg
                  className="h-3 w-3 text-azul-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest text-azul-900">
                  Dirigido a Empresas
                </span>
              </div>

              <h2 className="text-3xl font-black text-azul-950 sm:text-4xl lg:text-5xl leading-tight mb-4">
                Convocatoria <br />
                <span className="text-institucional-500">Proveedores 2026</span>
              </h2>

              <p className="text-neutral-600 text-base mb-8 font-light leading-relaxed">
                En CAASAG estamos integrando nuevos proveedores para ofrecer
                soluciones de calidad a una red de{" "}
                <strong className="text-azul-950 font-semibold">
                  más de 150 universidades
                </strong>{" "}
                e instituciones educativas.
              </p>

              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                Giros que buscamos:
              </h3>

              <div className="flex flex-wrap gap-2">
                {girosProveedores.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-xl bg-slate-50 border border-neutral-200 px-3.5 py-1.5 text-xs font-semibold text-azul-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-azul-300 hover:shadow-md hover:text-institucional-600 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimacionEntrada>

          <AnimacionEntrada direccion="derecha" retraso={0.2} className="flex">
            <div className="relative flex w-full flex-col justify-center overflow-hidden rounded-3xl bg-azul-950 p-8 sm:p-12 shadow-2xl">
              <Image
                src="/plantabosch/foto1-plantabosch.jpg"
                alt="Proveedores CAASAG"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-10 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-azul-950/80 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-institucional-500 text-azul-950 shadow-lg">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Red de Aliados
                  </h3>
                </div>

                <ul className="space-y-4 mb-10">
                  {beneficiosProveedores.map((beneficio, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                    >
                      <svg
                        className="h-5 w-5 text-institucional-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-azul-100 text-sm sm:text-base font-light">
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 text-center shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-widest text-azul-300 mb-1">
                    Para más información
                  </p>
                  <p className="text-3xl font-black text-white tracking-tight">
                    479 228 6990
                  </p>
                </div>
              </div>
            </div>
          </AnimacionEntrada>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 pb-24">
        <AnimacionEntrada className="text-center mb-10">
          <span className="mb-3 inline-block rounded-full bg-azul-950 px-4 py-1 text-xs font-bold uppercase tracking-widest text-institucional-400">
            Instituciones Educativas
          </span>
          <h2 className="text-3xl font-black text-azul-950 sm:text-4xl">
            Convocatoria de <TextoDegradado>Agremiación 2026</TextoDegradado>
          </h2>
        </AnimacionEntrada>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch">
          <AnimacionEntrada
            direccion="izquierda"
            retraso={0.1}
            className="lg:col-span-7 flex"
          >
            <div className="relative w-full aspect-video lg:aspect-auto rounded-3xl overflow-hidden shadow-lg group bg-neutral-200">
              <Image
                src="/nosotros2.jpeg"
                alt="Asamblea CAASAG"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul-950/90 via-azul-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-medium italic text-lg sm:text-xl leading-snug drop-shadow-md">
                  &ldquo;Ser CAASAG es formar parte de una red de instituciones
                  educativas que impulsan, respaldan y transforman.&rdquo;
                </p>
              </div>
            </div>
          </AnimacionEntrada>

          <AnimacionEntrada
            direccion="derecha"
            retraso={0.2}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {valoresAgremiacion.map((valor, i) => (
              <TarjetaValor key={i} name={valor.name} icon={valor.icon} />
            ))}
          </AnimacionEntrada>
        </div>

        <AnimacionEntrada
          retraso={0.3}
          className="rounded-3xl bg-white p-8 sm:p-10 shadow-lg border border-neutral-100/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-azul-950">
              Beneficios de ser parte
            </h3>
            <div className="w-12 h-1 bg-institucional-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {beneficiosAgremiacion.map((beneficio, i) => (
              <TarjetaBeneficio
                key={i}
                titulo={beneficio.titulo}
                icon={beneficio.icon}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12 bg-slate-50 rounded-2xl p-6 border border-neutral-100">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                Atención a instituciones
              </p>
              <p className="text-2xl font-black text-azul-950 tracking-tight">
                477 308 9901
              </p>
            </div>
            <div className="hidden md:block h-10 w-px bg-neutral-200" />
            <Link
              href="/contacto"
              className="group relative inline-flex items-center gap-2 rounded-full bg-azul-950 px-8 py-4 text-xs font-bold text-white transition-all duration-300 hover:bg-institucional-500 hover:text-azul-950 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                HAZTE PARTE DE CAASAG
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
              </span>
            </Link>
          </div>
        </AnimacionEntrada>
      </section>
    </main>
  );
}
