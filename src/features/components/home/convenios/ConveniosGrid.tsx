import ConvenioItem from "./ConvenioItem";
import type { Convenio } from "@/data/convenios";

export default function ConveniosGrid({
  convenios,
}: {
  convenios: Convenio[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {convenios.map((c) => (
          <ConvenioItem key={c.institucion} convenio={c} />
        ))}
      </div>
    </section>
  );
}
