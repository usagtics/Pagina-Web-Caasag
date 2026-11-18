import Link from "next/link";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

interface MenuFooterProps {
  open: boolean;
  onClose: () => void;
  delay: number;
}

export function MenuFooter({ open, onClose, delay }: MenuFooterProps) {
  return (
    <div
      className={cn(
        "mt-10 flex flex-col items-center justify-between gap-6 transition-all duration-500 sm:flex-row",
        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
      style={{
        transitionDelay: open ? `${delay}ms` : "0ms",
      }}
    >
      <Link
        href="/contacto"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className="w-full rounded-full bg-institucional-500 px-8 py-3.5 text-center text-sm font-bold text-azul-950 transition-colors hover:bg-institucional-400 sm:w-auto"
      >
        HAZTE MIEMBRO
      </Link>

      <div className="flex flex-col items-center gap-2 text-xs text-white/50 sm:flex-row sm:gap-6 sm:text-sm">
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="transition-colors hover:text-white"
        >
          {siteConfig.contact.email}
        </a>

        <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

        <a href="tel:4792286990" className="transition-colors hover:text-white">
          479 228 6990
        </a>
      </div>
    </div>
  );
}
