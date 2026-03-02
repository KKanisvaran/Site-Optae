import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B2A6B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* --- SECTION NEWSLETTER --- */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image 
                src="/logo_optae.png" 
                alt="OPTAE" 
                width={120} 
                height={40} 
                className="brightness-0 invert object-contain" 
              />
              <div className="hidden md:block h-10 w-[1px] bg-white/20" />
              <div className="text-center md:text-left">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white">Newsletter</p>
                <p className="text-[#DCE6FF]/60 text-xs">Inscrivez-vous pour ne rien manquer</p>
              </div>
            </div>

            <button className="px-10 py-3 bg-white text-[#1B2A6B] font-bold text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#DCE6FF] transition-all shadow-xl">
              Je m'inscris
            </button>
          </div>
        </div>

        {/* --- SECTION INFOS & ÉCOSYSTÈME --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[#DCE6FF]">
          
          {/* COLONNE 1 : ADRESSE & TEL */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-3">Adresse</p>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-white/60" />
                <span>[Ton Adresse Ici]<br />[Code Postal] [Ville]</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-3">Téléphone</p>
              <div className="flex items-center gap-3 text-sm font-medium">
                <Phone size={16} className="text-white/60" />
                <span>[Ton Numéro]</span>
              </div>
            </div>
          </div>

          {/* COLONNE 2 : LIENS UTILES */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-6">Informations</p>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie préférences</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of use</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : GROUPE TIM HD (Tes entités) */}
          <div className="text-center md:text-left">
            <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-6 italic underline decoration-white/10">Groupe TIM HD</p>
            <div className="flex gap-5 justify-center md:justify-start items-center">
              
              {/* TRACK'OÉ */}
              <a 
                href="https://trackoe.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
                title="Découvrir Track'Oé"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#4F5E8A] group-hover:bg-white/10 transition-all duration-300 p-2">
                  <Image 
                    src="/logos/trackoe.png" 
                    alt="Track'Oé"
                    width={50}
                    height={50}
                    className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>

              {/* INFINITRI */}
              <a 
                href="https://infinitri.eco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
                title="Découvrir Infinitri"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#4F5E8A] group-hover:bg-white/10 transition-all duration-300 p-2">
                  <Image 
                    src="/logos/infinitri.png" 
                    alt="Infinitri"
                    width={50}
                    height={50}
                    className="object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>

            </div>
            <p className="mt-4 text-[9px] text-white/30 leading-tight uppercase tracking-tighter">
              Expertises complémentaires
            </p>
          </div>

          {/* COLONNE 4 : RÉSEAUX */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 mb-6">Réseaux sociaux</p>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all text-white/60 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all text-white/60 hover:text-white">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-medium">
            © 2026 OPTAE — Un membre du Groupe TIM HD
          </p>
        </div>
      </div>
    </footer>
  );
}