import { EventosDetalle, CINTA } from "@/features";

export const metadata = {
  title: "Eventos y Asambleas | CAASAG",
  description:
    "Conoce el detalle de nuestras asambleas, congresos y eventos de vinculación.",
};

export default function EventosPage() {
  return (
    <>
      {/* Aquí podrías poner un Hero pequeño si quisieras, o solo el componente */}
      <EventosDetalle />

      {/* Reutilizamos la cinta de la home para cerrar la página */}
      <CINTA />
    </>
  );
}
