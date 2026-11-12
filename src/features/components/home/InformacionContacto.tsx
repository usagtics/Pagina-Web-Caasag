import { siteConfig } from "@/shared/config/site";

export function InformacionContacto() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
        Ponte en{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 to-institucional-500">
          Contacto
        </span>
      </h1>
      <p className="text-lg text-azul-200 font-light leading-relaxed mb-10">
        ¿Tienes alguna duda, propuesta de colaboración o quieres formar parte
        del Colegiado? Estamos listos para escucharte y construir juntos el
        futuro de la educación.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-institucional-400">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Correo Electrónico</p>
            <p className="text-sm text-azul-200">{siteConfig.contact.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-institucional-400">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Ubicación</p>
            <p className="text-sm text-azul-200">
              {siteConfig.contact.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
