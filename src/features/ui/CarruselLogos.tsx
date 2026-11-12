import Image from "next/image";

interface CarruselLogosProps {
  logos: string[];
  direccion: "left" | "right";
  duracion: string;
}

export function CarruselLogos({
  logos,
  direccion,
  duracion,
}: CarruselLogosProps) {
  const logosDuplicados = [...logos, ...logos];

  return (
    <div
      className={`flex w-max ${direccion === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      style={{ animationDuration: duracion }}
    >
      {logosDuplicados.map((logo, index) => (
        <div key={`${direccion}-${index}`} className="mx-4 shrink-0">
          <div className="relative flex h-24 w-48 items-center justify-center rounded-2xl border border-neutral-200/50 bg-white p-4 shadow-sm sm:h-28 sm:w-56">
            <Image
              src={logo}
              alt="Logo Institución Agremiada"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
