"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavContainer({ pages }: { pages: any[] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  useEffect(() => {
    const scrollThreshold = 40;
    const updateNavbarStatus = () => setHasScrolledPastThreshold(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", updateNavbarStatus);
    return () => window.removeEventListener("scroll", updateNavbarStatus);
  }, []);

  const navbarVisualState = hasScrolledPastThreshold
    ? "h-16 md:h-20 bg-white shadow-md"
    : "h-20 md:h-28 bg-transparent";

  // Pages principales = enfants directs d'Accueil
  const mainPages = pages.filter(page => page.parent?.Title === "Accueil");

  // Trouve les enfants d'une page par son titre
  function getChildren(parentTitle: string) {
    return pages.filter(page => page.parent?.Title === parentTitle);
  }

  // Toggle le sous-menu : ouvre si fermé, ferme si déjà ouvert
  function onClickArrow(id: number) {
    setOpenMenu(openMenu === id ? null : id);
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-6 md:px-16 flex items-center justify-between ${navbarVisualState}`}>

        {/* Bouton Menu */}
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

        {/* Logo centré */}
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

        {/* Bouton Contact */}
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

      {/* Sidebar */}
      <div className={`fixed inset-0 z-[100] ${isSidebarOpen ? "visible" : "invisible"}`}>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[#1B2A6B]/40 backdrop-blur-md transition-opacity duration-700 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Panneau */}
        <div className={`absolute top-0 left-0 h-full w-full max-w-[480px] bg-white shadow-2xl transition-all duration-500 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-10 flex justify-between items-center border-b border-gray-50">
            <h2 className="text-3xl font-serif italic text-[#1B2A6B]">Sommaire</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-[#1B2A6B] hover:rotate-90 transition-transform">
              <X size={32} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-12 py-12 custom-scrollbar">
            <ul className="space-y-2">
              {mainPages.map((page) => {
                const children = getChildren(page.Title);
                const isOpen = openMenu === page.id;

                return (
                  <li key={page.id} className="border-b border-gray-50">

                    {/* Ligne principale */}
                    <div className="flex items-center justify-between py-4 group">
                      <Link
                        href={`/${page.Slug}`}
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-2xl font-light text-[#1B2A6B] hover:pl-2 transition-all"
                      >
                        {page.Title}
                      </Link>

                      {/* Flèche seulement si la page a des enfants */}
                      {children.length > 0 && (
                        <button
                          onClick={() => onClickArrow(page.id)}
                          className="p-2 rounded-full hover:bg-[#DCE6FF] transition-all"
                        >
                          <ChevronDown
                            size={20}
                            className="transition-transform duration-300 text-[#4F5E8A]"
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </button>
                      )}

                      {/* Flèche simple si pas d'enfants */}
                      {children.length === 0 && (
                        <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all text-[#4F5E8A]" />
                      )}
                    </div>

                    {/* Sous-menu — glisse vers le bas si isOpen */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isOpen ? `${children.length * 56}px` : "0px" }}
                    >
                      <ul className="pl-4 pb-4 space-y-1">
                        {children.map(child => (
                          <li key={child.id}>
                            <Link
                              href={`/${child.Slug}`}
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-2 py-2 px-3 text-base text-[#4F5E8A] hover:text-[#1B2A6B] hover:bg-[#DCE6FF] rounded-lg transition-all"
                            >
                              <div className="w-1 h-1 rounded-full bg-[#4F5E8A]" />
                              {child.Title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}