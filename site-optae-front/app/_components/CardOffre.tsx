"use client";

import Link from "next/link";
// Ajout des nouvelles icônes nécessaires
import { Clock, User, ArrowRight, Briefcase, MapPin, Euro, FileText } from "lucide-react";

export default function CardOffre({ items }: { items: any[] }) {
    return (
        <section className="w-full py-12 md:py-20 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item: any) => (
                        <Link
                            key={item.id}
                            href={`/carrieres/${item.Slug}`}
                            className="group relative bg-white flex flex-col cursor-pointer p-10"
                            style={{
                                boxShadow: "0 2px 16px rgba(18,20,77,0.06)",
                                borderTop: "4px solid #1B2A6B",
                                transition: "all 0.4s ease",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(18,20,77,0.1)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(18,20,77,0.06)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                            }}
                        >
                            <div className="flex flex-col h-full">

                                <h3 className="text-2xl font-bold mb-3 text-[#1B2A6B]">
                                    {item.Nom_Poste}
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-500 line-clamp-2 font-light mb-8">
                                    {item.Description_courte}
                                </p>

                                {/* --- GRILLE DES 4 INFOS --- */}
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                                    
                       
                                    {/* Type de contrat */}
                                    <div className="flex items-center gap-2 text-[11px] text-[#1B2A6B]/70 font-medium">
                                        <FileText className="w-4 h-4 text-[#4F5E8A]" />
                                        <span>{item.type_de_contrat || "CDI"}</span>
                                    </div>

                                    {/* Salaire */}
                                    <div className="flex items-center gap-2 text-[11px] text-[#1B2A6B]/70 font-medium">
                                        <Euro className="w-4 h-4 text-[#4F5E8A]" />
                                        <span>{item.salaire || "A définir"}</span>
                                    </div>

                                    {/* Profil*/}
                                    <div className="flex items-center gap-2 text-[11px] text-[#1B2A6B]/70 font-medium">
                                        <User className="w-4 h-4 text-[#4F5E8A]" />
                                        <span>{item.profil_recherche || "Non spécifié3"}</span>
                                    </div>

                                    {/* Lieu */}
                                    <div className="flex items-center gap-2 text-[11px] text-[#1B2A6B]/70 font-medium">
                                        <MapPin className="w-4 h-4 text-[#4F5E8A]" />
                                        <span>{item.Lieu || "Non spécifié"}</span>
                                    </div>

                                </div>

                                <div className="mt-auto flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#1B2A6B]">
                                    <span>Voir l'offre</span>
                                    <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}