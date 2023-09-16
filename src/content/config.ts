import { defineCollection, z } from 'astro:content';

const POST_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  date: z.date(),
  footnote: z.string().optional(),
  cowritten: z.boolean().optional(),
});

export type Post = z.infer<typeof POST_SCHEMA>;

export const collections = {
  posts: defineCollection({
    schema: POST_SCHEMA,
  }),
};
