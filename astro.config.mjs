import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://laurens.io',
    trailingSlash: 'always',
    integrations: [alpinejs({ entrypoint: '/src/alpine' }), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            theme: 'night-owl',
        },
    },
});
