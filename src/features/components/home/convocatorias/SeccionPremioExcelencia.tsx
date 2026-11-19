import {
  Landmark,
  Users,
  CheckCircle2,
  Video,
  Clock,
  Monitor,
  Mail,
  Award,
  Megaphone,
  Camera,
  Calendar,
} from "lucide-react";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import {
  criteriosPremioExcelencia,
  reconocimientosPremioExcelencia,
} from "@/data/convocatoriasData";

const iconosReconocimiento: Record<string, typeof Award> = {
  galardon: Award,
  difusion: Megaphone,
  foto: Camera,
  premiacion: Calendar,
};

export function SeccionPremioExcelencia() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 pb-24">
      <div className="rounded-3xl bg-white shadow-xl border border-neutral-100 overflow-hidden">
        <div className="bg-azul-950 p-8 sm:p-12 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-institucional-400 mb-2">
                Convocatoria Oficial · CAASAG
              </p>
              <h2 className="text-3xl font-black sm:text-4xl leading-tight mb-3">
                Premio Nacional al Mérito a la Excelencia Académica
              </h2>
              <p className="text-azul-200 italic text-sm sm:text-base">
                &ldquo;Reconociendo nacionalmente a quienes transforman la
                educación&rdquo;
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/15 px-6 py-4 text-center shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-institucional-400">
                Asamblea Oficial CAASAG 2026
              </p>
              <p className="text-2xl font-black text-white mt-1">27 NOV 2026</p>
              <p className="text-xs font-medium text-azul-200">León, Gto.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            <div className="flex items-start gap-3">
              <Landmark className="h-6 w-6 text-institucional-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1">
                  ¿De qué se trata?
                </h3>
                <p className="text-xs sm:text-sm text-azul-100 font-light leading-relaxed">
                  Reconocimiento nacional a instituciones que destacan por su
                  compromiso con la calidad educativa, la innovación, la
                  investigación, la responsabilidad social y la mejora continua.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-institucional-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1">
                  ¿Quiénes pueden participar?
                </h3>
                <p className="text-xs sm:text-sm text-azul-100 font-light leading-relaxed">
                  Instituciones educativas a nivel nacional que desarrollen
                  acciones con impacto académico, científico, tecnológico,
                  social y ambiental.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-institucional-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1">
                  ¿Qué obtienen?
                </h3>
                <ul className="text-xs sm:text-sm text-azul-100 font-light space-y-1">
                  <li>• Reconocimiento oficial y galardón conmemorativo</li>
                  <li>• Difusión institucional a nivel nacional</li>
                  <li>• Fotografía conmemorativa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12">
          <AnimacionEntrada direccion="izquierda" retraso={0.1}>
            <h3 className="text-lg font-black text-azul-950 uppercase tracking-wide mb-5">
              ¿Qué se tomará en cuenta?
            </h3>
            <ul className="space-y-3">
              {criteriosPremioExcelencia.map((criterio, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-neutral-700"
                >
                  <CheckCircle2 className="h-5 w-5 text-institucional-500 shrink-0 mt-0.5" />
                  <span>{criterio}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-400 italic mt-4">
              ...entre otros aspectos.
            </p>
          </AnimacionEntrada>

          <AnimacionEntrada direccion="derecha" retraso={0.2}>
            <h3 className="text-lg font-black text-azul-950 uppercase tracking-wide mb-5">
              Forma de participación
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Video className="h-5 w-5 text-azul-900 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Cada institución deberá enviar un{" "}
                  <strong className="text-azul-950">video institucional</strong>{" "}
                  que muestre de manera clara, creativa y profesional sus
                  principales acciones y logros.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-azul-900 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700">
                  <strong className="text-azul-950">Duración:</strong> mínimo 1
                  minuto y máximo 3 minutos.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Monitor className="h-5 w-5 text-azul-900 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700">
                  <strong className="text-azul-950">Formato:</strong> Horizontal
                  (16:9) / MP4 · Resolución mínima 1920 × 1080 (Full HD).
                </p>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Mail className="h-5 w-5 text-azul-900 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Envío al correo:
                  </p>
                  <a
                    href="mailto:colegiadodealianzas.sanandres@gmail.com"
                    className="inline-block rounded-lg bg-azul-950 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-institucional-500 hover:text-azul-950 transition-colors break-all"
                  >
                    colegiadodealianzas.sanandres@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </AnimacionEntrada>
        </div>

        <div className="bg-slate-50 border-t border-neutral-100 p-8 sm:p-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-institucional-600 mb-6">
            Reconocimiento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {reconocimientosPremioExcelencia.map((item) => {
              const Icono = iconosReconocimiento[item.id];
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white p-5 border border-neutral-200/70 shadow-sm"
                >
                  <Icono className="h-6 w-6 text-azul-950 mb-3" />
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg font-medium italic text-azul-950 mb-2">
              Tu institución puede ser parte del reconocimiento que impulsa la
              excelencia en la educación.
            </p>
            <p className="text-xl font-black tracking-wide text-institucional-600">
              ¡PARTICIPA Y TRANSFORMA!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
