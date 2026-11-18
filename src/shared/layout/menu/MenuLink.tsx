import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface MenuLinkProps {
  href: string;
  label: string;
  index: number;
  open: boolean;
  onClose: () => void;
}

export function MenuLink({ href, label, index, open, onClose }: MenuLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      tabIndex={open ? 0 : -1}
      className={cn(
        "group flex items-center justify-between border-b border-white/10 py-4 transition-all duration-300 hover:pl-2",
        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
      style={{
        transitionDelay: open ? `${index * 60 + 80}ms` : "0ms",
      }}
    >
      <div className="flex items-center gap-6">
        <span className="font-mono text-xs font-semibold text-institucional-500/80">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-institucional-400 sm:text-2xl">
          {label}
        </span>
      </div>

      <ArrowRight
        size={19}
        strokeWidth={1.8}
        className="translate-x-[-6px] text-white/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-institucional-400"
      />
    </Link>
  );
}
