interface Testimonio {
  video: string;
  cita: string;
  autor: string;
  cargo: string;
}

interface TestimonioCardProps {
  testimonio: Testimonio;
  isActive: boolean;
}

export function TestimonioCard({ testimonio, isActive }: TestimonioCardProps) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-out ${
        isActive
          ? "pointer-events-auto z-10 translate-y-0 scale-100 opacity-100"
          : "pointer-events-none z-0 translate-y-8 scale-95 opacity-0"
      }`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 shadow-[0_20px_60px_-15px_rgba(19,43,82,0.1)] md:flex-row">
        <div className="relative h-72 w-full shrink-0 bg-azul-950 md:h-auto md:w-[45%]">
          <video
            src={testimonio.video}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-azul-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/5"></div>
        </div>

        <div className="relative flex flex-col justify-center p-8 sm:p-12 md:w-[55%]">
          <svg
            className="absolute right-8 top-8 h-24 w-24 text-institucional-500/10"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>

          <p className="relative z-10 mb-8 text-xl font-light italic leading-relaxed text-neutral-600 sm:text-2xl">
            &ldquo;{testimonio.cita}&rdquo;
          </p>

          <div className="mt-auto">
            <div className="mb-4 h-1 w-12 rounded-full bg-institucional-500"></div>
            <p className="text-lg font-black text-azul-900">
              {testimonio.autor}
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide text-institucional-600">
              {testimonio.cargo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
