interface TransicionCortinaProps {
  isWiping: boolean;
}

export function TransicionCortina({ isWiping }: TransicionCortinaProps) {
  return (
    <div className="absolute inset-0 z-20 flex pointer-events-none">
      {[0, 1, 2, 3, 4].map((panel, i) => (
        <div
          key={panel}
          className={`h-full flex-1 transition-transform duration-700 ease-in-out ${
            i % 2 === 0 ? "bg-azul-900" : "bg-institucional-600"
          }`}
          style={{
            transform: isWiping ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: isWiping ? "right" : "left",
            transitionDelay: isWiping ? `${i * 80}ms` : `${(4 - i) * 80}ms`,
          }}
        />
      ))}
    </div>
  );
}
