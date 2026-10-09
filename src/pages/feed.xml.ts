import { getContainerRenderer } from '@astrojs/mdx/container-renderer';
import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { loadRenderers } from 'astro:container';
import { render } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { getPosts } from '@/utils/content';

export const GET: APIRoute = async ({ site }) => {
    const posts = await getPosts();
    const container = await AstroContainer.create({ renderers: await loadRenderers([getContainerRenderer()]) });

    const absolutizeUrls = (html: string) =>
        html.replace(/(href|src|srcset)="([^"]+)"/g, (_, attribute: string, value: string) =>
            `${attribute}="${value.replace(/(^|, )\/(?!\/)/g, `$1${site}`)}"`);

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: site!,
        items: await Promise.all(posts.map(async (post) => {
            const { Content } = await render(post);

            return {
                title: post.data.title,
                description: post.data.description,
                pubDate: post.data.date,
                link: `/blog/${post.id}/`,
                content: absolutizeUrls(await container.renderToString(Content)),
            };
        })),
    });
};
