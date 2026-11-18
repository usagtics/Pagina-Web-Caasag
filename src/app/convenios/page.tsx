import { conveniosData } from "@/data/convenios";
import HeroConvenios from "@/features/components/home/convenios/HeroConvenios";
import ConvenioItem from "@/features/components/home/convenios/ConvenioItem";
import ConvenioDestacado from "@/features/components/home/convenios/ConvenioDestacado";
import { AnimacionEntrada } from "@/features/ui/AnimacionEntrada";

export const metadata = {
  title: "Nuestros Convenios | Cassag",
  description:
    "Instituciones y organizaciones con las que tenemos convenios firmados.",
};

export default function ConveniosPage() {
  const destacados = conveniosData.filter((c) => c.destacado);
  const resto = conveniosData.filter((c) => !c.destacado);

  return (
    <main className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      <HeroConvenios />

      <div
        id="convenios-grid"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20"
      >
        {destacados.length > 0 && (
          <AnimacionEntrada>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#C29B57]"></span>
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Firmas Principales
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {destacados.map((c) => (
                  <ConvenioDestacado key={c.id} convenio={c} />
                ))}
              </div>
            </div>
          </AnimacionEntrada>
        )}

        {resto.length > 0 && (
          <AnimacionEntrada>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#C29B57]"></span>
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Red de Convenios
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {resto.map((c) => (
                  <ConvenioItem key={c.id} convenio={c} />
                ))}
              </div>
            </div>
          </AnimacionEntrada>
        )}
      </div>
    </main>
  );
}
