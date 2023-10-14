import { defineCollection, z } from 'astro:content';

const POST_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  date: z.date(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  footnote: z.string().optional(),
  coAuthors: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
});

const PROJECTS_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  status: z.enum(['backlog', 'wip', 'complete', 'graveyard']),
  type: z.enum(['personal', 'professional']),
  url: z.string().url(),
  image: z.string(),
  logo: z.string(),
  date: z.date(),
});

export const collections = {
  posts: defineCollection({
    schema: POST_SCHEMA,
  }),
  projects: defineCollection({
    schema: PROJECTS_SCHEMA,
  }),
};
