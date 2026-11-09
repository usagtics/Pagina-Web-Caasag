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
    address: "Guanajuato, México",
    email: "contacto@caasag.mx",
    phone: "",
  },
};
