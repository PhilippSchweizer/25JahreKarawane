const test = {
    name: "test",
    type: "document",
    title: "Test",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Test Name"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            }
        }
    ]
}

export default test