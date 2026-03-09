"use client";

import Link from "next/link";
import { Mail, Clock, User, Calendar } from "lucide-react";
import StrapiContent from "./StrapiContent";

export default function OffreProfil({ offre }: { offre: any }) {
    const email = offre?.Email_contact || "contact@optae.fr";

    return (
        <main className="min-h-screen flex flex-col">

            {/* --- SECTION HERO (Bleu Marine) --- */}
            <section className="w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-marine)" }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Contenu textuel */}
                    <div className="flex-1 text-white">
                        <Link
                            href="/carrieres"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest mb-8 opacity-60 hover:opacity-100 transition-opacity"
                            style={{ color: "var(--optae-light)" }}
                        >
                            ← Retour aux offres
                        </Link>

                        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                            {offre?.Nom_Poste}
                        </h1>

                        {/* Badges infos */}
                        <div className="flex flex-wrap items-center gap-6 mt-4 mb-8">
                            {(offre?.duree || offre?.Duree) && (
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <Clock size={14} />
                                    <span>{offre?.duree || offre?.Duree}</span>
                                </div>
                            )}
                            {(offre?.profil_recherche || offre?.Profil_recherche) && (
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <User size={14} />
                                    <span>{offre?.profil_recherche || offre?.Profil_recherche}</span>
                                </div>
                            )}
                            {offre?.publishedAt && (
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <Calendar size={14} />
                                    <span>
                                        Publié le{" "}
                                        {new Date(offre.publishedAt).toLocaleDateString("fr-FR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Bouton postuler */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href={`mailto:${email}?subject=Candidature — ${offre?.Nom_Poste}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all hover:bg-white/10"
                                style={{ borderColor: "var(--optae-light)", color: "var(--optae-light)" }}
                            >
                                <Mail size={14} /> Postuler
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VAGUE DE TRANSITION --- */}
            <div style={{ background: "var(--optae-marine)", marginBottom: "-2px" }}>
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--optae-blanc)" />
                    <path d="M0,55 C400,20 1000,70 1440,50 L1440,80 L0,80 Z" fill="var(--optae-blanc)" opacity="0.5" />
                </svg>
            </div>

            {/* --- SECTION CONTENU (Beige) --- */}
            <section className="flex-grow w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-blanc)" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Description du poste */}
                    <div className="strapi-content-renderer">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Description du poste
                        </h2>
                        <StrapiContent content={offre?.publication_offre} />
                    </div>

                    {/* Compétences requises */}
                    <div className="strapi-content-renderer">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Compétences requises
                        </h2>
                        <StrapiContent content={offre?.Competences_requises} />
                    </div>
                </div>
            </section>
        </main>
    );
}