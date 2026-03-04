"use client";

import Image from "next/image";

export default function Hero({ stats }: { stats: any[] }) {
    return (
        <section className="w-full py-12 md:py-16 px-6 md:px-16" style={{ background: "#f8fafc" }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((item: any) => {
                        const icon = item.Icons?.[0];
                        return (
                            <div
                                key={item.id}
                                className="group relative rounded-3xl p-8 flex flex-col items-center text-center cursor-default overflow-hidden"
                                style={{
                                    minHeight: "200px",
                                    background: "linear-gradient(135deg, #ffffff 0%, var(--optae-light) 100%)",
                                    border: "1px solid transparent",
                                    boxShadow: "0 2px 16px rgba(18,20,77,0.06)",
                                    transition: "box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px rgba(18,20,77,0.14)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--optae-accent)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(18,20,77,0.06)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                                }}
                            >
                                {/* Cercle decoratif */}
                                <div
                                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20"
                                    style={{ background: "var(--optae-accent)" }}
                                />

                                {/* Icone avec ombre */}
                                {icon?.url && (
                                    <div
                                        className="relative mb-4 flex-shrink-0"
                                        style={{
                                            width: "56px",
                                            height: "56px",
                                            filter: "drop-shadow(0 8px 16px rgba(18,20,77,0.20))",
                                            transition: "filter 0.4s ease, transform 0.4s ease",
                                        }}
                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${icon.url}`}
                                            alt={item.Title || "stat-icon"}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}

                                {/* Chiffre */}
                                <span
                                    className="text-4xl md:text-5xl font-bold leading-none mb-3"
                                    style={{ color: "var(--optae-blue)" }}
                                >
                                    {item.Value}
                                </span>

                                {/* Title */}
                                <span
                                    className="text-[11px] md:text-xs font-bold uppercase tracking-widest"
                                    style={{ color: "var(--optae-accent)" }}
                                >
                                    {item.Title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}