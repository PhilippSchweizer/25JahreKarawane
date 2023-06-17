const year = {
    name: "year",
    title: "Jahr",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Jahr",
        },
        {
            name: "slug",
            type: "slug",
            title: "Relative URL",
            description: "Hier wird die relative URL zur Unterseite für dieses Jahr bestimmt. Keine Leerzeichen oder Sonderzeichen verwenden; lediglich Kleinbuchstaben, Zahlen und Bindestriche.",
            options: {
                source: "title", slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
                validation: (Rule) => Rule.required(),
            }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "url",
            title: "URL",
            type: "url"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }
    ]
};

export default year;