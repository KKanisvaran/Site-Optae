import MarkdownContent from "@/_components/MarkdownContent";
import CardMethodo from "@/_components/CardMethodo";

async function getContent() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[Slug][$eq]=collectivites&populate=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    if (!data.data || data.data.length === 0) return null;
    return data.data[0];
}

async function getMethodoSteps() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/methodologies?populate=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    if (!data.data) return [];
    return data.data;
}

export default async function CollectivitesPage() {
    const [content, steps] = await Promise.all([getContent(), getMethodoSteps()]);

    if (!content) {
        return (
            <main className="w-full py-32 flex items-center justify-center text-gray-400 text-sm">
                Contenu non disponible pour le moment.
            </main>
        );
    }

    return (
        <main className="w-full">
            {/* Contenu texte */}
            <div className="py-12 px-6 md:px-16 max-w-4xl mx-auto">
                <div className="prose prose-lg">
                    <MarkdownContent content={content.Content?.[0]?.body} />
                </div>
            </div>

            {/* Section méthodologie */}
            {steps.length > 0 && (
                <section className="w-full py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 md:px-16">
                        <h2 className="text-3xl font-bold text-center mb-10 text-[#1B2A6B]">
                            Notre méthodologie
                        </h2>
                        <CardMethodo steps={steps} />
                    </div>
                </section>
            )}
        </main>
    );
}