"use client";

import Image from "next/image";
import StrapiContent from "@/_components/StrapiContent";

interface MethodoStep {
    id: number;
    Titre: string;
    Numero: number;
    Description: any[];
    icone?: {
        url: string;
    };
}

export default function CardMethodo({ steps }: { steps: MethodoStep[] }) {
    return (
        <section className="w-full py-12">
            <div className="flex flex-wrap justify-center gap-10">
                {steps.map((item) => {
                    const iconData = item.icone;
                    const fullIconUrl = iconData?.url
                        ? (iconData.url.startsWith('http') ? iconData.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${iconData.url}`)
                        : null;

                    return (
                        <div
                            key={item.id}
                            className="group relative [perspective:1200px]"
                            style={{ width: "320px", height: "420px" }}
                        >
                            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl">

                                {/* FACE RECTO */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-10 flex flex-col items-start text-left bg-white border border-slate-100 [backface-visibility:hidden] z-20 shadow-sm"
                                    style={{ borderBottom: "4px solid #12144d" }}
                                >
                                    <span className="absolute top-6 right-8 text-8xl font-black opacity-[0.05] select-none pointer-events-none text-[#12144d]">
                                        {item.Numero}
                                    </span>

                                    {fullIconUrl && (
                                        <div className="relative mb-8 w-16 h-16 transition-transform duration-500 group-hover:scale-110">
                                            <Image
                                                src={fullIconUrl}
                                                alt={item.Titre}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold leading-tight text-[#12144d] mb-4 pr-6">
                                        {item.Titre}
                                    </h3>

                                    <div className="mt-auto flex items-center gap-2 text-[#3b82f6] font-bold text-[10px] uppercase tracking-widest">
                                        <span>Détails de l'expertise</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>

                                {/* FACE VERSO */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-10 flex flex-col justify-center bg-[#6ecdde] text-white [backface-visibility:hidden] [transform:rotateY(180deg)] z-10 shadow-2xl overflow-hidden"
                                >
                                    <div className="text-[#3b82f6] font-bold text-[10px] mb-4 uppercase tracking-widest opacity-80">
                                        Phase 0{item.Numero}
                                    </div>

                                    <div className="w-12 h-1 bg-[#3b82f6] mb-6 rounded-full" />

                                    <div className="text-sm [&_p]:text-white [&_p]:mb-2 [&_li]:text-white [&_li]:mb-1 [&_strong]:text-[#3b82f6] [&_strong]:font-bold [&_em]:text-blue-200">
                                        <StrapiContent content={item.Description} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}