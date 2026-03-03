"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavContainer({ pages }: { pages: any[] }) {
  // États pour la gestion de l'interface
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);

  // Déclenche le changement de style de la nav après 40px de scroll
  useEffect(() => {
    const scrollThreshold = 40;
    const updateNavbarStatus = () => setHasScrolledPastThreshold(window.scrollY > scrollThreshold);
    
    window.addEventListener("scroll", updateNavbarStatus);
    return () => window.removeEventListener("scroll", updateNavbarStatus);
  }, []);

  // Configuration dynamique des styles pour la réutilisation
  const navbarVisualState = hasScrolledPastThreshold 
    ? "h-16 md:h-20 bg-white shadow-md" 
    : "h-20 md:h-28 bg-transparent";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-6 md:px-16 flex items-center justify-between ${navbarVisualState}`}>
        
        {/* Section Menu : Bouton avec effet d'inversion de couleur au scroll */}
        <button onClick={() => setIsSidebarOpen(true)} className="flex items-center gap-3 group z-20">
          <div className={`p-2.5 rounded-full transition-all duration-300 ${
            hasScrolledPastThreshold ? "bg-[#1B2A6B] text-white" : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1B2A6B]"
          }`}>
            <Menu className="w-5 h-5 md:w-6 h-6" />
          </div>
          <span className={`hidden sm:inline text-[10px] uppercase tracking-[0.4em] font-black ${
            hasScrolledPastThreshold ? "text-[#1B2A6B]" : "text-white"
          }`}>
            Menu
          </span>
        </button>

        {/* Section Logo : Taille adaptative et effet de zoom fluide */}
        <Link href="/" className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 z-20 ${
          hasScrolledPastThreshold ? "top-1/2 -translate-y-1/2" : "top-6"
        }`}>
          <div className={`transition-all duration-500 ${hasScrolledPastThreshold ? "scale-75 md:scale-90" : "scale-90 md:scale-110"}`}>
            <Image 
              src="/logos/logo_optae.png" 
              alt="OPTAE Conseil" 
              width={220} 
              height={110} 
              className={`w-32 md:w-44 object-contain transition-all duration-500 ${!hasScrolledPastThreshold ? "brightness-0 invert" : ""}`} 
              priority 
            />
          </div>
        </Link>

        {/* Section Action : Bouton Contact rapide */}
        <div className="z-20">
          <Link href="/contact" className={`text-[10px] font-bold tracking-[0.2em] px-5 py-2 md:px-6 md:py-2.5 rounded-full border transition-all ${
            hasScrolledPastThreshold 
              ? "border-[#1B2A6B] text-[#1B2A6B] hover:bg-[#1B2A6B] hover:text-white" 
              : "border-white/30 text-white hover:bg-white hover:text-[#1B2A6B]"
          }`}>
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Sidebar de navigation (Sommaire) */}
      <div className={`fixed inset-0 z-[100] ${isSidebarOpen ? "visible" : "invisible"}`}>
        {/* Overlay sombre cliquable pour fermer */}
        <div 
          className={`absolute inset-0 bg-[#1B2A6B]/40 backdrop-blur-md transition-opacity duration-700 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsSidebarOpen(false)} 
        />
        
        {/* Panneau latéral coulissant */}
        <div className={`absolute top-0 left-0 h-full w-full max-w-[480px] bg-white shadow-2xl transition-all duration-500 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-10 flex justify-between items-center border-b border-gray-50">
            <h2 className="text-3xl font-serif italic text-[#1B2A6B]">Sommaire</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-[#1B2A6B] hover:rotate-90 transition-transform">
              <X size={32} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-12 py-12">
            <ul className="space-y-8">
              {pages.map((pageItem) => (
                <li key={pageItem.id} className="group border-b border-gray-50 pb-4">
                  <Link 
                    href={`/${pageItem.Slug}`} 
                    onClick={() => setIsSidebarOpen(false)} 
                    className="flex items-center justify-between text-2xl font-light text-[#1B2A6B] group-hover:pl-4 transition-all"
                  >
                    {pageItem.Title} 
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all text-[#4F5E8A]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}