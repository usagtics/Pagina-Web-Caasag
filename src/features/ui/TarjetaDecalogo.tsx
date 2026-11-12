interface TarjetaDecalogoProps {
  numero: number;
  texto: string;
}

export function TarjetaDecalogo({ numero, texto }: TarjetaDecalogoProps) {
  const numeroFormateado = numero < 10 ? `0${numero}` : `${numero}`;

  return (
    <div className="group relative flex items-start gap-5 bg-white p-6 transition-colors duration-500 hover:bg-gradient-to-br hover:from-azul-50/50 hover:to-white sm:p-8 lg:px-12">
      <div className="absolute left-0 top-0 h-full w-1 bg-azul-900 scale-y-0 transition-transform duration-500 group-hover:scale-y-100 origin-top" />

      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-base sm:text-lg font-black text-azul-200 transition-all duration-500 group-hover:bg-azul-900 group-hover:text-institucional-400 group-hover:shadow-md">
        {numeroFormateado}
      </div>

      <div className="flex-1 pt-1 sm:pt-2">
        <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-light transition-colors duration-500 group-hover:text-azul-950">
          {texto}
        </p>
      </div>

      <div className="hidden sm:flex opacity-0 transition-opacity duration-500 group-hover:opacity-100 pt-2 sm:pt-3">
        <svg
          className="h-5 w-5 text-institucional-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );
}
