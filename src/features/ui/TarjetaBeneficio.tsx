import type { LucideIcon } from "lucide-react";

interface TarjetaBeneficioProps {
  titulo: string;
  icon: LucideIcon;
}

export function TarjetaBeneficio({
  titulo,
  icon: Icon,
}: TarjetaBeneficioProps) {
  return (
    <div className="group flex flex-col items-center text-center gap-3 rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-neutral-100">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-azul-950 transition-all duration-500 group-hover:bg-institucional-50 group-hover:text-institucional-600 group-hover:scale-110">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <p className="text-xs font-bold leading-tight text-azul-950 transition-colors group-hover:text-institucional-600">
        {titulo}
      </p>
    </div>
  );
}
