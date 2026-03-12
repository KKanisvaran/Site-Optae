"use client";

import Image from "next/image";
import Link from "next/link";

export default function SecteurCard({ secteurs }: { secteurs: any[] }) {
    return (
        <>
            {secteurs.map((card: any, index: number) => {
                const imgUrl = card.Img?.[0]?.url || null;

                return (
                    <Link
                        key={card.id}
                        href={`/services/bureau-d-etudes/${card.Slug}`}
                        className="group"
                        style={{
                            display: "block",
                            position: "relative",
                            overflow: "hidden",
                            textDecoration: "none",
                            minHeight: "300px",
                        }}
                    >
                        {/* Image */}
                        {imgUrl ? (
                            <Image
                                src={imgUrl}
                                alt={card.Nom}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div style={{ position: "absolute", inset: 0, background: "var(--optae-marine)" }} />
                        )}

                        {/* Overlay */}
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to top, rgba(10,20,60,0.88) 0%, rgba(10,20,60,0.15) 60%, transparent 100%)",
                        }} />

                        {/* Numéro */}
                        <div style={{
                            position: "absolute", top: "1.5rem", right: "1.5rem",
                            fontSize: "10px", letterSpacing: "0.3em",
                            color: "rgba(255,255,255,0.2)", fontWeight: 300,
                        }}>
                            0{index + 1}
                        </div>

                        {/* Texte bas */}
                        <div style={{
                            position: "absolute", bottom: 0, left: 0, right: 0,
                            padding: "2rem",
                        }}>
                            <div style={{
                                width: "20px", height: "1px",
                                background: "rgba(255,255,255,0.3)",
                                marginBottom: "0.75rem",
                                transition: "width 0.4s ease",
                            }} className="group-hover:!w-10" />
                            <h3 style={{
                                fontSize: "1.1rem", fontWeight: 300,
                                color: "white", letterSpacing: "-0.01em",
                                marginBottom: "0.5rem",
                            }}>
                                {card.Nom}
                            </h3>
                            <span style={{
                                fontSize: "9px", letterSpacing: "0.25em",
                                textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
                            }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                Découvrir →
                            </span>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}