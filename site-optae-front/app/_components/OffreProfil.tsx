"use client";

import Link from "next/link";
import { Mail, Clock, User, Calendar, MapPin, Briefcase, Euro, GraduationCap, Timer } from "lucide-react";
import StrapiContent from "./StrapiContent";

function Badge({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div className="flex items-center gap-2 px-3 py-2 rounded-full text-xs"
            style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(4px)",
            }}>
            <span style={{ opacity: 0.7 }}>{icon}</span>
            <span>{label}</span>
        </div>
    );
}

export default function OffreProfil({ offre }: { offre: any }) {
    const email = offre?.Email_contact || "contact@optae.fr";

    return (
        <main className="min-h-screen flex flex-col">

            {/* --- SECTION HERO --- */}
            <section className="w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-marine)" }}>
                <div className="max-w-7xl mx-auto flex flex-col gap-8">

                    <Link
                        href="/carrieres"
                        className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity w-fit"
                        style={{ color: "var(--optae-light)" }}
                    >
                        ← Retour aux offres
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        {offre?.Nom_Poste}
                    </h1>

                    {/* Badges infos style LinkedIn */}
                    <div className="flex flex-wrap items-center gap-3">

                        {(offre?.type_de_contrat || offre?.Type_de_contrat) && (
                            <Badge
                                icon={<Briefcase size={13} />}
                                label={offre?.type_de_contrat || offre?.Type_de_contrat}
                            />
                        )}
                        {(offre?.lieu || offre?.Lieu) && (
                            <Badge
                                icon={<MapPin size={13} />}
                                label={offre?.lieu || offre?.Lieu}
                            />
                        )}
                        {(offre?.temps_travail || offre?.Temps_travail) && (
                            <Badge
                                icon={<Timer size={13} />}
                                label={offre?.temps_travail || offre?.Temps_travail}
                            />
                        )}
                        {(offre?.salaire || offre?.Salaire) && (
                            <Badge
                                icon={<Euro size={13} />}
                                label={`Salaire : ${offre?.salaire || offre?.Salaire}`}
                            />
                        )}
                        {offre?.publishedAt && (
                            <Badge
                                icon={<Calendar size={13} />}
                                label={`Début : ${new Date(offre.publishedAt).toLocaleDateString("fr-FR", {
                                    day: "numeric", month: "long", year: "numeric",
                                })}`}
                            />
                        )}
                        {(offre?.profil_recherche || offre?.Profil_recherche) && (
                            <Badge
                                icon={<User size={13} />}
                                label={`Profil : ${offre?.profil_recherche || offre?.Profil_recherche}`}
                            />
                        )}

                        {(offre?.experience || offre?.Experience) && (
                            <Badge
                                icon={<GraduationCap size={13} />}
                                label={offre?.experience || offre?.Experience}
                            />
                        )}
                        
                        {(offre?.duree || offre?.Duree) && (
                            <Badge
                                icon={<Clock size={13} />}
                                label={offre?.duree || offre?.Duree}
                            />
                        )}


                    </div>

                    {/* Bouton postuler */}
                    <a
                        href={`mailto:${email}?subject=Candidature — ${offre?.Nom_Poste}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-full border text-xs uppercase tracking-widest transition-all hover:bg-white/10 w-fit mt-2"
                        style={{ borderColor: "var(--optae-light)", color: "var(--optae-light)" }}
                    >
                        <Mail size={14} /> Postuler
                    </a>
                </div>
            </section>

            {/* --- VAGUE --- */}
            <div style={{ background: "var(--optae-marine)", marginBottom: "-2px", lineHeight: 0 }}>
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20" style={{ display: "block" }}>
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
                    <path d="M0,55 C400,20 1000,70 1440,50 L1440,80 L0,80 Z" fill="white" opacity="0.5" />
                </svg>
            </div>

            {/* --- CONTENU --- */}
            <section className="flex-grow w-full px-6 md:px-16 py-16" style={{ background: "white" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="strapi-content-renderer">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Description du poste
                        </h2>
                        <StrapiContent content={offre?.publication_offre} />
                    </div>

                    <div className="strapi-content-renderer">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Prérequis du poste
                        </h2>
                        <StrapiContent content={offre?.competences_requises} />
                    </div>
                </div>
            </section>
        </main>
    );
}