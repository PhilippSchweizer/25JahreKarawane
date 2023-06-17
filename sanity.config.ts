import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from "@sanity/vision";
// import { documentInternationalization } from '@sanity/document-internationalization';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "mih0zj8b",
    dataset: "production",
    title: "25 Jahre Karawane",
    apiVersion: "2023-06-12",
    basePath: "/admin",
    plugins: [
        deskTool(),
        visionTool({
        defaultApiVersion: "2023-06-12",
        }),
        /*
        documentInternationalization({
            supportedLanguages: [
                {id: "de", title: "Deutsch"},
                {id: "en", title: "English"},
                {id: "fr", title: "French"}
            ],
            schemaTypes: [],
        }),
        */
        internationalizedArray({
            languages: [
                {id: "de", title: "Deutsch"},
                {id: "en", title: "English"},
                {id: "fr", title: "French"}
            ],
            fieldTypes: ["string"],
        })
    ],
    schema: { types: schemas }
})

export default config