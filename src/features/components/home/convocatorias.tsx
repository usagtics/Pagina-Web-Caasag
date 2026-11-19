import Image from "next/image";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";
import { EtiquetaSeccion } from "@/features/ui/EtiquetaSeccion";
import { TextoDegradado } from "@/features/ui/TextoDegradado";
import { SeccionProveedores } from "./convocatorias/SeccionProveedores";
import { SeccionAgremiacion } from "./convocatorias/SeccionAgremiacion";
import { SeccionPremioExcelencia } from "./convocatorias/SeccionPremioExcelencia";
import { SeccionDoctorado } from "./convocatorias/SeccionDoctorado";

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

      <SeccionProveedores />
      <SeccionAgremiacion />
      <SeccionPremioExcelencia />
      <SeccionDoctorado />
    </main>
  );
}
