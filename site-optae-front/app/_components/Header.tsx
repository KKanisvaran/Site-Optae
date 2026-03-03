import NavContainer from "./NavContainer";
import Image from "next/image";

/**
 * Récupère dynamiquement la liste des pages depuis Strapi
 * avec une mise en cache d'une heure (3600s)
 */
async function getNavigationPages() {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages`;
  const response = await fetch(apiEndpoint, { next: { revalidate: 3600 } });
  const jsonResponse = await response.json();
  return jsonResponse.data;
}

export default async function Header({ title = "ACCUEIL" }: { title?: string }) {
  const strapiPagesData = await getNavigationPages();

  return (
    <header className="relative w-full">
      {/* Container Hero : 
          - h-[45vh] s'adapte à la hauteur de l'écran (45%)
          - min-h et max-h empêchent le bloc d'être trop petit ou trop grand 
      */}
      <div className="relative h-[45vh] min-h-[340px] max-h-[500px] w-full overflow-hidden bg-[#1B2A6B]">
        {/* Background avec dégradé et texture de grille */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A6B] via-[#2A3B7A] to-[#4F5E8A] opacity-95" />
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 v60 M0 30 h60' stroke='white' fill='none'/%3E%3C/svg%3E")` }} 
          />
        </div>

        <NavContainer pages={strapiPagesData} />

        {/* Zone centrale du Header */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16 text-center px-6">
           <span className="text-[#DCE6FF] text-[9px] md:text-[10px] tracking-[0.8em] uppercase font-bold mb-4 md:mb-6 animate-pulse-slow">
             Expertise & Conseil
           </span>
           <h2 className="text-white text-2xl md:text-5xl font-extralight tracking-tight leading-tight">
             Optimisons ensemble <br /> 
             <span className="font-semibold italic text-[#DCE6FF]">votre performance.</span>
           </h2>
        </div>
      </div>

      {/* Bloc Titre de la page : Chevauchement (Negative Margin) pour le style */}
      <div className="relative z-30 -mt-6 md:-mt-7 flex justify-center px-6">
        <div className="bg-white shadow-xl px-8 py-5 md:px-16 md:py-5 rounded-sm border-b-2 border-[#4F5E8A] text-center max-w-2xl w-full">
          <h1 className="text-lg md:text-xl tracking-[0.3em] text-[#1B2A6B] font-light uppercase">
            {title}
          </h1>
          <div className="w-12 h-0.5 bg-[#4F5E8A] mt-4 mx-auto opacity-20" />
        </div>
      </div>
    </header>
  );
}