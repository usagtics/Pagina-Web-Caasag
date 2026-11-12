import { FondoCuadricula } from "@/features/ui/FondoCuadricula";
import { InformacionContacto } from "./InformacionContacto";
import { FormularioContacto } from "./FormularioContacto";

export function Contacto() {
  return (
    <section className="relative min-h-screen w-full bg-azul-950 pt-32 pb-24 overflow-hidden">
      <FondoCuadricula size={48} colorHex="#1e293b" opacityHex="05" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <InformacionContacto />
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
