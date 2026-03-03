import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin,Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#12144D] text-white pt-12 pb-8 md:pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Newsletter */}
        <div className="border-b border-white/10 pb-10 mb-10 md:pb-12 md:mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
              <Image 
                src="/logos/logo_optae.png" 
                alt="Logo OPTAE " 
                width={160} 
                height={60} 
                className="brightness-0 invert object-contain w-36 md:w-44" 
              />
              <div className="hidden md:block h-10 w-[1px] bg-white/20" />
              <div>
                <p className="text-[11px] md:text-[12px] tracking-widest uppercase font-bold text-white">Newsletter</p>
                <p className="text-[#DCE6FF]/60 text-xs md:text-sm">Inscrivez-vous pour ne rien manquer</p>
              </div>
            </div>

            <button className="w-full md:w-auto px-10 py-3.5 bg-white text-[#1B2A6B] font-bold text-[11px] tracking-widest uppercase rounded-full hover:bg-[#338CB8] transition-all shadow-lg active:scale-95">
              Je m'inscris
            </button>
          </div>
        </div>

        {/* Grille d'informations (Responsive 1/2/4 colonnes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[#DCE6FF]">
          
{/* Col 1 : Coordonnées (Deux Agences) */}
<div className="space-y-6 text-center sm:text-left">
  <p className="text-[10px] tracking-widest uppercase font-bold text-white/40 text-center sm:text-left">Nos Bureaux</p>
  
  <div className="flex flex-col items-center sm:items-start gap-6 text-sm">
    
    {/* Agence PARIS */}
    <div className="space-y-2">
      <p className="text-[#4F5E8A] font-bold text-[11px] uppercase tracking-wider">Paris</p>
      <div className="flex flex-col items-center sm:items-start gap-3 text-white/80">
        <a 
          href="https://maps.google.com/?q=91+Avenue+de+la+République+75011+Paris" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 hover:text-[#338CB8] transition-colors group"
        >
          <MapPin size={16} className="text-[#4F5E8A]" /> 
          <span>91 Av. République, 75011 Paris</span>
        </a>
        <a 
          href="tel:+33149289343" 
          className="flex items-center gap-3 hover:text-[#338CB8] transition-colors group"
        >
          <Phone size={16} className="text-[#4F5E8A]" /> 
          <span className="font-semibold">01 49 28 93 43</span>
        </a>
      </div>
    </div>

        {/* Agence GENAY (Siège) */}
        <div className="space-y-2 border-t border-white/5 pt-4 w-full">
          <p className="text-[#4F5E8A] font-bold text-[11px] uppercase tracking-wider">Genay (Siège)</p>
          <div className="flex flex-col items-center sm:items-start gap-3 text-white/80">
            <a 
              href="https://maps.google.com/?q=158+rue+de+la+Madone+69730+Genay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:text-[#338CB8] transition-colors group"
            >
              <MapPin size={16} className="text-[#4F5E8A]" /> 
              <span>158 rue de la Madone, 69730 Genay</span>
            </a>
            <div className="flex items-center gap-3">
              <Printer size={16} className="text-[#4F5E8A]" /> 
              <span>Fax : 04 78 91 38 63</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>

          {/* Col 2 : Menu secondaire */}
          <div className="text-center sm:text-left">
            <p className="text-[10px] tracking-widest uppercase font-bold text-white/40 mb-6">Informations</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-[#338cb8] transition-colors">Contact us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#338cb8] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#338cb8] transition-colors">Terms of use</Link></li>
              <li><Link href="/cookies" className="hover:text-[#338cb8] transition-colors">Cookie Preferences</Link></li>
            </ul>
          </div>

          {/* Col 3 : Filiales du groupe */}
          <div className="text-center">
            <p className="text-[10px] tracking-widest uppercase font-bold text-white/40 mb-6 italic underline decoration-white/10">Groupe TIM HD</p>
            <div className="flex gap-4 justify-center items-center">
              {[ 
                { name: "Trackoé", src: "/logos/logo_trackoe.png", url: "https://trackoe.fr" },
                { name: "Infinitri", src: "/logos/logo_infinitri.png", url: "https://infinitri.eco" }
              ].map((subsidiary) => (
                <a key={subsidiary.name} href={subsidiary.url} target="_blank" className="group" rel="noopener">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all p-3">
                    <Image 
                      src={subsidiary.src} 
                      alt={subsidiary.name} 
                      width={80} 
                      height={80} 
                      className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 : Liens sociaux */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="text-[10px] tracking-widest uppercase font-bold text-white/40 mb-6">Suivez-nous</p>
            <div className="flex gap-4">
              <Link href="#" className="p-3.5 bg-white/5 rounded-full hover:bg-white hover:text-[#1B2A6B] transition-all">
                <Linkedin size={20} /> 
              </Link>
              <Link href="#" className="p-3.5 bg-white/5 rounded-full hover:bg-white hover:text-[#1B2A6B] transition-all">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright final */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-medium">
            © 2026 OPTAE - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}