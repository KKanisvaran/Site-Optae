// app/_components/StrapiContent.tsx
export default function StrapiContent({ content }: { content: any }) {
    // Sécurité : si content est vide ou n'est pas un tableau, on n'affiche rien au lieu de crasher
    if (!content || !Array.isArray(content)) {
        return null;
    }

    return (
        <div className="strapi-content-renderer">
            {content.map((bloc: any, index: number) => {
                
                // CAS 1 : LES LISTES (Tes boules bleues)
                if (bloc.type === "list") {
                    const ListTag = bloc.format === "ordered" ? "ol" : "ul";
                    return (
                        <ListTag key={index} className="list-disc list-outside mb-4 ml-5 space-y-2">
                            {bloc.children?.map((item: any, i: number) => (
                                <li key={i} className="marker:text-blue-600 pl-2">
                                    {item.children?.map((child: any, j: number) => (
                                        <span key={j} className={`${child.bold ? "font-bold text-black" : ""} ${child.italic ? "italic" : ""}`}>
                                            {child.text}
                                        </span>
                                    ))}
                                </li>
                            ))}
                        </ListTag>
                    );
                }

                // CAS 2 : LES TITRES (h1, h2, etc.)
                if (bloc.type === "heading") {
                    const Tag = `h${bloc.level || 2}` as any;
                    return (
                        <Tag key={index} className="font-bold text-[var(--optae-marine)] mb-4 mt-6">
                            {bloc.children?.map((child: any, j: number) => (
                                <span key={j} className={child.bold ? "font-bold" : ""}>{child.text}</span>
                            ))}
                        </Tag>
                    );
                }

                // CAS 3 : PARAGRAPHE PAR DÉFAUT
                return (
                    <p key={index} className="mb-4 leading-relaxed" style={{ color: "var(--optae-blue)" }}>
                        {bloc.children?.map((child: any, j: number) => (
                            <span 
                                key={j} 
                                className={`
                                    ${child.bold ? "font-bold text-black" : ""} 
                                    ${child.italic ? "italic" : ""}
                                    ${child.code ? "bg-gray-100 px-1 rounded font-mono text-pink-600" : ""}
                                `}
                            >
                                {child.text}
                            </span>
                        ))}
                    </p>
                );
            })}
        </div>
    );
}