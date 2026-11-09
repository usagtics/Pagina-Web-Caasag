import {
  Hero,
  Aliados,
  MisionVision,
  Nosotros,
  Pilares,
  Noticias,
  CINTA,
  Testimonios,
} from "@/features";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Aliados />

      <div className="relative overflow-hidden bg-azul-50">
        <MisionVision />
        <Nosotros />
      </div>

      <Pilares />
      <Noticias />
      <CINTA />
      <Testimonios />
    </>
  );
}
