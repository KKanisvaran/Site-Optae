import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (

    <footer className="bg-[#1B2A6B] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* --- SECTION NEWSLETTER --- */}

        <div className="border-b border-white/10 pb-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image 
                src="/logos/logo_optae.png" 
                alt="OPTAE" 
                width={180} 
                height={90} 
                className="brightness-0 invert object-contain" 
              />
              <div className="hidden md:block h-10 w-[1px] bg-white/20" />
              <div className="text-center md:text-left">
                <p className="text-[12px] tracking-[0.3em] uppercase font-bold text-white">Newsletter</p>
                <p className="text-[#DCE6FF]/80 text-sm">Inscrivez-vous pour ne rien manquer</p>
              </div>
            </div>

            {/* bouton d'inscription */}
            <button className="px-12 py-4 bg-white text-[#1B2A6B] font-bold text-[12px] tracking-[0.2em] uppercase rounded-full hover:bg-[#DCE6FF] transition-all shadow-xl">
              Je m'inscris
            </button>
          </div>
        </div>

        {/* --- SECTION INFOS & ÉCOSYSTÈME --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[#DCE6FF]">
          
          {/* COLONNE 1 : ADRESSE & TEL */}
          <div className="space-y-6">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/40 mb-3">Adresse</p>
              <div className="flex items-start gap-3 text-base">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-white" />
                <span>91 Avenue de la République<br />75011 Paris</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/40 mb-3">Téléphone</p>
              <div className="flex items-center gap-3 text-lg font-semibold text-white"> 
                <Phone size={20} />
                <span>01 48 28 93 43</span>
              </div>
            </div>
          </div>

          {/* COLONNE 2 : LIENS UTILES */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/40 mb-6">Informations</p>
            <ul className="space-y-4 text-base font-normal"> 
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie préférences</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of use</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : GROUPE TIM HD */}
          <div className="text-center md:text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/40 mb-6 italic underline decoration-white/10">Groupe TIM HD</p>
            <div className="flex gap-5 justify-center md:justify-start items-center">
                
            {/* TRACKOÉ */}
              <a href="https://trackoe.fr" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="w-35 h-35 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#4F5E8A] group-hover:bg-white/10 transition-all duration-300 p-3">
                  <Image 
                    src="/logos/logo_trackoe.png" 
                    alt="Trackoé"
                    width={500} 
                    height={500}
                    className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>

              {/* INFINITRI */}
              <a href="https://infinitri.eco" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="w-35 h-35 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#4F5E8A] group-hover:bg-white/10 transition-all duration-300 p-3">
                  <Image 
                    src="/logos/logo_infinitri.png" 
                    alt="Infinitri"
                    width={500}
                    height={500}
                    className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* COLONNE 4 : RÉSEAUX */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/40 mb-6">Réseaux sociaux</p>
            <div className="flex gap-4">
              <Link href="#" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-[#1B2A6B] transition-all">
                <Linkedin size={24} /> 
              </Link>
              <Link href="#" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-[#1B2A6B] transition-all">
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-medium">
            © 2026 OPTAE - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}