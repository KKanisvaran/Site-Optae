import EditorialSplit from "@/_components/EditorialSplit";
import SecteurCard from "@/_components/CardSector";
import LogoSlider from "@/_components/LogoSlider";
import Image from "next/image";

async function getBureauDEtudeData() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[Slug][$eq]=bureau-d-etudes&populate[Content][populate]=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data.data?.[0] || null;
}

async function getCardIcons() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cardicons?populate=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data.data || [];
}

export default async function BureauDEtudesPage() {
    const pageData = await getBureauDEtudeData();
    const cardIcons = await getCardIcons();
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";

    const mediaBlocks = pageData?.Content?.filter((c: any) => c.__component === "shared.media") || [];
    const richTextBlock = pageData?.Content?.find((c: any) => c.__component === "shared.rich-text");
    const sliderBlock = pageData?.Content?.find((c: any) => c.__component === "shared.slider");

    const getUrl = (block: any) => block?.file?.url
        ? (block.file.url.startsWith("http") ? block.file.url : `${STRAPI_URL}${block.file.url}`)
        : null;

    const bandeauUrl = getUrl(mediaBlocks[0]);
    const introImgUrl = getUrl(mediaBlocks[1]) || bandeauUrl;

    return (
        <main className="min-h-screen flex flex-col">

            {/* ── 1. BANDEAU ── */}
            <section style={{
                position: "relative",
                width: "100%",
                height: "500px",
                overflow: "hidden",
                background: "var(--optae-marine)",
            }}>
                {bandeauUrl && (
                    <Image
                        src={bandeauUrl}
                        alt="Bureau d'études"
                        fill
                        className="object-cover"
                        priority
                        style={{ opacity: 0.5 }}
                    />
                )}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(27,42,107,0.7) 0%, rgba(27,42,107,0.3) 100%)",
                }} />
                <div style={{
                    position: "absolute", bottom: "3.5rem", left: "5rem", zIndex: 1,
                }}>
                </div>
            </section>

            {/* ── 2. TEXTE + IMAGE éditorial ── */}
            {richTextBlock?.body && introImgUrl && (
                <EditorialSplit body={richTextBlock.body} imgUrl={introImgUrl} />
            )}

            {/* ── 3. CARDS secteurs ── */}
            {cardIcons.length > 0 && (
                <section style={{
                    padding: "0 4rem 6rem",
                    maxWidth: "1300px",
                    margin: "0 auto",
                    width: "100%",
                }}>
                    <div style={{
                        width: "32px", height: "2px",
                        background: "var(--optae-blue)", opacity: 0.3,
                        marginBottom: "1.5rem",
                    }} />
                    <p style={{
                        fontSize: "9px", fontWeight: 700,
                        letterSpacing: "0.4em", textTransform: "uppercase",
                        color: "var(--optae-blue)", opacity: 0.5,
                        marginBottom: "3rem",
                    }}>
                        Nos secteurs d'intervention
                    </p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                    }}>
                        <SecteurCard secteurs={cardIcons} />
                    </div>
                </section>
            )}

            {/* ── 4. LOGOS ticker infini ── */}
            {sliderBlock?.files?.length > 0 && (
                <LogoSlider files={sliderBlock.files} strapiUrl={STRAPI_URL} />
            )}

        </main>
    );
}