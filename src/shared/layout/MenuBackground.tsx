import Image from "next/image";

export function MenuBackground() {
  return (
    <div className="absolute inset-0 bg-azul-950">
      <Image
        src="/cintillo-logos.jpg"
        alt=""
        fill
        className="object-cover opacity-20 mix-blend-luminosity"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-azul-950 via-azul-950/85 to-azul-950/60" />
    </div>
  );
}
