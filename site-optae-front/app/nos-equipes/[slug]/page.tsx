import Collaborateur from "@/_components/ProfilCollaborateur";

async function getCollaborateurs(slug:string) {

    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/collaborateurs?filters[Slug][$eq]=${slug}&populate=*`; 
    const response = await fetch(endpoint, { next: { revalidate: 0 } });
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

export default async function Equipe({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getCollaborateurs(slug);


    return (
        <main>
            <Collaborateur collaborateur={data[0]} />
        </main>
    );
}