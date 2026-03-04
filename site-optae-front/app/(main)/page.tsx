// app/(main)/page.tsx
import Hero from "@/_components/Hero";

async function getHomePageData() {
    // On appelle l'endpoint des statistiques (ou de la page accueil) dans Strapi
    // Assure-toi que l'URL correspond à ton installation Strapi
    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate[0]=Stats&populate[1]=Stats.Icons`; 
    
    try {
        const response = await fetch(endpoint, { next: { revalidate: 0 } });
        const jsonResponse = await response.json();
        // On retourne le tableau de stats (ajuste le chemin selon ta structure Strapi)
        return jsonResponse.data?.attributes?.Stats || []; 
    } catch (error) {
        console.error("Erreur Strapi:", error);
        return [];
    }
}

export default async function HomePage() {
    // Récupération des données depuis Strapi au moment du rendu (Server Side)
    const stats = await getHomePageData();

    return (
        <main>
            {/* On envoie les données fraîches de Strapi au composant Hero */}
            <Hero stats={stats} />
            
            {/* Tu peux ajouter ici d'autres composants qui utilisent Strapi */}
        </main>
    );
}