import { defineCollection, z } from 'astro:content';

const POST_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  date: z.date(),
  footnote: z.string().optional(),
  cowritten: z.boolean().optional(),
});

const PROJECTS_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  status: z.enum(['backlog', 'wip', 'complete', 'graveyard']),
  type: z.enum(['personal', 'professional']),
  url: z.string().url(),
  startDate: z.date().optional(),
  // TODO: make these required
  image: z.string().optional(),
  logo: z.string().optional(),
});

export const collections = {
  posts: defineCollection({
    schema: POST_SCHEMA,
  }),
  projects: defineCollection({
    schema: PROJECTS_SCHEMA,
  }),
};
