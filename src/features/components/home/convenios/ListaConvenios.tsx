import { conveniosData } from "@/data/convenios";
import ConvenioCard from "./ConvenioItem";

export function ListaConvenios() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conveniosData.map((convenio) => (
            <ConvenioCard key={convenio.id} convenio={convenio} />
          ))}
        </div>
      </div>
    </section>
  );
}
