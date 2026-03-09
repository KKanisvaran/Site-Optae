"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  Titre: string;
  Description: string;
  Image: { url: string }[];
}

export default function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  function getImageUrl(url: string) {
    if (!url) return "";
    const cleanUrl = url.split('?')[0];
    if (cleanUrl.startsWith('http')) {
      return cleanUrl.replace('/upload/', '/upload/w_1440,h_400,c_fill,q_100/');
    }
    return `${STRAPI_URL}${cleanUrl}`;
  }

  return (
    <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden bg-[#1B2A6B] mb-4">

      {/* Images de fond */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.Image?.[0]?.url && (
            <Image
              src={getImageUrl(slide.Image[0].url)}
              alt={slide.Titre}
              fill
              className="object-cover opacity-90"
              priority={index === 0}
            />
          )}
          {/* Dégradé léger pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        </div>
      ))}

      {/* Contenu */}
      <div className="relative z-10 flex flex-col justify-between h-full px-8 md:px-12 py-6 md:py-10">

        {/* Haut : Titre à gauche */}
        <div>
          <span className="text-white text-[10px] tracking-[0.7em] uppercase font-bold opacity-70">
            {slides[current].Titre}
          </span>
        </div>

        {/* Milieu : Description à droite */}
        <div className="flex justify-end">
          <p className="text-white text-sm md:text-2xl font-extralight leading-relaxed max-w-xs md:max-w-xl text-right drop-shadow-lg">
            {slides[current].Description}
          </p>
        </div>

        {/* Bas : barres à gauche, en savoir plus à droite */}
        <div className="flex items-center justify-between">
          {slides.length > 1 && (
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-[2px] transition-all duration-500 ${
                    i === current ? "w-10 bg-white" : "w-5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 group cursor-pointer ml-auto">
            <span className="text-[9px] text-white/60 tracking-[0.4em] uppercase group-hover:text-white transition-colors">
              En savoir plus
            </span>
            <span className="text-white/50 group-hover:text-white group-hover:translate-x-1 inline-block transition-all duration-300">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}