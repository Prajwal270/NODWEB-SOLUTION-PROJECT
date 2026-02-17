import * as contentful from "contentful";

export const client = contentful.createClient({
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    space: import.meta.env.VITE_SPACE
})