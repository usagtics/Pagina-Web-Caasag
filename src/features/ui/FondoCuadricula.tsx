interface FondoCuadriculaProps {
  className?: string;
  size?: number;
  colorHex?: string;
  opacityHex?: string;
}

export function FondoCuadricula({
  className = "",
  size = 40,
  colorHex = "#ffffff",
  opacityHex = "03",
}: FondoCuadriculaProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colorHex}${opacityHex} 1px, transparent 1px), linear-gradient(to bottom, ${colorHex}${opacityHex} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
