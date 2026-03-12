"use client";

import Image from "next/image";
import MarkdownContent from "@/_components/MarkdownContent";

export default function BureauIntro({ body, imgUrl }: { body: string, imgUrl: string }) {
    return (
        <section style={{
            position: "relative",
            maxWidth: "1300px",
            margin: "6rem auto",
            padding: "0 4rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "0",
            alignItems: "center",
            minHeight: "520px",
        }}>
            {/* Texte — légèrement en avant avec z-index */}
            <div style={{
                position: "relative",
                zIndex: 2,
                padding: "4rem 4rem 4rem 0",
                background: "white",
                marginRight: "-60px", // chevauche l'image
                boxShadow: "20px 0 60px rgba(255,255,255,0.9)",
            }}>
                <div style={{
                    width: "32px", height: "2px",
                    background: "var(--optae-blue)", opacity: 0.3,
                    marginBottom: "2rem",
                }} />
                <MarkdownContent content={body} />
            </div>

            {/* Image — sort légèrement du cadre en haut et en bas */}
            <div style={{
                position: "relative",
                height: "580px", // plus grand que le parent → déborde
                marginTop: "-30px",
                marginBottom: "-30px",
                overflow: "hidden",
            }}
                onMouseEnter={e => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.04)";
                }}
                onMouseLeave={e => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                }}
            >
                <Image
                    src={imgUrl}
                    alt="Bureau d'études"
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.8s ease" }}
                />
                {/* Dégradé gauche pour fondre avec le blanc du texte */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to right, rgba(255,255,255,0.5) 0%, transparent 25%)",
                }} />
            </div>
        </section>
    );
}