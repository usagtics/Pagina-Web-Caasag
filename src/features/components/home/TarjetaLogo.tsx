import Image from "next/image";

interface TarjetaLogoProps {
  src: string;
  alt: string;
}

export function TarjetaLogo({ src, alt }: TarjetaLogoProps) {
  return (
    <div className="relative flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-neutral-100/50 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="256px"
        className="object-contain p-2"
      />
    </div>
  );
}
