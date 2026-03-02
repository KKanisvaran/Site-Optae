"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavContainer({ pages }: { pages: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-8 md:px-16 flex items-center justify-between ${
        isScrolled ? "h-[80px] bg-white shadow-md" : "h-[110px] bg-transparent"
      }`}>
        
        {/* BOUTON MENU */}
        <button onClick={() => setIsOpen(true)} className="flex items-center gap-4 group z-20">
          <div className={`p-3 rounded-full transition-all duration-300 ${
            isScrolled ? "bg-[#1B2A6B] text-white" : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#1B2A6B]"
          }`}>
            <Menu size={24} />
          </div>
          <span className={`text-[10px] uppercase tracking-[0.4em] font-black transition-colors ${
            isScrolled ? "text-[#1B2A6B]" : "text-white"
          }`}>Menu</span>
        </button>

        {/* LOGO */}
        <Link href="/" className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 z-20 ${
            isScrolled ? "top-1/2 -translate-y-1/2" : "top-8"
        }`}>
          <div className={`transition-all duration-500 ${isScrolled ? "scale-70" : "scale-125"}`}>
            <Image 
              src="/logos/logo_optae.png" 
              alt="OPTAE" 
              width={300} 
              height={150} 
              className={`object-contain transition-all duration-500 ${!isScrolled ? "brightness-0 invert" : ""}`} 
              priority 
            />
          </div>
        </Link>

        {/* BOUTON CONTACT */}
        <div className="z-20">
          <Link href="/contact" className={`text-[10px] font-bold tracking-[0.2em] px-6 py-2.5 rounded-full border transition-all ${
            isScrolled 
              ? "border-[#1B2A6B] text-[#1B2A6B] hover:bg-[#1B2A6B] hover:text-white" 
              : "border-white/30 text-white hover:bg-white hover:text-[#1B2A6B]"
          }`}>CONTACT</Link>
        </div>
      </nav>

      {/* SIDEBAR (SOMMAIRE) */}
      <div className={`fixed inset-0 z-[100] ${isOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-[#1B2A6B]/40 backdrop-blur-md transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 left-0 h-full w-full max-w-[480px] bg-white shadow-2xl transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-10 flex justify-between items-center border-b border-gray-50">
            <div>
                <h2 className="text-3xl font-serif italic text-[#1B2A6B]">Sommaire</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#1B2A6B]"><X size={32} /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-12 py-12">
            <ul className="space-y-8">
              {pages.map((page) => (
                <li key={page.id} className="group border-b border-gray-50 pb-4">
                  <Link href={`/${page.Slug}`} onClick={() => setIsOpen(false)} className="flex items-center justify-between text-2xl font-light text-[#1B2A6B] group-hover:text-[#4F5E8A] transition-all">
                    {page.Title} <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
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