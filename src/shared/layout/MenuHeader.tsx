import { X } from "lucide-react";

interface MenuHeaderProps {
  onClose: () => void;
}

export function MenuHeader({ onClose }: MenuHeaderProps) {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar menú"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={20} strokeWidth={1.8} />
      </button>

      <div className="mb-8 mt-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-institucional-500">
          Navegación
        </span>

        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Explora nuestro sitio
        </h2>
      </div>
    </>
  );
}
