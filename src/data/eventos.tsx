export type Evento = {
  slug: string;
  fecha: string;
  categoria: string;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  imagen: string;
  galeria?: string[];
  videos?: string[];
  contenido?: {
    subtitulo?: string;
    parrafos: string[];
  };
};

export const eventos: Evento[] = [
  {
    slug: "congreso-internacional-universidades",
    fecha: "23 Mayo, 2025",
    categoria: "Congreso",
    titulo: "Congreso Internacional de Universidades",
    descripcion:
      "El Congreso Internacional de Universidades CAASAG 2026 ya es una realidad y estamos listos para recibirte en un evento que reunirá innovación, conocimiento y talento académico en un solo lugar.",
    ubicacion: "Querétaro",
    imagen: "/congreso-universidades.jpeg",
    videos: [
      "/expoproyectos/expoproyectos1.mp4",
      "/expoproyectos/expoproyectos2.mp4",
    ],
    contenido: {
      subtitulo: "Innovación y talento académico en un solo lugar",
      parrafos: [
        "El Congreso Internacional de Universidades CAASAG 2026 ya es una realidad y estamos listos para recibirte en un evento que reunirá innovación, conocimiento y talento académico en un solo lugar.",
        "La Expo Proyectos se consolida como el escaparate ideal para que estudiantes, docentes e investigadores presenten sus desarrollos más vanguardistas. Desde soluciones tecnológicas hasta propuestas de impacto social y sustentabilidad, este espacio está diseñado para conectar el talento universitario con las necesidades reales del sector productivo.",
        "A través de estas dinámicas, no solo se premia la excelencia académica, sino que se fomenta el emprendimiento, el trabajo en equipo y la vinculación estratégica entre las instituciones aliadas de todo el país, demostrando que la educación es el motor más poderoso para transformar nuestra sociedad.",
      ],
    },
  },
  {
    slug: "primera-asamblea-ordinaria",
    fecha: "20-21 Junio, 2025",
    categoria: "Asamblea",
    titulo: "Primera Asamblea Ordinaria CAASAG",
    descripcion:
      "Se aprobaron por unanimidad los nuevos estatutos de colaboración y se presentó el plan estratégico para el siguiente año.",
    ubicacion: "León, Gto.",
    imagen: "/asamblea1/primera-asamblea1.jpg",
    galeria: [
      "/asamblea1/foto-asamblea1.jpg",
      "/asamblea1/foto1-asamblea1.jpg",
      "/asamblea1/foto3-asamblea3.jpg",
      "/asamblea1/foto4-asamblea1.jpg",
      "/asamblea1/foto5-asamblea1.jpg",
      "/asamblea1/foto6-asamblea1.jpg",
      "/asamblea1/foto7-asamblea1.jpg",
    ],
    videos: ["/asamblea1/Primer-Asamblea.mp4"],
    contenido: {
      subtitulo:
        "Así se vivió la primera Asamblea Oficial del Colegiado y Alianzas Académicas San Andrés de Guanajuato.",
      parrafos: [
        "Un encuentro histórico en un ambiente de colaboración, compromiso y visión educativa, celebramos con orgullo nuestra primera asamblea oficial este junio de 2025 en la ciudad de León, Guanajuato.",
        "Un encuentro histórico que marca el inicio de una nueva etapa para fortalecer alianzas. Al evento se dieron cita representantes de diversas escuelas, universidades y centros educativos de la región, quienes se reunieron con el objetivo de compartir experiencias, establecer lazos de colaboración y construir un futuro más sólido para nuestros estudiantes, docentes e instituciones aliadas.",
        "Durante la jornada, se discutieron temas clave sobre el futuro de la educación, se presentaron nuevos proyectos académicos y se reafirmó el compromiso del Colegiado con la excelencia educativa en el estado. La primera asamblea oficial del Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG) se consolida así como un espacio de diálogo, colaboración y fortalecimiento de las alianzas académicas entre instituciones educativas, docentes y estudiantes.",
      ],
    },
  },
  {
    slug: "nueva-planta-bosch",
    fecha: "21 Septiembre, 2026",
    categoria: "Vinculación Institucional",
    titulo: "Nueva Planta de Bosch",
    descripcion:
      "Encuentro de líderes de los sectores público, privado y educativo en la Planta Centenario de Bosch Car Service para fortalecer la vinculación y preparar el talento ante retos como la electromovilidad.",
    ubicacion: "León, Gto.",
    imagen: "/plantabosch/foto3-pantabosch.jpg",
    galeria: [
      "/plantabosch/foto1-plantabosch.jpg",
      "/plantabosch/foto2-plantabosch.jpg",
      "/plantabosch/foto3-pantabosch.jpg",
      "/plantabosch/foto4-plantabosch.jpg",
      "/plantabosch/foto5-plantabosch.jpg",
      "/plantabosch/foto6-plantabosch.jpg",
      "/plantabosch/foto7-plantabosch.jpg",
    ],
    videos: ["/plantabosch/plantabosch.mp4"],
    contenido: {
      subtitulo:
        "Vinculación estratégica: Educación y sector productivo de la mano",
      parrafos: [
        "Encuentro de Líderes de los Sectores Público, Privado, Empresarial y Educativo, realizado en la Planta Centenario – Bosch Car Service.",
        "Más allá de la apertura de nuevas instalaciones, este proyecto representa una oportunidad para fortalecer la vinculación entre el sector educativo y productivo, apostando por la especialización continua del talento humano y preparándonos para los nuevos retos que plantea la electromovilidad y las energías sustentables.",
        "Sin duda, este tipo de iniciativas contribuyen a transformar la educación en un motor de innovación, empleabilidad y competitividad, impulsando desde Guanajuato el desarrollo sustentable de nuestro país.",
      ],
    },
  },
  {
    slug: "segunda-asamblea-ordinaria",
    fecha: "2025",
    categoria: "Asamblea",
    titulo: "Segunda Asamblea Ordinaria CAASAG 2025",
    descripcion:
      "Más de 60 instituciones educativas de la República Mexicana se reunieron para dar la bienvenida a nuevos agremiados y fortalecer la educación.",
    ubicacion: "Puerto Vallarta, Jalisco",
    imagen: "/asamblea2/segunda-asambleaaa.jpg",
    galeria: [
      "/asamblea2/foto1-asamblea2.jpg",
      "/asamblea2/foto2-asamblea2.jpg",
      "/asamblea2/foto3-asamblea2.jpg",
      "/asamblea2/foto4-asamblea2.jpg",
      "/asamblea2/foto5-asamblea2.jpg",
      "/asamblea2/foto6-asamblea2.jpg",
      "/asamblea2/foto7-asamblea2.jpg",
      "/asamblea2/foto8-asamblea2.jpg",
      "/asamblea2/foto9-asamblea2.jpg",
    ],
    contenido: {
      subtitulo:
        "Así se vivió el primer día de nuestra 2ª Asamblea Oficial CAASAG 2025",
      parrafos: [
        "Con gran orgullo recibimos a más de 60 instituciones educativas de toda la República Mexicana, en un encuentro que fortalece nuestra trayectoria, formación, educación e innovación.",
        "Durante esta jornada se dio la integración de nuevos agremiados, reafirmando el compromiso de todos por impulsar una educación de calidad, basada en la colaboración, la ética y el trabajo conjunto.",
      ],
    },
  },
  {
    slug: "tercera-asamblea-ordinaria",
    fecha: "22 Mayo, 2026",
    categoria: "Asamblea",
    titulo: "Tercera Asamblea Ordinaria CAASAG",
    descripcion:
      "Se llevó a cabo la firma de nuevos convenios de colaboración y alianzas estratégicas en el Centro de Congresos de Querétaro, destacando la vinculación con BOSCH CAR SERVICE.",
    ubicacion: "Querétaro",
    imagen: "/asamblea3/tercera-asambleaa.jpg",
    galeria: [
      "/asamblea3/foto-asamblea3.jpg",
      "/asamblea3/foto2-asamblea3.jpg",
      "/asamblea3/foto4-asamblea3.jpg",
      "/asamblea3/foto5-asamblea3.jpg",
      "/asamblea3/foto6-asamblea3.jpg",
      "/asamblea3/foto7-asamblea3.jpg",
      "/asamblea3/foto8-asamblea3.jpg",
      "/asamblea3/foto9-asamblea3.jpg",
    ],
    videos: ["/asamblea3/video-asamblea3.mp4"],
    contenido: {
      subtitulo: "Nuevas alianzas estratégicas para el futuro de la educación",
      parrafos: [
        "El pasado 22 de mayo de 2025, el Centro de Congresos de Querétaro fue el escenario de nuestra Tercera Asamblea Ordinaria de CAASAG. Un encuentro trascendental que reunió a líderes y representantes de las principales instituciones educativas de la región para definir el rumbo del colegiado.",
        "Durante esta jornada, el fortalecimiento del ecosistema académico y laboral fue el tema central. Nos enorgullece anunciar la firma de nuevos convenios de colaboración y alianzas estratégicas que ampliarán las oportunidades de nuestros estudiantes. Destaca de manera especial la integración y vinculación con BOSCH CAR SERVICE, una alianza que representa un paso firme hacia la formación de profesionales altamente capacitados en el sector automotriz.",
        "Esta colaboración une la excelencia académica de nuestras instituciones con la experiencia y tecnología de una empresa líder a nivel mundial. Con estas acciones, el Colegiado de Alianzas Académicas San Andrés de Guanajuato (CAASAG) reafirma su compromiso de construir puentes entre la educación y el sector productivo, impulsando el desarrollo y elevando la calidad educativa en el estado.",
      ],
    },
  },
  {
    slug: "rueda-de-prensa",
    fecha: "03 Noviembre, 2025",
    categoria: "Prensa",
    titulo: "Rueda de Prensa CAASAG 2026",
    descripcion:
      "El Colegiado y Alianzas Académicas San Andrés de Guanajuato te invita a conocer los detalles del Evento Institucional CAASAG 2026, compartiendo sus objetivos, alcances y principales actividades.",
    ubicacion: "Guanajuato",
    imagen: "/rueda-prensa.jpg",
    videos: ["/ruedaprensa/rueda-prensa.mp4", "/ruedaprensa/rueda-prensa1.mp4"],
    contenido: {
      subtitulo:
        "Presentando el futuro de la educación: Evento Institucional CAASAG 2026",
      parrafos: [
        "En un ejercicio de transparencia y vinculación con los medios de comunicación, el Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG) llevó a cabo su esperada Rueda de Prensa. Un espacio dedicado a revelar los pormenores del próximo Evento Institucional CAASAG 2026.",
        "Durante la presentación, se compartieron a detalle los objetivos estratégicos, los alcances esperados y el extenso programa de actividades que conformarán este magno evento. Se destacó la importancia de este encuentro como un punto de convergencia para líderes académicos, representantes del sector productivo y autoridades gubernamentales.",
        "Esta rueda de prensa marca el banderazo de salida hacia un evento que promete transformar el panorama educativo de la región, apostando por la innovación, la vinculación intersectorial y el desarrollo de talento humano altamente capacitado para los retos del futuro.",
      ],
    },
  },
];

export function getEventoBySlug(slug: string): Evento | undefined {
  return eventos.find((evento) => evento.slug === slug);
}
