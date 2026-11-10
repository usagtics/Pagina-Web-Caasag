"use client";

import { useState } from "react";
import { siteConfig } from "@/shared/config/site";

export function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section className="relative min-h-screen w-full bg-azul-950 pt-32 pb-24 overflow-hidden">
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] animate-blob rounded-full bg-azul-600/20 mix-blend-multiply blur-[120px] filter"></div>
        <div className="animation-delay-2000 absolute right-0 top-40 h-[400px] w-[400px] animate-blob rounded-full bg-institucional-500/20 mix-blend-multiply blur-[120px] filter"></div>
        <div className="animation-delay-4000 absolute bottom-40 left-1/4 h-[400px] w-[400px] animate-blob rounded-full bg-azul-300/10 mix-blend-multiply blur-[120px] filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Ponte en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-institucional-300 to-institucional-500">
                Contacto
              </span>
            </h1>
            <p className="text-lg text-azul-200 font-light leading-relaxed mb-10">
              ¿Tienes alguna duda, propuesta de colaboración o quieres formar
              parte del Colegiado? Estamos listos para escucharte y construir
              juntos el futuro de la educación.
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
                  <p className="text-sm font-bold text-white">
                    Correo Electrónico
                  </p>
                  <p className="text-sm text-azul-200">
                    {siteConfig.contact.email}
                  </p>
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

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            {enviado ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-institucional-500/20 text-institucional-400">
                  <svg
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-azul-200 text-sm">
                  Gracias por escribirnos. Nos pondremos en contacto contigo a
                  la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-azul-200">
                    Nombre completo
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-azul-950/50 px-4 py-3 text-white placeholder-gray-500 focus:border-institucional-500 focus:outline-none focus:ring-1 focus:ring-institucional-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-azul-200">
                    Correo electrónico
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-azul-950/50 px-4 py-3 text-white placeholder-gray-500 focus:border-institucional-500 focus:outline-none focus:ring-1 focus:ring-institucional-500 transition-all"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-azul-200">
                    Asunto
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-azul-950/50 px-4 py-3 text-white placeholder-gray-500 focus:border-institucional-500 focus:outline-none focus:ring-1 focus:ring-institucional-500 transition-all"
                    placeholder="Motivo de tu mensaje"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-azul-200">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-azul-950/50 px-4 py-3 text-white placeholder-gray-500 focus:border-institucional-500 focus:outline-none focus:ring-1 focus:ring-institucional-500 transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-institucional-500 px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1 hover:bg-institucional-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
