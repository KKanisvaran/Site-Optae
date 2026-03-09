import OffreProfil from "@/_components/OffreProfil";

async function getOffre(slug: string) {
    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Offre-d-emplois?filters[Slug][$eq]=${slug}&populate=*`;
    const response = await fetch(endpoint, { next: { revalidate: 0 } });
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

export default async function OffrePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getOffre(slug);
    console.log("slug:", slug);
    console.log("data:", data);
    console.log("offre complet:", JSON.stringify(data[0], null, 2));

    

    return (
        <main>
            <OffreProfil offre={data[0]} />
        </main>
    );
}