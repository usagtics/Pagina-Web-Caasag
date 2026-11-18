import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  dir: "left" | "right";
}

export function SliderNav({ dir, ...props }: Props) {
  return (
    <button
      type="button"
      className={`absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-azul-950 shadow-xl border border-neutral-100 transition-all hover:bg-azul-950 hover:text-white disabled:opacity-0 md:flex group-hover:opacity-100 focus-visible:opacity-100 ${
        dir === "left"
          ? "left-2 sm:left-4 lg:left-6"
          : "right-2 sm:right-4 lg:right-6"
      }`}
      {...props}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}
