import path from 'node:path';
import { defineCollection } from 'astro:content';
import { glob, type Loader } from 'astro/loaders';
import { z } from 'astro/zod';

const datePrefix = /^(\d{4}-\d{2}-\d{2})-/;

function datedGlob(pattern: string, base: string): Loader {
    const loader = glob({
        pattern,
        base,
        generateId: ({ entry }) => entry.replace(datePrefix, '').replace(/\.mdx?$/, ''),
    });

    return {
        ...loader,
        load: (context) => loader.load({
            ...context,
            parseData: ({ data, filePath = '', ...rest }) => context.parseData({
                ...rest,
                filePath,
                data: { ...data, date: path.basename(filePath).match(datePrefix)?.[1] },
            }),
        }),
    };
}

const posts = defineCollection({
    loader: datedGlob('*.{md,mdx}', './src/content/posts'),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
    }),
});

const learnings = defineCollection({
    loader: datedGlob('*.md', './src/content/learnings'),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        source: z.url().optional(),
    }),
});

export const collections = { posts, learnings };
