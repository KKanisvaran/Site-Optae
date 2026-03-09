import CardOffre from "@/_components/CardOffre";

async function getOffres() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Offre-d-emplois?populate=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    if (!data.data) return [];
    return data.data.map((item: any) => ({
        id: item.id,
        ...item,
    }));
}

export default async function CarrieresPage() {
    const offres = await getOffres();

    return (
        <main>
            {offres.length > 0 ? (
                <CardOffre items={offres} />
            ) : (
                <div className="w-full py-32 flex items-center justify-center text-gray-400 text-sm">
                    Aucune offre disponible pour le moment.
                </div>
            )}
        </main>
    );
}