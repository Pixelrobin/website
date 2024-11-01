import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    published: z.date(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': postsCollection,
};
