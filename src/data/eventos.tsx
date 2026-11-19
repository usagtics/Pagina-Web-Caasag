import { dd } from "framer-motion/client";

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
    puntosClave?: {
      titulo: string;
      descripcion: string;
      imagenes: string[];
    }[];
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
    imagen: "/asamblea2/foto6-asamble2.jpg",
    galeria: [
      "/asamblea2/foto1-asamblea2.jpg",
      "/asamblea2/foto2-asamblea2.jpg",
      "/asamblea2/foto3-asamblea2.jpg",
      "/asamblea2/foto4-asamblea2.jpg",
      "/asamblea2/foto5-asamblea2.jpg",
      "/asamblea2/foto6-asamble2.jpg",
      "/asamblea2/foto7-asamblea2.jpg",
      "/asamblea2/foto8-asamblea2.jpg",
      "/asamblea2/foto9-asamblea2.jpg",
    ],
    contenido: {
      subtitulo:
        "Así se vivió el primer día de nuestra 2ª Asamblea Oficial CAASAG 2025",
      parrafos: [
        "Con gran orgullo recibimos a las instituciones educativas de toda la República Mexicana, en un encuentro que fortalece nuestra trayectoria, formación, educación e innovación.",
        "Durante esta jornada se dio la integración de nuevos agremiados, reafirmando el compromiso de todos por impulsar una educación de calidad, basada en la colaboración, la ética y el trabajo conjunto.",
      ],
      puntosClave: [
        {
          titulo: "Colocación de Pin Institucional",
          descripcion:
            "Momento conmemorativo de la asamblea donde se realizó la colocación del pin institucional, dando la bienvenida oficial y toma de protesta a los nuevos agremiados que se integran a nuestra red académica.",
          imagenes: [
            "/asamblea2/colocacionPin/foto1-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto2-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto3-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto4-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto5-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto6-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto7-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto8-colocacionPin.jpg",
            "/asamblea2/colocacionPin/foto10-colocacionPin.jpg",
          ],
        },
        {
          titulo: "Cena de Gala y Networking",
          descripcion:
            "Encuentro de clausura para fortalecer las relaciones institucionales y compartir perspectivas entre rectores, directores e invitados.",
          imagenes: [
            "/asamblea2/cenagala/foto1-cenagala.jpg",
            "/asamblea2/cenagala/foto2-cenagala.jpg",
            "/asamblea2/cenagala/foto3-cenagala.jpeg",
            "/asamblea2/cenagala/foto4-cenagala.jpeg",
          ],
        },
        {
          titulo: "Entrega de Actas",
          descripcion:
            "Momento culminante de la asamblea donde se realizó la entrega oficial de actas a las instituciones participantes. Este acto protocolario representa la formalización de nuestros acuerdos y el compromiso compartido de seguir trabajando por la excelencia educativa dentro de nuestra comunidad.",
          imagenes: [
            "/asamblea2/entrega-actas/foto1-entregaactas.jpg",
            "/asamblea2/entrega-actas/foto2-entregaactas.jpg",
            "/asamblea2/entrega-actas/foto3-entregaactas.jpg",
            "/asamblea2/entrega-actas/foto4-entregaactas.jpg",
          ],
        },
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
    slug: "rueda-de-prensa-queretaro",
    titulo:
      "Rueda de Prensa Congreso Internacional de Universidades CAASAG 2026",
    fecha: "Octubre 2026",
    categoria: "Prensa",
    ubicacion: "Querétaro, Qro.",
    imagen: "/asamblea3/rueda-prensa/foto1-ruedaprensaqro.jpg",
    descripcion:
      "Anuncio oficial ante los medios de comunicación sobre los preparativos, objetivos y alcances del próximo Congreso Internacional de Universidades CAASAG 2026.",
    contenido: {
      subtitulo: "Rumbo al evento académico más importante del año",
      parrafos: [
        "Con gran entusiasmo, nos reunimos con los medios de comunicación en la ciudad de Querétaro para presentar oficialmente los detalles del Congreso Internacional de Universidades CAASAG 2026. Durante este encuentro, compartimos la visión, los ejes temáticos y las grandes oportunidades que este magno evento ofrecerá a nuestra comunidad.",
        "Esta rueda de prensa marca el inicio formal de los preparativos para recibir a instituciones, docentes y líderes del sector educativo. A través de este espacio, extendemos una invitación abierta a sumarse a esta iniciativa que busca transformar la educación y fortalecer las alianzas estratégicas a nivel nacional.",
      ],
    },

    videos: ["/asamblea3/rueda-prensa/rueda-prensaqro.mp4"],
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
  {
    slug: "jugueton",
    fecha: "09 Diciembre, 2025",
    categoria: "Donaciones",
    titulo: "Juguetón 2025",
    descripcion:
      "CAASAG se suma a la alegría de compartir, llevando juguetes y sonrisas a los niños.",
    ubicacion: "Guanajuato",
    imagen: "/jugueton/foto5-jugueton.png",
    contenido: {
      subtitulo:
        "Una pequeña muestra de solidaridad puede convertirse en una gran sonrisa. Gracias a todos los que hicieron posible esta donación.",
      parrafos: [
        "El Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG) participó con entusiasmo en el Juguetón 2025, sumándose a esta noble iniciativa mediante la donación de juguetes para niñas y niños.",
        "A través de esta acción, reafirmamos nuestro compromiso con la solidaridad y el bienestar de nuestra comunidad, contribuyendo a que más pequeños reciban un regalo y vivan momentos llenos de alegría e ilusión.",
        "Agradecemos a todas las personas que hicieron posible esta donación. Cada juguete representa un gesto de cariño, generosidad y esperanza que puede transformar el día de un niño.",
      ],
    },
    galeria: [
      "/jugueton/foto1-jugueton.jpg",
      "/jugueton/foto2-jugueton.jpg",
      "/jugueton/foto3-jugueton.jpg",
      "/jugueton/foto4-juegueton.jpg",
      "/jugueton/foto5-jugueton.jpg",
    ],
  },
  {
    slug: "electromovilidad",
    fecha: "08 Julio, 2025",
    categoria: "Eventos",
    titulo: "Evento de Electromovilidad",
    descripcion:
      "CAASAG participa en actividades relacionadas con la innovación, la movilidad sostenible y el desarrollo de nuevas tecnologías en el sector automotriz.",
    ubicacion: "León, Guanajuato",
    imagen: "/asamblea1/electromovilidad/foto2-electromovilidad.png",
    contenido: {
      subtitulo:
        "La innovación y la tecnología impulsan nuevas formas de movilidad hacia un futuro más sostenible.",
      parrafos: [
        "El Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG) participó en el Evento de Electromovilidad, un espacio enfocado en conocer los avances tecnológicos y las nuevas tendencias que están transformando el sector de la movilidad.",
        "Durante esta actividad se destacó la importancia de impulsar alternativas de transporte más eficientes y sostenibles, así como de promover el conocimiento y la vinculación con las nuevas tecnologías que contribuyen al desarrollo de la industria automotriz.",
        "Con este tipo de participaciones, CAASAG reafirma su interés en generar espacios de acercamiento con los sectores productivos, fortalecer la colaboración institucional y mantenerse vinculado con las innovaciones que contribuyen al desarrollo de Guanajuato.",
      ],
    },
    galeria: [
      "/asamblea1/electromovilidad/foto1-electromovilidad.png",
      "/asamblea1/electromovilidad/foto3-electromovilidad.jpg",
      "/asamblea1/electromovilidad/foto4-electromovilidad.jpg",
      "/asamblea1/electromovilidad/foto2-electromovilidad.png",
      "/asamblea1/electromovilidad/foto5-electromovilidad.jpg",
    ],
  },
  {
    slug: "reiyukai",
    fecha: "08 Julio, 2025",
    categoria: "Eventos",
    titulo: "Encuentro con Reiyukai",
    descripcion:
      "CAASAG fortalece los lazos de colaboración institucional y el acercamiento con organizaciones comprometidas con el desarrollo humano y el bienestar de la sociedad.",
    ubicacion: "León, Guanajuato",
    imagen: "/reiyukai/foto3-reiyukai.jpeg",
    contenido: {
      subtitulo:
        "El compromiso social y el desarrollo humano fortalecen la construcción de una sociedad más solidaria.",
      parrafos: [
        "El Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG) participó en un encuentro con representantes de Reiyukai, organización de origen japonés que promueve valores humanos, el desarrollo personal y la contribución al bienestar de la sociedad.",
        "Durante esta actividad se destacó la importancia de fomentar valores como el respeto, la responsabilidad, la solidaridad y el compromiso con los demás, principios que contribuyen a la formación integral de las personas y al fortalecimiento de las comunidades.",
        "Con este tipo de encuentros, CAASAG reafirma su interés en establecer vínculos con organizaciones que comparten una visión de desarrollo humano y compromiso social, impulsando espacios de diálogo, colaboración y aprendizaje mutuo.",
      ],
    },
    galeria: [
      "/reiyukai/foto1-reiyukai.jpg",
      "/reiyukai/foto2-reiyukai.jpg",
      "/reiyukai/foto3-reiyukai.jpeg",
      "/reiyukai/foto4-reiyukai.jpg",
    ],
  },
  {
    slug: "quinta-asamblea",
    fecha: "27 Noviembre, 2026",
    categoria: "Eventos",
    titulo: "Quinta Asamblea Ordinaria",
    descripcion:
      "CAASAG llevará a cabo su Quinta Asamblea en su Casa Corporativa, en León, Guanajuato, reuniendo a sus integrantes en un espacio de diálogo, colaboración y fortalecimiento institucional.",
    ubicacion: "Corporativo CAASAG, León, Guanajuato",
    imagen: "/asamblea5/5asamblea.jpg",
    contenido: {
      subtitulo:
        "Un encuentro para fortalecer los lazos institucionales, compartir objetivos y continuar impulsando la colaboración académica.",
      parrafos: [
        "El próximo 27 de noviembre de 2026, el Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG) celebrará su Quinta Asamblea en su Corporativo, ubicado en la ciudad de León, Guanajuato.",
        "Esta reunión representa una oportunidad para generar un espacio de encuentro entre los integrantes de CAASAG, compartir avances, dialogar sobre temas de interés institucional y dar continuidad a las acciones que fortalecen el trabajo colaborativo.",
        "A través de esta Quinta Asamblea, CAASAG reafirma su compromiso con la integración, la participación y el fortalecimiento de alianzas que contribuyan al desarrollo académico e institucional.",
      ],
    },
    galeria: [],
    videos: ["/video1-caasag.mp4", "/video2-caasag.mp4", "/video3-caasag.mp4"],
  },

  {
    slug: "doctorado-honoris-causa-segunda-asamblea",
    fecha: "2025",
    categoria: "Eventos",
    titulo: "Entrega del Doctorado Honoris Causa",
    descripcion:
      "Durante la Segunda Asamblea del Colegiado y Alianzas Académicas San Andrés de Guanajuato se llevó a cabo la entrega del Doctorado Honoris Causa, un reconocimiento a la entrega, liderazgo y compromiso con la educación.",
    ubicacion: "Puerto Vallarta, Jalisco",
    imagen: "/asamblea2/honoriscausa/foto3-honoris.jpg",
    contenido: {
      subtitulo:
        "Un reconocimiento a la entrega, el liderazgo y el compromiso con la transformación educativa.",
      parrafos: [
        "En el marco de la Segunda Asamblea del Colegiado y Alianzas Académicas San Andrés de Guanajuato (CAASAG), se llevó a cabo la ceremonia de entrega del Doctorado Honoris Causa, uno de los momentos más significativos del encuentro.",
        "Esta distinción reconoció la entrega, el liderazgo y el firme compromiso con la educación, destacando trayectorias que impulsan la excelencia académica y generan un impacto positivo en la formación de nuevas generaciones.",
        "Con este reconocimiento, CAASAG reafirma su propósito de visibilizar y respaldar a quienes fortalecen el ámbito educativo a través de su vocación, trabajo constante y visión de futuro.",
      ],
    },
    galeria: [
      "/asamblea2/honoriscausa/foto1-honoris.jpg",
      "/asamblea2/honoriscausa/foto2-honoris.jpg",
      "/asamblea2/honoriscausa/foto3-honoris.jpg",
      "/asamblea2/honoriscausa/foto4-honoris.jpg",
      "/asamblea2/honoriscausa/foto5-honoris.jpg",
      "/asamblea2/honoriscausa/foto6-honoris.jpg",
    ],
  },
];

export function getEventoBySlug(slug: string): Evento | undefined {
  return eventos.find((evento) => evento.slug === slug);
}
