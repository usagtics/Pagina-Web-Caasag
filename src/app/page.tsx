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
      <MisionVision />
      <div className="relative overflow-hidden bg-azul-50">
        <Nosotros />
      </div>
      <Pilares />
      <Promociones />
      <Noticias />
      <CINTA />
      <Testimonios />
    </>
  );
}
