import {
  Hero,
  Aliados,
  Promociones,
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
      <Promociones />

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
