interface TarjetaBeneficioProps {
  titulo: string;
  icon: string;
}

export function TarjetaBeneficio({ titulo, icon }: TarjetaBeneficioProps) {
  return (
    <div className="group flex flex-col items-center text-center gap-3 rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-neutral-100">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-azul-950 transition-all duration-500 group-hover:bg-institucional-50 group-hover:text-institucional-600 group-hover:scale-110">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <p className="text-xs font-bold leading-tight text-azul-950 transition-colors group-hover:text-institucional-600">
        {titulo}
      </p>
    </div>
  );
}
