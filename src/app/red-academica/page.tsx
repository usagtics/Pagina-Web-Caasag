import {
  HeroRedAcademica,
  LogosRed,
  Decalogo,
  CintilloInstituciones,
} from "@/features";

export const metadata = {
  title: "Red Académica | CAASAG",
  description:
    "Conoce las instituciones que forman parte de nuestro Colegiado.",
};

export default function RedAcademicaPage() {
  return (
    <>
      <HeroRedAcademica />
      <LogosRed />
      <Decalogo />
      <CintilloInstituciones />
    </>
  );
}
