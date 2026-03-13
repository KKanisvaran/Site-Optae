"use client";

import { usePathname } from "next/navigation";

const titres: { [key: string]: string } = {
    "/": "ACCUEIL",
    "/nos-equipes": "NOS ÉQUIPES",
    "/à-propos": "À propos",
    "/services": "SERVICES",
    "/realisations": "RÉALISATIONS",
    "/carrieres": "CARRIÈRES",
    "/contact": "NOUS CONTACTER",
    "/collectivites": "COLLECTIVITÉS",
    "/a-propos": "À PROPOS",
    "/services/bureau-d-etudes": "BUREAU D'ÉTUDES",
    
};

export function TitrePage() {
    const pathname = usePathname();

    // Routes dynamiques — pages collaborateur
    if (pathname.startsWith("/nos-equipes/")) {
        return (
            <span className="text-lg md:text-xl tracking-[0.3em] text-[#1B2A6B] font-light uppercase">
                NOS ÉQUIPES
            </span>
        )
    }

    const titre = titres[pathname] || "";

    return (
        <span className="text-lg md:text-xl tracking-[0.3em] text-[#1B2A6B] font-light uppercase">
            {titre}
        </span>
    );
}