"use client";
import ReactMarkdown from "react-markdown";

export default function MarkdownContent({ content }: { content: string }) {
    return (
        <div style={{
            fontFamily: "inherit",
            color: "#000000",
            lineHeight: 1.9,
            textAlign: "justify",
        }}>
            <ReactMarkdown
                components={{
                    // Titres
                    h1: ({ children }) => (
                        <h1 style={{
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            color: "var(--optae-blue)",
                            marginTop: "2.5rem",
                            marginBottom: "1rem",
                            paddingBottom: "0.5rem",
                            borderBottom: "2px solid var(--optae-blue-extra-light)",
                            letterSpacing: "-0.02em",
                        }}>{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            color: "var(--optae-blue)",
                            marginTop: "2rem",
                            marginBottom: "0.75rem",
                            letterSpacing: "-0.01em",
                        }}>{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 style={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "var(--optae-marine)",
                            marginTop: "1.5rem",
                            marginBottom: "0.5rem",
                        }}>{children}</h3>
                    ),

                    // Paragraphe
                    p: ({ children }) => (
                        <p style={{
                            fontSize: "0.95rem",
                            color: "#000000",
                            lineHeight: 1.9,
                            marginBottom: "1.2rem",
                            fontWeight: 400,
                            textAlign: "justify",
                        }}>{children}</p>
                    ),

                    // Liste à puces
                    ul: ({ children }) => (
                        <ul style={{
                            marginBottom: "1.2rem",
                            paddingLeft: "0",
                            listStyle: "none",
                        }}>{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol style={{
                            marginBottom: "1.2rem",
                            paddingLeft: "1.5rem",
                        }}>{children}</ol>
                    ),
                    li: ({ children }) => (
                        <li style={{
                            fontSize: "0.95rem",
                            color: "#000000",
                            fontWeight: 300,
                            lineHeight: 1.8,
                            marginBottom: "0.4rem",
                            paddingLeft: "1.2rem",
                            position: "relative",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                        }}>
                            <span style={{
                                display: "inline-block",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "var(--optae-blue)",
                                flexShrink: 0,
                                marginTop: "0.6rem",
                                opacity: 0.5,
                            }} />
                            <span>{children}</span>
                        </li>
                    ),

                    // Gras
                    strong: ({ children }) => (
                        <strong style={{
                            fontWeight: 700,
                            color: "var(--optae-blue)",
                        }}>{children}</strong>
                    ),

                    // Italique
                    em: ({ children }) => (
                        <em style={{
                            color: "var(--optae-marine)",
                            fontStyle: "italic",
                        }}>{children}</em>
                    ),

                    // Séparateur
                    hr: () => (
                        <hr style={{
                            border: "none",
                            borderTop: "1px solid var(--optae-blue-extra-light)",
                            margin: "2rem 0",
                        }} />
                    ),

                    // Blockquote
                    blockquote: ({ children }) => (
                        <blockquote style={{
                            borderLeft: "3px solid var(--optae-blue)",
                            paddingLeft: "1.5rem",
                            margin: "1.5rem 0",
                            color: "var(--optae-marine)",
                            fontStyle: "italic",
                            opacity: 0.8,
                        }}>{children}</blockquote>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
