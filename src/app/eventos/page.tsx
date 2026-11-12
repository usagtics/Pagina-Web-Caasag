import { ListaEventos } from "@/features";

export const metadata = {
  title: "Eventos y Asambleas | CAASAG",
  description:
    "Nuestra historia en acción. Conoce los eventos, asambleas y vinculaciones del Colegiado.",
};

export default function EventosPage() {
  return (
    <main className="bg-azul-950 min-h-screen">
      <ListaEventos />
    </main>
  );
}
