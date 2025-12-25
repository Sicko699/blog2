import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(50),
    date: z.date(),
    updated: z.date().optional(),
    author: z.string().default("Francesco Mattone"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    coverImage: z.string().optional(), // es: /images/covers/xxx.jpg
  }),
});

export const collections = { blog };
