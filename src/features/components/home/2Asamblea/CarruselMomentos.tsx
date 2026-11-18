"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SliderNav } from "@/features/ui/SliderNav";

export type SlideData = {
  titulo: string;
  descripcion: string;
  imagenes: string[];
};

function Gallery({ title, images }: { title: string; images: string[] }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const scrollToImage = (index: number) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollTo({
      left: index * gallery.clientWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const index = Math.round(gallery.scrollLeft / gallery.clientWidth);

    setActiveIndex(Math.min(Math.max(index, 0), images.length - 1));

    setShowHint(false);
  };

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      const next = (activeIndex + 1) % images.length;
      scrollToImage(next);
    }, 4500);

    return () => clearInterval(timer);
  }, [activeIndex, images.length, isPaused]);

  if (!images?.length) return null;

  return (
    <div
      className="relative w-full aspect-[4/3] overflow-hidden group/img"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        ref={galleryRef}
        onScroll={handleScroll}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide bg-azul-950"
      >
        {images.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="relative h-full w-full shrink-0 snap-center overflow-hidden"
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover blur-xl scale-110 opacity-40"
            />

            <Image
              src={img}
              alt={`${title} - imagen ${index + 1}`}
              fill
              sizes="(max-width: 640px) 85vw, 50vw"
              className="relative z-10 object-contain drop-shadow-2xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-2 right-2 z-20 rounded-full bg-black/50 px-2 py-0.5 text-[11px] text-white backdrop-blur-sm">
        {activeIndex + 1} / {images.length}
      </div>

      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-5 bg-white shadow-sm"
                : "w-1.5 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {showHint && !isPaused && (
        <div className="absolute bottom-2 right-2 z-20 rounded-full bg-black/50 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
          Desliza →
        </div>
      )}
    </div>
  );
}

export function MomentosSlider({ items }: { items: SlideData[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 4);

    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 4,
    );
  };

  useEffect(() => {
    checkScroll();

    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [items.length]);

  const slideCards = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction * (slider.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  if (!items?.length) return null;

  return (
    <section className="relative w-[100vw] left-1/2 -translate-x-1/2 mt-16">
      <div className="mb-8 flex items-center justify-center gap-4 px-4">
        <div className="h-px w-8 bg-institucional-300" />

        <h4 className="text-xl sm:text-2xl font-bold text-azul-950 uppercase tracking-widest text-center">
          Momentos Destacados
        </h4>

        <div className="h-px w-8 bg-institucional-300" />
      </div>

      <div className="relative group w-full">
        <SliderNav
          dir="left"
          onClick={() => slideCards(-1)}
          disabled={!canScrollLeft}
          aria-label="Anterior"
        />

        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex w-full snap-x snap-mandatory gap-4 lg:gap-6 overflow-x-auto px-4 lg:px-6 pt-4 pb-8 scrollbar-hide"
        >
          {items.map((item, index) => (
            <article
              key={item.titulo || index}
              className="group/card relative flex w-[85vw] sm:w-[45vw] lg:w-[31.5vw] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Gallery title={item.titulo} images={item.imagenes} />

              <div className="flex flex-1 flex-col p-6">
                <h5 className="mb-2 text-lg font-bold text-azul-950 group-hover/card:text-institucional-600">
                  {item.titulo}
                </h5>

                <p className="text-sm leading-relaxed text-gray-500 font-light">
                  {item.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>

        <SliderNav
          dir="right"
          onClick={() => slideCards(1)}
          disabled={!canScrollRight}
          aria-label="Siguiente"
        />
      </div>
    </section>
  );
}
