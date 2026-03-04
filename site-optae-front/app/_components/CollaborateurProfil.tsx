"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

// Fonction pour rendre le Rich Text de Strapi
function RichText({ content }: { content: any[] }) {
    if (!content) return null;
    return (
        <>
            {content.map((bloc: any, index: number) => {
                if (bloc.type === "list") {
                    return (
                        <ul key={index} className="list-disc list-inside mb-4 space-y-1">
                            {bloc.children?.map((item: any, i: number) => (
                                <li key={i}>
                                    {item.children?.map((child: any, j: number) => (
                                        <span
                                            key={j}
                                            style={{
                                                fontWeight: child.bold ? "bold" : "normal",
                                                fontStyle: child.italic ? "italic" : "normal",
                                                textDecoration: child.underline ? "underline" : "none",
                                            }}
                                        >
                                            {child.text}
                                        </span>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    );
                }
                // Paragraphe
                return (
                    <p key={index} className="mb-4">
                        {bloc.children?.map((child: any, j: number) => (
                            <span
                                key={j}
                                style={{
                                    fontWeight: child.bold ? "bold" : "normal",
                                    fontStyle: child.italic ? "italic" : "normal",
                                    textDecoration: child.underline ? "underline" : "none",
                                }}
                            >
                                {child.text}
                            </span>
                        ))}
                    </p>
                );
            })}
        </>
    );
}

export default function CollaborateurProfil({ collaborateur }: { collaborateur: any }) {
    const photo = collaborateur.Photo;

    return (
        <main>
            {/* Section haut — bleu marine */}
            <section className="w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-marine)" }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Infos gauche */}
                    <div className="flex-1 text-white">
                        {/* Back */}
                        <Link href="/nos-equipes"
                            className="flex items-center gap-2 text-xs uppercase tracking-widest mb-8 opacity-60 hover:opacity-100 transition-opacity"
                            style={{ color: "var(--optae-coral)" }}>
                            ← Back to our people
                        </Link>

                        {/* Nom */}
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                            {collaborateur.Prenom} {collaborateur.Nom}
                        </h1>

                        {/* Poste */}
                        <p className="text-sm font-bold uppercase tracking-widest mb-4"
                            style={{ color: "var(--optae-coral)" }}>
                            {collaborateur.Poste}
                        </p>

                        {/* Description */}
                        <p className="text-sm leading-relaxed opacity-70 mb-8 max-w-md text-white">
                            {collaborateur.Description}
                        </p>

                        {/* Icônes contact — toujours affichées */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href={collaborateur.Email ? `mailto:${collaborateur.Email}` : "#"}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all"
                                style={{
                                    borderColor: collaborateur.Email ? "var(--optae-coral)" : "rgba(255,255,255,0.2)",
                                    color: collaborateur.Email ? "var(--optae-coral)" : "rgba(255,255,255,0.3)",
                                    pointerEvents: collaborateur.Email ? "auto" : "none",
                                    opacity: collaborateur.Email ? 1 : 0.4,
                                }}
                            >
                                <Mail size={14} />
                                Contact
                            </a>
                            <a
                                href={collaborateur.linkedin || "#"}
                                target={collaborateur.linkedin ? "_blank" : undefined}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all"
                                style={{
                                    borderColor: collaborateur.linkedin ? "var(--optae-coral)" : "rgba(255,255,255,0.2)",
                                    color: collaborateur.linkedin ? "var(--optae-coral)" : "rgba(255,255,255,0.3)",
                                    pointerEvents: collaborateur.linkedin ? "auto" : "none",
                                    opacity: collaborateur.linkedin ? 1 : 0.4,
                                }}
                            >
                                <Linkedin size={14} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Photo droite */}
                    <div className="relative w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0"
                        style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.3)" }}>
                        {photo?.url ? (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.url}`}
                                alt={`${collaborateur.Prenom} ${collaborateur.Nom}`}
                                fill
                                className="object-cover object-top"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center"
                                style={{ background: "var(--optae-accent)" }}>
                                <span className="text-4xl font-bold text-white">
                                    {collaborateur.Prenom?.[0]}{collaborateur.Nom?.[0]}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Vague */}
            <div style={{ background: "var(--optae-marine)", marginBottom: "-2px" }}>
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--optae-beige)" />
                    <path d="M0,55 C400,20 1000,70 1440,50 L1440,80 L0,80 Z" fill="var(--optae-beige)" opacity="0.5" />
                </svg>
            </div>

            {/* Section bas — beige */}
            <section className="w-full px-6 md:px-16 py-16" style={{ background: "var(--optae-beige)" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Bio */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Biographie
                        </h2>
                        <div className="text-sm leading-relaxed" style={{ color: "var(--optae-blue)" }}>
                            <RichText content={collaborateur.Bio} />
                        </div>
                    </div>

                    {/* Expertises */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "var(--optae-violet)" }}>
                            Expertises
                        </h2>
                        <div className="text-sm leading-relaxed" style={{ color: "var(--optae-blue)" }}>
                            <RichText content={collaborateur.Expertises} />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}