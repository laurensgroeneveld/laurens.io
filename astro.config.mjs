import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://laurens.io',
    trailingSlash: 'always',
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Geist',
            cssVariable: '--font-geist',
            weights: ['100 900'],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['sans-serif'],
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Bricolage Grotesque',
            cssVariable: '--font-bricolage',
            weights: ['200 800'],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['sans-serif'],
        },
    ],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'night-owl-light',
                dark: 'night-owl',
            },
        },
    },
});
