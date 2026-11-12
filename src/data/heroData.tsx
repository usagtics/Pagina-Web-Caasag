export interface SlideHero {
  titulo: React.ReactNode;
  subtitulo: string;
  imagen: string;
  posicion: string;
  boton1?: string;
  link1?: string;
  boton2?: string;
  link2?: string;
}

export const heroSlides: SlideHero[] = [
  {
    titulo: (
      <>
        <span className="text-institucional-400">CAASAG</span> Colegiado de
        Alianzas Académicas San Andrés de Guanajuato
      </>
    ),
    subtitulo:
      "Impulsamos la colaboración entre instituciones académicas para fortalecer la excelencia educativa y el desarrollo de nuestra región.",
    imagen: "/asamblea1.jpeg",
    posicion: "object-[20%_25%]",
    boton1: "Conócenos",
    link1: "/nosotros",
    boton2: "Contactar",
    link2: "/contacto",
  },
  {
    titulo: (
      <>
        Forjando el{" "}
        <span className="text-institucional-400">Futuro Académico</span> de
        Guanajuato
      </>
    ),
    subtitulo:
      "Únete a una comunidad comprometida con la innovación y el éxito profesional.",
    imagen: "/carrousel.jpeg",
    posicion: "object-[center_30%]",
    boton1: "Nuestra Red",
    link1: "/aliados",
    boton2: "Contactar",
    link2: "/contacto",
  },
  {
    titulo: (
      <>
        Creando{" "}
        <span className="text-institucional-400">Alianzas Estratégicas</span>{" "}
        que Transforman
      </>
    ),
    subtitulo:
      "Trabajamos de la mano con las mejores instituciones para generar un impacto positivo y sostenible en la sociedad.",
    imagen: "/carrousel1.jpeg",
    posicion: "object-[center_20%]",
    boton1: "Nuestra Red",
    link1: "/aliados",
    boton2: "Conócenos",
    link2: "/sobre-nosotros",
  },
];
