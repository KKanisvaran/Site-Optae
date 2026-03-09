import NavContainer from "./NavContainer";
import { TitrePage } from "@/_components/TitrePage";

async function getPages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?populate=*`, { next: { revalidate: 0 } });
  const data = await res.json();
  return data.data;
}

export default async function Header({ title = "ACCUEIL" }: { title?: string }) {
  const pages = await getPages();

  return (
    <header className="relative w-full">

      {/* SECTION HERO */}
      <div className="relative h-[440px] w-full overflow-hidden bg-[#1B2A6B]">
        
        {/* L'ANIMATION DE FOND (DISCRÈTE) */}
        <div className="absolute inset-0 z-0">
          {/* Dégradé de base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A6B] via-[#2A3B7A] to-[#4F5E8A]" />
          
          {/* Cercles lumineux flous qui bougent lentement */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4F5E8A] opacity-20 blur-[120px] animate-[pulse_8s_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#DCE6FF] opacity-10 blur-[120px] animate-[pulse_12s_infinite]" />
        </div>

        {/* NAVIGATION & LOGO */}
        <NavContainer pages={pages} />

        {/* TEXTE CENTRAL */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-12 text-center px-4">
           <span className="text-[#DCE6FF] text-[10px] tracking-[0.7em] uppercase font-bold mb-6 opacity-60">
             Expertise & Conseil
           </span>
           <h2 className="text-white text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
             Optimisons ensemble <br /> 
             <span className="font-semibold italic text-[#DCE6FF]">votre performance.</span>
           </h2>
        </div>
      </div>

      {/* BLOC TITRE BLANC */}
      <div className="relative z-30 -mt-6 flex justify-center px-4">
        <div className="bg-white shadow-lg px-8 py-5 md:px-16 rounded-sm border-b-2 border-[#4F5E8A] text-center max-w-2xl w-full">
          <span className="text-xl md:text-2xl tracking-[0.3em] text-[#1B2A6B] font-light uppercase">
            <TitrePage />
          </span>
          <div className="w-8 h-0.5 bg-[#4F5E8A] mt-4 mx-auto opacity-20" />
        </div>
      </div>
    </header>
  );
}