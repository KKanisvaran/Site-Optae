"use client";

import Image from "next/image";
import Link from "next/link";

export default function Collaborateur({ collaborateurs }: { collaborateurs: any[] }) {
    return (
        <section className="w-full py-12 md:py-20 px-6 md:px-16" style={{ background: "#f8fafc" }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborateurs.map((collaborateur: any) => {
                        const photo = collaborateur.Photo;
                        const description = collaborateur.Description;

                        return (
                            <Link
                                key={collaborateur.id}
                                href={`/nos-equipes/${collaborateur.Slug}`}
                                className="group relative bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer"
                                style={{
                                    boxShadow: "0 2px 16px rgba(18,20,77,0.06)",
                                    border: "1px solid transparent",
                                    transition: "box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px rgba(18,20,77,0.12)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--optae-terra)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(18,20,77,0.06)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                                }}
                            >
                                {/* Photo */}
                                <div className="relative w-full h-90 overflow-hidden">
                                    {photo?.url ? (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.url}`}
                                            alt={`${collaborateur.Prenom} ${collaborateur.Nom}`}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--optae-light)" }}>
                                            <span className="text-4xl font-bold" style={{ color: "var(--optae-accent)" }}>
                                                {collaborateur.Prenom?.[0]}{collaborateur.Nom?.[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Contenu */}
                                <div className="p-6 flex flex-col flex-1 relative">

                                    {/* Nom + Poste */}
                                    <h3 className="text-lg font-bold mb-1" style={{ color: "var(--optae-blue)" }}>
                                        {collaborateur.Prenom} {collaborateur.Nom}
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--optae-terra)" }}>
                                        {collaborateur.Poste}
                                    </p>

                                    {/* Description courte */}
                                    {description && (
                                        <p className="text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: "var(--optae-accent)" }}>
                                            {description}
                                        </p>
                                    )}

                                    {/* Bouton voir profil */}
                                    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ color: "var(--optae-terra)" }}>
                                        Voir le profil →
                                    </div>

                                    {/* Vague corail en bas */}
                                    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                                        <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0,30 C100,60 300,0 400,30 L400,60 L0,60 Z"
                                                fill="var(--optae-coral)"
                                                opacity="0.15"
                                            />
                                            <path
                                                d="M0,40 C150,10 250,60 400,35 L400,60 L0,60 Z"
                                                fill="var(--optae-terra)"
                                                opacity="0.10"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}