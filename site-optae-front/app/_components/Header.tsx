import NavContainer from "./NavContainer";
import Image from "next/image";

async function getPages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages`, { next: { revalidate: 3600 } });
  const data = await res.json();
  return data.data;
}

export default async function Header({ title = "ACCUEIL" }: { title?: string }) {
  const pages = await getPages();

  return (
    <header className="relative w-full">
      {/* SECTION HERO */}
      <div className="relative h-[440px] w-full overflow-hidden bg-[#1B2A6B]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A6B] via-[#2A3B7A] to-[#4F5E8A] opacity-95" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 v60 M0 30 h60' stroke='white' fill='none'/%3E%3C/svg%3E")` }} />
        </div>

        <NavContainer pages={pages} />

        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-12 text-center px-4">
           <span className="text-[#DCE6FF] text-[10px] tracking-[0.7em] uppercase font-bold mb-6 animate-pulse-slow">Expertise & Conseil</span>
           <h2 className="text-white text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
             Optimisons ensemble <br /> <span className="font-semibold italic text-[#DCE6FF]">votre performance.</span>
           </h2>
        </div>
      </div>

      {/* BLOC TITRE */}
      <div className="relative z-30 -mt-6 flex justify-center px-4">
        <div className="bg-white shadow-lg px-8 py-5 md:px-16 rounded-sm border-b-2 border-[#4F5E8A] text-center max-w-2xl w-full">
          <h1 className="text-xl md:text-2xl tracking-[0.3em] text-[#1B2A6B] font-light uppercase">
            {title}
          </h1>
          <div className="w-8 h-0.5 bg-[#4F5E8A] mt-4 mx-auto opacity-20" />
        </div>
      </div>
    </header>
  );
}