export interface Testimonio {
  video: string;
  cita: string;
  autor: string;
  cargo: string;
}

export const testimonios: Testimonio[] = [
  {
    video: "/testimonios/testimonio1.mp4",
    cita: "Tener el gusto de colaborar con universidades a nivel nacional para impulsar a la educación desde el nivel superior, superior y posgrados, y sentimos la unión de universidades",
    autor: "Lic. José Horacio Ochoa Chávez",
    cargo: "Rector-Instituto Educativo UCAP",
  },
  {
    video: "/testimonios/testimonio2.mp4",
    cita: "Significa llevar a la vanguardia, tener oportunidades con otras empresas y la colaboración de otras instituciones aprendemos.",
    autor: "Lic. Christian Cifuentes Arguello",
    cargo:
      "Rector-Centro de Estudios para la Salud y Asistencias en Emergencias",
  },
  {
    video: "/testimonios/testimonio3.mp4",
    cita: "Es importante que las empresas trabajen de la mano, aprendemos de cada una de las instituciones ya que nos permite ver hacía e futuro y mejorar",
    autor: "Lic. Rubén Ángel Valdez Hoffay Calvo",
    cargo: "Rector-Centro Universitario Acacias",
  },
];
