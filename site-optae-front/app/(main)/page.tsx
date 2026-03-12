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
    const quatreStats = stats.slice(0, 3);

    const bannieres = slides.reduce((acc: any, slide: any) => {
    const nom = slide.Nom;
    if (!acc[nom]) acc[nom] = [];
    acc[nom].push(slide);
    return acc;
    }, {});

    // Trier les bannieres par nom (banniere1, banniere2, ...)
    const bannieresTriees = Object.entries(bannieres)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([_, slides]) => slides);

    return (
        <main>
            {bannieresTriees.map((groupe: any, i: number) => (
                <ImageCarousel key={i} slides={groupe} />
            ))}
            {quatreStats.length > 0 && <CardStats stats={quatreStats} />}
        </main>
    );
}