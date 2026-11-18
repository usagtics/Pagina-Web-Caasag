import { Borel } from "next/font/google";

export interface Convenio {
  id: string;
  institucion: string;
  logoUrl: string;
  tipo: string;
  descripcion: string;
  destacado?: boolean;
}

export interface HeroData {
  badge: string;
  titulo: string;
  tituloDestacado: string;
  subtitulo: string;
  imagenesFondo: string[];
}

export const heroConveniosData: HeroData = {
  badge: "Vinculación Institucional",
  titulo: "Alianzas que",
  tituloDestacado: "Transforman.",
  subtitulo:
    "Establecemos acuerdos de colaboración con instituciones educativas, organismos y empresas para fortalecer la formación académica y generar oportunidades de desarrollo para nuestra comunidad.",
  imagenesFondo: [
    "/convenios/foto8-convenios.jpeg",
    "/convenios/foto1-convenios.jpg",
    "/convenios/foto2-convenios.jpg",
    "/convenios/foto4-convenios.jpg",
    "/convenios/foto7-convenios.jpeg",
    "/convenios/foto5-convenios.jpg",
    "/convenios/foto6-convenios.jpg",
  ],
};

export const conveniosData: Convenio[] = [
  {
    id: "sep",
    institucion: "Secretaría de Educación Pública",
    logoUrl: "/convenios/logo-sep.png",
    tipo: "Sector Educativo",
    descripcion:
      "Colaboración orientada al fortalecimiento de la educación, el desarrollo de iniciativas académicas y la vinculación con el sector público.",
    destacado: true,
  },
  {
    id: "ceneval",
    institucion: "CENEVAL",
    logoUrl: "/convenios/LogoCeneval.png",
    tipo: "Evaluación Educativa",
    descripcion:
      "Vinculación en materia de evaluación educativa mediante instrumentos que permiten valorar conocimientos, habilidades y competencias académicas.",
    destacado: true,
  },
  {
    id: "bosch",
    institucion: "Bosch Service",
    logoUrl: "/convenios/Bosch_Car_Service_Logo.png",
    tipo: "Sector Empresarial",
    descripcion:
      "Acercamiento con el sector automotriz y de servicios para promover el intercambio de conocimientos y la vinculación entre la formación académica y el entorno laboral.",
  },
  {
    id: "sinergia",
    institucion: "Sinergia",
    logoUrl: "/convenios/LogoSinergia.jpeg",
    tipo: "Colaboración Institucional",
    descripcion:
      "Cooperación para impulsar iniciativas conjuntas, fortalecer la vinculación entre organizaciones y generar espacios de colaboración.",
  },
  {
    id: "tv-azteca",
    institucion: "TV Azteca",
    logoUrl: "/convenios/LogoTVAZTECA.png",
    tipo: "Medios de Comunicación",
    descripcion:
      "Vinculación con el sector de medios de comunicación para fomentar la colaboración institucional y el acercamiento con el entorno social y profesional.",
  },
  {
    id: "Reiyukai",
    institucion: "Reiyukai de México AC",
    logoUrl: "/convenios/reiyukai.png",
    tipo: "Organización Social",
    descripcion:
      "Colaboración institucional con Reiyukai de México A.C., orientada a fortalecer los vínculos con organizaciones de la sociedad civil y promover iniciativas de participación, solidaridad y compromiso social.",
  },
  {
    id: "Compax",
    institucion: "Compax",
    logoUrl: "/convenios/compax.png",
    tipo: "Tecnología",
    descripcion:
      "Vinculación con el sector tecnológico para impulsar la colaboración institucional y facilitar el acceso a herramientas y recursos informáticos que contribuyan al fortalecimiento de las actividades académicas y administrativas.",
  },
];
