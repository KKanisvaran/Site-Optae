"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavContainer({ pages }: { pages: any[] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);
  const [openMenu, setOpenMenu] = useState<number[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  useEffect(() => {
    const scrollThreshold = 40;
    const updateNavbarStatus = () => setHasScrolledPastThreshold(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", updateNavbarStatus);
    return () => window.removeEventListener("scroll", updateNavbarStatus);
  }, []);

  const navbarVisualState = hasScrolledPastThreshold
    ? "h-16 md:h-20 bg-white shadow-md"
    : "h-20 md:h-28 bg-transparent";

  const ordre = ["À propos", "Services", "Réalisations", "Carrières", "Contact"];
  const mainPages = pages
    .filter(page => page.parent?.Title === "Accueil")
    .sort((a, b) => {
      const iA = ordre.indexOf(a.Title);
      const iB = ordre.indexOf(b.Title);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

  const half = 3;

  // Pour la sidebar : Accueil + pages principales
  const accueilPage = pages.find(page => page.Title === "Accueil");
  const allSidebarPages = accueilPage 
    ? [accueilPage, ...mainPages] 
    : mainPages;

  function getChildren(parentTitle: string) {
    return pages.filter(page => page.parent?.Title === parentTitle);
  }

  function onClickArrow(id: number) {
    setOpenMenu(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  }

  // Fonction récursive pour afficher TOUS les niveaux dans la sidebar
  function renderMenuItem(page: any, level: number = 0) {
    // Si c'est Accueil, on affiche juste le lien sans enfants
    if (page.Title === "Accueil") {
      return (
        <li key={page.id} className="border-b border-gray-50">
          <div className="flex items-center justify-between py-4 group">
            <Link
              href="/"
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl font-light hover:pl-2 transition-all"
              style={{ color: 'var(--optae-blue)' }}
            >
              {page.Title}
            </Link>
            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all text-[#4F5E8A]" />
          </div>
        </li>
      );
    }

    const children = getChildren(page.Title);
    const isOpen = openMenu.includes(page.id);
    
    return (
      <li key={page.id} className={`${level === 0 ? 'border-b border-gray-50' : ''}`}>
        <div className={`flex items-center justify-between py-4 group ${level > 0 ? 'pl-' + (level * 4) : ''}`}>
          <Link
            href={`/${page.Slug}`}
            onClick={() => setIsSidebarOpen(false)}
            className={`font-light hover:pl-2 transition-all ${
              level === 0 ? 'text-2xl' : level === 1 ? 'text-lg' : 'text-base'
            }`}
            style={{
              color: level === 0 ? 'var(--optae-blue)' : 
                     level === 1 ? 'var(--optae-marine)' : 
                     'var(--hover-text)',
            }}
          >
            {level > 0 && <span className="mr-2" style={{ color: 'var(--optae-accent)' }}>•</span>}
            {page.Title}
          </Link>
          {children.length > 0 && (
            <button 
              onClick={() => onClickArrow(page.id)} 
              className="p-2 rounded-full hover:bg-[#DCE6FF] transition-all flex-shrink-0"
            >
              <ChevronDown
                size={20}
                className="transition-transform duration-300 text-[#4F5E8A]"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
          )}
          {children.length === 0 && level === 0 && (
            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all text-[#4F5E8A]" />
          )}
        </div>
        
        {/* Enfants récursifs */}
        {children.length > 0 && (
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isOpen ? "2000px" : "0px",
              opacity: isOpen ? 1 : 0
            }}
          >
            <ul className={`${level === 0 ? 'pl-4' : 'pl-6'} pb-2 space-y-1`}>
              {children.map(child => renderMenuItem(child, level + 1))}
            </ul>
          </div>
        )}
      </li>
    );
  }

  // Render menu item pour top bar avec dropdown
  function renderTopBarItem(page: any, index: number) {
    const children = getChildren(page.Title);
    const isHovered = hoveredMenu === page.id;

    if (children.length === 0) {
      // Pas d'enfants, lien simple
      return (
        <Link 
          key={page.id} 
          href={`/${page.Slug}`}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          {page.Title}
        </Link>
      );
    }

    // Avec enfants, dropdown
    return (
      <div
        key={page.id}
        className="relative group"
        onMouseEnter={() => setHoveredMenu(page.id)}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <Link 
          href={`/${page.Slug}`}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-white opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          {page.Title}
          <ChevronDown size={12} className="transition-transform duration-200" style={{ transform: isHovered ? "rotate(180deg)" : "rotate(0deg)" }} />
        </Link>
        
        {/* Dropdown menu */}
        <div
          className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 min-w-[200px] ${
            isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          {children.map(child => (
            <Link
              key={child.id}
              href={`/${child.Slug}`}
              className="block px-4 py-2 text-sm text-[#1B2A6B] hover:bg-[#DCE6FF] transition-colors"
            >
              {child.Title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-6 md:px-16 flex items-center justify-between ${navbarVisualState}`}>

        {/* GAUCHE — Burger + liens gauche */}
        <div className="flex items-center gap-8 z-20">
          <button onClick={() => setIsSidebarOpen(true)}>
            <div className={`p-2.5 rounded-full transition-all duration-300 ${
              hasScrolledPastThreshold ? "bg-[#1B2A6B] text-white" : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1B2A6B]"
            }`}>
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </button>

          <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
            hasScrolledPastThreshold ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
            {mainPages.slice(0, half).map((page, index) => renderTopBarItem(page, index))}
          </div>
        </div>

        {/* CENTRE — Logo toujours centré en absolu */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/logos/logo_optae.png"
            alt="OPTAE Conseil"
            width={200}
            height={100}
            className={`object-contain transition-all duration-500 ${
              hasScrolledPastThreshold ? "w-32 md:w-40" : "w-40 md:w-52"
            }`}
            priority
          />
        </Link>

        {/* DROITE — liens droite + Recherche */}
        <div className="flex items-center gap-8 z-20">
          <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
            hasScrolledPastThreshold ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
            {mainPages.slice(half).map((page, index) => renderTopBarItem(page, index))}
          </div>

          <div className="flex items-center">
            <div className={`flex items-center transition-all duration-300 overflow-hidden ${
              searchOpen ? "w-40 md:w-56" : "w-0"
            }`}>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Rechercher..."
                className={`w-full bg-transparent border-b text-sm outline-none transition-all duration-300 ${
                  hasScrolledPastThreshold
                    ? "border-[#1B2A6B] text-[#1B2A6B] placeholder-[#4F5E8A]"
                    : "border-white/60 text-white placeholder-white/60"
                }`}
              />
            </div>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2.5 rounded-full transition-all duration-300 ml-1 ${
                hasScrolledPastThreshold
                  ? "bg-[#1B2A6B] text-white hover:bg-[#4F5E8A]"
                  : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1B2A6B]"
              }`}
            >
              {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-[100] ${isSidebarOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-[#1B2A6B]/40 backdrop-blur-md transition-opacity duration-700 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className={`absolute top-0 left-0 h-full w-full max-w-[480px] bg-white shadow-2xl transition-all duration-500 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-10 flex justify-between items-center border-b border-gray-50 flex-shrink-0">
            <h2 className="text-3xl font-serif italic text-[#1B2A6B]">Sommaire</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-[#1B2A6B] hover:rotate-90 transition-transform">
              <X size={32} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-12 py-12" style={{ maxHeight: "calc(100vh - 120px)" }}>
            <ul className="space-y-2">
              {allSidebarPages.map(page => renderMenuItem(page, 0))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}