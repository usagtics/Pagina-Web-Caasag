import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";

export function Footer() {
  return (
    <footer className="relative bg-white pt-20 pb-8 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.05)]">
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-institucional-500 to-transparent opacity-50"></div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        <div className="lg:col-span-2 flex flex-col items-start">
          <div className="relative mb-6 h-20 w-20 rounded-2xl border border-neutral-100 shadow-sm p-2 bg-white">
            <Image
              src="/caasag-colores.png"
              alt="Logo CAASAG"
              fill
              className="object-contain p-1"
            />
          </div>
          <p className="text-xl font-bold text-azul-800 mb-3">
            {siteConfig.shortName}
          </p>
          <p className="text-sm leading-relaxed text-neutral-600 max-w-sm">
            {siteConfig.description}
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61577213166008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-azul-50 text-azul-800 transition-colors hover:bg-institucional-500 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-azul-50 text-azul-800 transition-colors hover:bg-institucional-500 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-azul-800 mb-6">
            Navegación
          </p>
          <ul className="space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center text-sm text-neutral-600 transition-colors hover:text-institucional-600"
                >
                  <span className="mr-2 h-px w-0 bg-institucional-500 transition-all duration-300 group-hover:w-4"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-azul-800 mb-6">
            Contacto
          </p>
          <ul className="space-y-4 text-sm text-neutral-600">
            <li className="flex items-start gap-3">
              <svg
                className="h-5 w-5 shrink-0 text-institucional-500"
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
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="h-5 w-5 shrink-0 text-institucional-500"
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
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-institucional-600 transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            {siteConfig.contact.phone && (
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-institucional-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-institucional-600 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-neutral-100 bg-neutral-50/50 py-6">
        <p className="text-center text-xs font-medium text-neutral-500">
          © {siteConfig.currentYear} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
