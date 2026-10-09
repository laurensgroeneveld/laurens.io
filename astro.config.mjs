import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://laurens.io',
    trailingSlash: 'always',
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: 'night-owl-light',
                dark: 'night-owl',
            },
        },
    },
});
