import * as contentful from "contentful";

const SPACE = import.meta.env.VITE_SPACE;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

let client;

if (!SPACE || !ACCESS_TOKEN) {
    // stub client with same async getEntries signature
    client = {
        async getEntries() {
            console.warn("Contentful credentials not provided. Returning empty entries.");
            return { items: [] };
        }
    };
} else {
    client = contentful.createClient({
        accessToken: ACCESS_TOKEN,
        space: SPACE
    });
}

export { client };