"use client";

export default function LogoSlider({ files, strapiUrl }: { files: any[], strapiUrl: string }) {
    if (!files || files.length === 0) return null;

    const getUrl = (file: any) =>
        file.url?.startsWith("http") ? file.url : `${strapiUrl}${file.url}`;

    // On duplique pour la boucle infinie
    const doubled = [...files, ...files];

    return (
        <section style={{
            padding: "5rem 0",
            background: "var(--optae-beige)",
            overflow: "hidden",
        }}>
            {/* Titre */}
            <p style={{
                textAlign: "center",
                fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.4em", textTransform: "uppercase",
                color: "var(--optae-blue)", opacity: 0.5,
                marginBottom: "3rem",
            }}>
                Ils nous font confiance
            </p>

            {/* Track infini */}
            <div style={{ overflow: "hidden", width: "100%" }}>
                <div style={{
                    display: "flex",
                    gap: "4rem",
                    animation: "ticker 20s linear infinite",
                    width: "max-content",
                }}>
                    {doubled.map((file: any, i: number) => (
                        <div key={i} style={{
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "160px",
                            height: "80px",
                        }}>
                            <img
                                src={getUrl(file)}
                                alt={`partenaire-${i + 1}`}
                                style={{
                                    maxHeight: "70px",
                                    maxWidth: "140px",
                                    objectFit: "contain",
                                    opacity: 0.6,
                                    filter: "grayscale(30%)",
                                    transition: "opacity 0.3s, filter 0.3s",
                                }}
                                onMouseEnter={e => {
                                    (e.target as HTMLImageElement).style.opacity = "1";
                                    (e.target as HTMLImageElement).style.filter = "grayscale(0%)";
                                }}
                                onMouseLeave={e => {
                                    (e.target as HTMLImageElement).style.opacity = "0.6";
                                    (e.target as HTMLImageElement).style.filter = "grayscale(30%)";
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes ticker {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}