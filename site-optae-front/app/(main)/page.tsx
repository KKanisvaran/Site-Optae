import CardStats from "@/_components/CardStat";
async function getStats() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/stats?populate=*`);
    const json = await response.json();
    return json.data;
}

export default async function ServicesPage() {
    const stats = await getStats();

    
    const quatreStats = stats.slice(0, 4);

    return (
        <main>
            <CardStats stats={quatreStats} />
        </main>
    );
}