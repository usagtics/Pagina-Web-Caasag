"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/actions/send-email";

export function FormularioContacto() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false,
    error: null,
  });

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
      {state.success ? (
        <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
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
            Gracias por escribirnos. Nos pondremos en contacto contigo a la
            brevedad.
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-azul-200">
              Nombre completo
            </label>
            <input
              name="nombre"
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
              name="email"
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
              name="asunto"
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
              name="mensaje"
              required
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-azul-950/50 px-4 py-3 text-white placeholder-gray-500 focus:border-institucional-500 focus:outline-none focus:ring-1 focus:ring-institucional-500 transition-all resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          {state.error && (
            <p className="text-red-400 text-sm font-semibold bg-red-500/10 p-3 rounded-lg">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-institucional-500 px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1 hover:bg-institucional-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isPending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      )}
    </div>
  );
}
