import CardStats from "@/_components/CardStat";

async function getStats() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    
    try {
        const response = await fetch(`${strapiUrl}/api/stats?populate=*`, {
            cache: 'no-store'
        });
        const json = await response.json();

        if (!json.data) return [];

        return json.data.map((item: any) => {
            // ÉTAPE 1: On récupère les attributs de manière sûre
            const attrs = item.attributes || {};
            
            // ÉTAPE 2: On descend dans l'objet image étape par étape
            // On vérifie si attrs.image existe, PUIS si .data existe, PUIS si .attributes existe
            const imagePath = attrs.image?.data?.attributes?.url;
            
            return {
                ...item,
                attributes: {
                    ...attrs,
                    // ÉTAPE 3: On crée une URL propre ou on met une chaîne vide si l'image manque
                    imageUrl: imagePath 
                        ? (imagePath.startsWith('/') ? `${strapiUrl}${imagePath}` : imagePath)
                        : null
                }
            };
        });
    } catch (error) {
        console.error("Erreur Strapi:", error);
        return [];
    }
}

export default async function ServicesPage() {
    const stats = await getStats();
    
    // On prend les 4 premières
    const quatreStats = stats.slice(0, 4);

    return (
        <main>
            {quatreStats.length > 0 ? (
                <CardStats stats={quatreStats} />
            ) : (
                <p>Chargement ou aucune donnée...</p>
            )}
        </main>
    );
}