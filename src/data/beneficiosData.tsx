import { ReactNode } from "react";

export interface Beneficio {
  etiqueta: string;
  titulo: string;
  texto: string;
  icono: ReactNode;
  colSpan: string;
}

export const beneficios: Beneficio[] = [
  {
    etiqueta: "01 / Innovación",
    titulo: "Innovación educativa y tecnológica",
    texto:
      "Impulsamos la adopción de nuevas herramientas y metodologías digitales para transformar la enseñanza en nuestras instituciones aliadas.",
    icono: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    colSpan: "md:col-span-2",
  },
  {
    etiqueta: "02 / Vinculación",
    titulo: "Vinculación académica interinstitucional",
    texto:
      "Creamos puentes de colaboración entre escuelas y universidades para compartir experiencias, recursos y mejores prácticas.",
    icono: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "03 / Asesoría",
    titulo: "Consultoría y asesoría educativa",
    texto:
      "Brindamos acompañamiento especializado para la mejora continua de los procesos académicos y administrativos de tu institución.",
    icono: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "04 / Excelencia",
    titulo: "Actualización permanente",
    texto:
      "Fomentamos la capacitación constante de docentes y directivos para mantener los más altos estándares de excelencia educativa.",
    icono: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    colSpan: "md:col-span-1",
  },
  {
    etiqueta: "05 / Digital",
    titulo: "Plataformas virtuales y entornos digitales",
    texto:
      "Facilitamos el acceso a herramientas tecnológicas que potencian el aprendizaje, la gestión escolar y la conexión remota.",
    icono: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    colSpan: "md:col-span-1",
  },
];
