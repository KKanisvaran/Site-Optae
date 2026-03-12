import ImageCarousel from "@/_components/Carousel";

async function getCollectivites() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/collectivites?populate=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    if (!data.data) return [];
    return data.data;
}

export default async function CollectivitesPage() {
    const collectivites = await getCollectivites();

    return (
        <main className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-6">
                {collectivites.map((item: any) => {
                    const slides = [{
                        id: item.id,
                        Titre: item.Nom,
                        Description: item.Description_carousel || "",
                        Image: item.photo_carousel || [],
                        Lien: `/collectivites/${item.Slug}`,
                    }];

                    return (
                        <ImageCarousel key={item.id} slides={slides} />
                    );
                })}
            </div>
        </main>
    );
}