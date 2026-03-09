"use client";

import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";

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

                                {/* Nom du poste */}
                                <h3 className="text-2xl font-bold mb-3 text-[#1B2A6B]">
                                    {item.Nom_Poste}
                                </h3>

                                {/* Description courte */}
                                <p className="text-sm leading-relaxed text-gray-500 flex-1 line-clamp-3 font-light mb-8">
                                    {item.Description_courte}
                                </p>

                                {/* Icônes Durée + Profil */}
                                <div className="flex items-center gap-6 mb-8">
                                    {item.duree && (
                                        <div className="flex items-center gap-2 text-[11px] text-[#1B2A6B]/60 font-medium">
                                            <Clock className="w-4 h-4 text-[#4F5E8A]" />
                                            <span>{item.duree}</span>
                                        </div>
                                    )}
                                    {item.profil_recherche && (
                                        <div className="flex items-center gap-2 text-[11px] text-[#1B2A6B]/60 font-medium">
                                            <User className="w-4 h-4 text-[#4F5E8A]" />
                                            <span>{item.profil_recherche}</span>
                                        </div>
                                    )}
                                </div>

                                {/* En savoir plus + flèche */}
                                <div className="mt-auto flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#1B2A6B]">
                                    <span>En savoir plus</span>
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