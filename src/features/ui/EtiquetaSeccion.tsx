interface EtiquetaSeccionProps {
  texto: string;
  className?: string;
}

export function EtiquetaSeccion({
  texto,
  className = "",
}: EtiquetaSeccionProps) {
  return (
    <div
      className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-institucional-500 animate-pulse" />
      <span className="text-xs font-bold uppercase tracking-widest text-azul-100">
        {texto}
      </span>
    </div>
  );
}
