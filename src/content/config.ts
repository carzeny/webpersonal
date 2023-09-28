// 1. import utilities from 'astro:content'
import { z,defineCollection} from 'astro:content';
// 2. Define your collection(s)
const projectsCollection =defineCollection({
    type: 'content', //v2.5.0 an later
    schema: z.object({
        title:z.string(),
        link:z.string(),
        description:z.string(),
        date: z.string(),
        images: z.array(z.string()),
        detail:z.string(),
    }),
});
// 3. Export a single 'collections' object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections={ 
    'projects':projectsCollection,
};