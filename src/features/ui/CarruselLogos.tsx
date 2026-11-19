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
          <div className="relative flex h-32 w-64 items-center justify-center rounded-2xl border border-neutral-200/50 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-36 sm:w-72">
            <Image
              src={logo}
              alt="Logo Institución Agremiada"
              fill
              sizes="(max-width: 640px) 256px, 288px"
              className="object-contain p-2 sm:p-3"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
