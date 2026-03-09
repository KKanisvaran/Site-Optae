import CardStats from "@/_components/CardStat";
import ImageCarousel from "@/_components/Carousel";

async function getSlides() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/carousels?populate=*`,
        { cache: 'no-store' }
    );
    const json = await res.json();
    return json.data || [];
}

async function getStats() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    try {
        const response = await fetch(`${strapiUrl}/api/stats?populate=*`, {
            cache: 'no-store'
        });
        const json = await response.json();
        if (!json.data) return [];
        return json.data;
    } catch (error) {
        console.error("Erreur Strapi:", error);
        return [];
    }
}

export default async function HomePage() {
    const slides = await getSlides();
    const stats = await getStats();
    const quatreStats = stats.slice(0, 4);

    const banniere1 = slides.filter((s: any) => s.Nom === "banniere1");
    const banniere2 = slides.filter((s: any) => s.Nom === "banniere2");
    const banniere3 = slides.filter((s: any) => s.Nom === "banniere3");
    const banniere4 = slides.filter((s: any) => s.Nom === "banniere4");

    return (
        <main>
            {banniere1.length > 0 && <ImageCarousel slides={banniere1} />}
            {banniere2.length > 0 && <ImageCarousel slides={banniere2} />}
            {banniere3.length > 0 && <ImageCarousel slides={banniere3} />}
            {banniere4.length > 0 && <ImageCarousel slides={banniere4} />}
            {quatreStats.length > 0 && <CardStats stats={quatreStats} />}
        </main>
    );
}