import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    shortDescription: z.string(),
    coverImage: z.string().optional().default(''),
    gallery: z.array(z.string()).optional().default([]),
    client: z.string(),
    year: z.number(),
    role: z.string(),
    challenge: z.string(),
    solution: z.string(),
    result: z.string(),
  }),
});

export const collections = { projects };
