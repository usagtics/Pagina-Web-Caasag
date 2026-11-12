import { TarjetaLogo } from "./TarjetaLogo";

interface LogoItem {
  src: string;
  alt: string;
}

interface FilaLogosProps {
  logos: LogoItem[];
  duplicar?: boolean;
}

export function FilaLogos({ logos, duplicar = false }: FilaLogosProps) {
  return (
    <div
      className="flex items-center gap-6 px-3"
      aria-hidden={duplicar ? true : undefined}
    >
      {logos.map((logo) => (
        <TarjetaLogo
          key={`${logo.src}-${duplicar ? "dup" : "orig"}`}
          src={logo.src}
          alt={duplicar ? "" : logo.alt}
        />
      ))}
    </div>
  );
}
