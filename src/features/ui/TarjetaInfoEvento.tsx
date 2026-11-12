import { ReactNode } from "react";

interface TarjetaInfoEventoProps {
  icono: ReactNode;
  etiqueta: string;
  valor: string;
}

export function TarjetaInfoEvento({
  icono,
  etiqueta,
  valor,
}: TarjetaInfoEventoProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
      <div className="rounded-full bg-institucional-100 p-2 text-institucional-600">
        {icono}
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {etiqueta}
        </p>
        <p className="text-sm font-semibold text-azul-950">{valor}</p>
      </div>
    </div>
  );
}
