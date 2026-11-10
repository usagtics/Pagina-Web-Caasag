export const siteConfig = {
  name: "Colegiado de Alianzas Academicas San Andres de Guanajuato.",
  shortName: "CAASAG",

  description: "Colegiado de Alianzas Academicas San Andres de Guanajuato.",

  currentYear: new Date().getFullYear(),

  nav: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },

    {
      label: "Contacto",
      href: "/contacto",
    },
    { label: "Red Académica", href: "/red-academica" },
    { label: "Eventos y Asambleas", href: "/eventos" },
  ],

  contact: {
    address: "Puerto de Cartagena 402, Arbide, 37360 León de los Aldama, Gto.",
    email: "contacto@caasag.mx",
    phone: "",
  },
};
