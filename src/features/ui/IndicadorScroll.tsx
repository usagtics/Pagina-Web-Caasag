interface IndicadorScrollProps {
  texto?: string;
}

export function IndicadorScroll({
  texto = "Descubre más",
}: IndicadorScrollProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-widest text-white/50">
        {texto}
      </span>
      <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
    </div>
  );
}
