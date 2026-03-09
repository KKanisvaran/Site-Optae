"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Printer, 
  ChevronDown, 
  ChevronUp, 
  Navigation 
} from "lucide-react";

export default function Footer() {
  const [showMapParis, setShowMapParis] = useState(false);
  const [showMapGenay, setShowMapGenay] = useState(false);

  const urlItineraireParis = "https://www.google.com/maps/dir/?api=1&destination=91+Avenue+de+la+Republique+75011+Paris";
  const urlItineraireGenay = "https://www.google.com/maps/dir/?api=1&destination=158+rue+de+la+Madone+69730+Genay";

  return (
    <footer className="bg-[#12144D] text-white pt-12 pb-8 md:pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Newsletter / Logo */}
        <div className="border-b border-white/10 pb-10 mb-10 md:pb-12 md:mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
              <Image 
                src="/logos/logo_optae.png" 
                alt="Logo OPTAE" 
                width={180} 
                height={70} 
                className="brightness-0 invert object-contain w-40 md:w-48" 
              />
              <div className="hidden md:block h-10 w-[1px] bg-white/20" />
              <div>
                <p className="text-[11px] md:text-[12px] tracking-widest uppercase font-bold text-white">Newsletter</p>
                <p className="text-[#DCE6FF]/60 text-xs md:text-sm">Inscrivez-vous pour ne rien manquer</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-3.5 bg-white text-[#1B2A6B] font-bold text-[11px] tracking-widest uppercase rounded-full hover:bg-[#338CB8] hover:text-white transition-all shadow-lg active:scale-95">
              Je m'inscris
            </button>
          </div>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-[#DCE6FF]">
          
          {/* Nos Bureaux */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-[10px] tracking-widest uppercase font-bold text-white text-center sm:text-center">Nos Bureaux</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">
              
              {/* Agence PARIS */}
              <div className="flex flex-col">
                <div className="text-center sm:text-left space-y-2 min-h-[140px] sm:min-h-[120px]">
                  <p className="text-white font-bold text-[11px] uppercase tracking-wider">Paris</p>
                  <p className="italic text-white/80">91 Avenue de la République, 75011 Paris</p>
                  <a href="tel:+33149289343" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors group">
                    <Phone size={16} className="text-[#4F5E8A]" />
                    <span className="font-semibold text-white">01 49 28 93 43</span>
                  </a>
                  
                  <button 
                    onClick={() => setShowMapParis(!showMapParis)}
                    className="flex items-center justify-center sm:justify-start gap-2 text-[10px] uppercase font-bold text-white/60 hover:text-white transition-all pt-2"
                  >
                    <MapPin size={14} /> 
                    {showMapParis ? "Masquer la carte" : "Voir sur la carte"}
                    {showMapParis ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {showMapParis && (
                  <div className="mt-4 space-y-3 animate-in fade-in zoom-in-95 duration-300">
                    <div className="h-64 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.572111516053!2d2.373972276856526!3d48.8663738001476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66df98b858e87%3A0xe54d60317e082f42!2s91%20Av.%20de%20la%20R%C3%A9publique%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1710000000000"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a 
                      href={urlItineraireParis}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#4F5E8A]/20 hover:bg-[#FFFFFF]/40 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all border border-white/10"
                    >
                      <Navigation size={14} />
                      Calculer l'itinéraire
                    </a>
                  </div>
                )}
              </div>

              {/* Agence GENAY (Siège) */}
              <div className="flex flex-col border-t border-white/5 pt-6 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-8">
                <div className="text-center sm:text-left space-y-2 min-h-[140px] sm:min-h-[120px]">
                  <p className="text-white font-bold text-[11px] uppercase tracking-wider">Genay (Siège)</p>
                  <p className="italic text-white/80">158 rue de la Madone, 69730 Genay</p>
                  <a href="tel:+33149289343" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors group">
                    <Phone size={16} className="text-[#4F5E8A]" />
                    <span className="font-semibold text-white">01 49 28 93 43</span>
                  </a>
             
                  
                  <button 
                    onClick={() => setShowMapGenay(!showMapGenay)}
                    className="flex items-center justify-center sm:justify-start gap-2 text-[10px] uppercase font-bold text-white/60 hover:text-white transition-all pt-2"
                  >
                    <MapPin size={14} /> 
                    {showMapGenay ? "Masquer la carte" : "Voir sur la carte"}
                    {showMapGenay ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {showMapGenay && (
                  <div className="mt-4 space-y-3 animate-in fade-in zoom-in-95 duration-300">
                    <div className="h-64 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.625807185078!2d4.83842147672283!3d45.87884690558356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4955734791555%3A0x6b49911e8609355!2s158%20Rue%20de%20la%20Madone%2C%2069730%20Genay!5e0!3m2!1sfr!2sfr!4v1710000000000"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <a 
                      href={urlItineraireGenay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#4F5E8A]/20 hover:bg-[#FFFFFF]/40 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all border border-white/10"
                    >
                      <Navigation size={14} />
                      Calculer l'itinéraire
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Groupe TIM HD */}
          <div className="text-center space-y-6">
            <p className="text-[10px] tracking-widest uppercase font-bold text-white">Groupe TIM HD</p>
            <div className="flex gap-6 justify-center items-center">
              {[ 
                { name: "Trackoé", src: "/logos/logo_trackoe.png", url: "https://trackoe.fr" },
                { name: "Infinitri", src: "/logos/logo_infinitri.png", url: "https://infinitri.eco" }
              ].map((subsidiary) => (
                <a key={subsidiary.name} href={subsidiary.url} target="_blank" className="group" rel="noopener noreferrer">
                  <Image 
                    src={subsidiary.src} 
                    alt={subsidiary.name} 
                    width={140} 
                    height={70} 
                    className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <p className="text-[10px] tracking-widest uppercase font-bold text-white">Suivez-nous</p>
            <div className="flex gap-4">
              <Link href="https://fr.linkedin.com/company/optae" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-[#12144D] transition-all group shadow-inner">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" /> 
              </Link>
              <Link href="mailto:contact@optae.fr" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-[#12144D] transition-all group shadow-inner">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-medium">
            © 2026 OPTAE - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}