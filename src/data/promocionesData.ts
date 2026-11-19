export interface Promocion {
  id: string;
  etiqueta: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  meta: string;
  textoBoton: string;
  href: string;
  oscuro?: boolean;
}

export const promocionesDestacadas: Promocion[] = [
  {
    id: "quinta-asamblea",
    etiqueta: "Asamblea Oficial CAASAG 2026",
    titulo: "Quinta Asamblea y Premio Nacional a la Excelencia Académica",
    descripcion:
      "Reconocimiento nacional a las instituciones educativas que transforman la educación. Premiación durante la Cena del Segundo Aniversario de CAASAG.",
    imagen: "/asamblea5/5asamblea.jpg",
    alt: "Quinta Asamblea Oficial CAASAG 2026",
    meta: "27 de noviembre de 2026 · León, Gto.",
    textoBoton: "Conocer bases",
    href: "/convocatorias",
    oscuro: true,
  },
  {
    id: "honoris-causa",
    etiqueta: "Colegio Oficial Internacional de Doctores",
    titulo: "Colegiatura Oficial: Doctorado Honoris Causa",
    descripcion:
      "Únase a una comunidad internacional de excelencia académica con proyección, difusión y alianzas institucionales.",
    imagen: "/honoris.jpg",
    alt: "Colegiatura Oficial Doctorado Honoris Causa",
    meta: "Incluye toga, birrete, diploma y medalla",
    textoBoton: "Más información",
    href: "/convocatorias",
    oscuro: false,
  },
];
