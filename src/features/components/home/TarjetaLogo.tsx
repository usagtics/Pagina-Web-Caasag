import Image from "next/image";

interface TarjetaLogoProps {
  src: string;
  alt: string;
}

export function TarjetaLogo({ src, alt }: TarjetaLogoProps) {
  return (
    <div className="relative flex h-40 w-80 shrink-0 items-center justify-center rounded-2xl border border-neutral-100/50 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="320px"
        className="object-contain p-1"
      />
    </div>
  );
}
