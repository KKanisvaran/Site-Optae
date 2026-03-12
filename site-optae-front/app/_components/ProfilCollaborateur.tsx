"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import StrapiContent from "./StrapiContent";

/**
 * Page de profil d'un collaborateur.
 * Structure adaptative (Responsive) gérant le remplissage de l'écran (comblage du vide).
 */
export default function CollaborateurProfil({ collaborateur }: { collaborateur: any }) {
    const photo = collaborateur.Photo;

    return (
        /* 'min-h-screen' assure que la page fait au moins la hauteur de l'écran.
           'flex-col' permet à la section beige de s'étirer via 'flex-grow'.
        */
        <main className="min-h-screen flex flex-col">
            
            {/* --- SECTION IDENTITÉ (Bleu Marine) --- */}
            <section className="w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-marine)" }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Contenu textuel */}
                    <div className="flex-1 text-white">
                        <Link href="/nos-equipes"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest mb-8 opacity-60  hover:opacity-100 transition-opacity"
                            style={{ color: "var(--optae-light)" }}>
                            ← Back to our people        
                        </Link>

                        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                            {collaborateur.Prenom} {collaborateur.Nom}
                        </h1>

                        <p className="text-sm font-bold uppercase tracking-widest mb-4"
                            style={{ color: "var(--optae-blue-extra-light)" }}>
                            {collaborateur.Poste}
                        </p>

                        <p className="text-sm leading-relaxed opacity-70 mb-8 max-w-md text-white">
                            {collaborateur.Description}
                        </p>

                        {/* Boutons de contact avec gestion d'opacité si vide */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href={collaborateur.Email ? `mailto:${collaborateur.Email}` : "#"}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all hover:bg-white/10"
                                style={{
                                    borderColor: "var(hover-text)",
                                    color: "var(hover-text)",
                                    opacity: collaborateur.Email ? 1 : 0.4,
                                }}
                            >
                                <Mail size={14} /> Contact
                            </a>
                            <a
                                href={collaborateur.linkedin || "#"}
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all hover:bg-white/10"
                                style={{
                                    borderColor: "var(hover-text)",
                                    color: "var(hover-text)",
                                    opacity: collaborateur.linkedin ? 1 : 0.4,
                                }}
                            >
                                <Linkedin size={14} /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Portrait avec ombre portée  */}
                    <div className="relative w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl"
                        style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
                        {photo?.url ? (
                            <Image
                                src={photo.url.startsWith('http') 
                                ? photo.url 
                                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.url}`}
                                alt={`${collaborateur.Prenom} ${collaborateur.Nom}`}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-700">
                                <span className="text-4xl font-bold text-white uppercase">
                                    {collaborateur.Prenom?.[0]}{collaborateur.Nom?.[0]}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* --- VAGUE DE TRANSITION GRAPHIQUE --- */}
            <div style={{ background: "var(--optae-marine)", marginBottom: "-2px" }}>
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--optae-beige)" />
                    <path d="M0,55 C400,20 1000,70 1440,50 L1440,80 L0,80 Z" fill="var(--optae-beige)" opacity="0.5" />
                </svg>
            </div>

            {/* --- SECTION DÉTAILS (Beige) --- */}
            {/* 'flex-grow' permet à cette section de s'étendre pour boucher le vide blanc en bas */}
            <section className="flex-grow w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-beige)" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    
                    {/* Colonne Biographie */}
                    <div className="strapi-content-renderer">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            A propos de {collaborateur.Prenom}
                        </h2>
                        <StrapiContent content={collaborateur.Bio} />
                    </div>

                    {/* Colonne Expertises */}
                    <div className="strapi-content-renderer">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Expertises
                        </h2>

                        <StrapiContent content={collaborateur.expertises || collaborateur.expertises} />
                    </div>

                </div>
            </section>
        </main>
    );
}