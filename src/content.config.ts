import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slugFromFilename = ({ entry }: { entry: string }) => entry.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

const posts = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/posts', generateId: slugFromFilename }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
    }),
});

const learnings = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/learnings', generateId: slugFromFilename }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        source: z.url().optional(),
    }),
});

export const collections = { posts, learnings };
