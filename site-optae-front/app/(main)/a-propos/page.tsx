import StrapiContent from "@/_components/StrapiContent";
import ReactMarkdown from "react-markdown";
import MarkdownContent from "@/_components/MarkdownContent";


async function getContent() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[Slug][$eq]=a-propos&populate=*`,
        { next: { revalidate: 0 } }
    );
    const data = await res.json();
    console.log("data complète:", JSON.stringify(data, null, 2));
    if (!data.data || data.data.length === 0) return null;
    return data.data[0];
}


export default async function AProposPage() {
    const content = await getContent();
    if (!content) {
        return (
            <main className="w-full py-32 flex items-center justify-center text-gray-400 text-sm">
                Contenu non disponible pour le moment.
            </main>
        );
    }
    
    return (
    <main className="w-full py-12 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="prose prose-lg">
            <MarkdownContent content={content.Content?.[0]?.body} />
        </div>
    </main>
);
}