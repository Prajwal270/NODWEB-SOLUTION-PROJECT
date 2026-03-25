import * as contentful from "contentful";

const SPACE = import.meta.env.VITE_SPACE;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

let client;

if (!SPACE || !ACCESS_TOKEN) {
    // stub client with same async getEntries signature
    client = {
        async getEntries(query) {
            console.warn("Contentful credentials not provided. Returning empty entries.");
            return { items: [] };
        },
        async getEntry(id) {
            console.warn(`Contentful credentials not provided. Cannot fetch entry ${id}.`);
            // Return a minimal error structure or throw handled error
            // Better yet, simulate a not found or return null so UI handles it
            return null;
        },
        async getAsset(id) {
             console.warn(`Contentful credentials not provided. Cannot fetch asset ${id}.`);
             return null;
        }
    };
} else {
    client = contentful.createClient({
        accessToken: ACCESS_TOKEN,
        space: SPACE
    });
}

export { client };