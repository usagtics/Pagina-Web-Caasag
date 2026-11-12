interface TarjetaValorProps {
  name: string;
  icon: string;
}

export function TarjetaValor({ name, icon }: TarjetaValorProps) {
  return (
    <div className="group flex flex-1 items-center gap-5 rounded-2xl bg-white p-5 shadow-sm border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-azul-950 transition-all duration-300 group-hover:bg-azul-950 group-hover:text-institucional-400">
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
      <span className="text-sm sm:text-base font-bold text-azul-950 uppercase tracking-wider">
        {name}
      </span>
    </div>
  );
}
