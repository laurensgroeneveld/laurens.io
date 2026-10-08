import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { getPosts } from '@/utils/content';

export const GET: APIRoute = async ({ site }) => {
    const posts = await getPosts();

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/blog/${post.id}/`,
            content: post.rendered?.html.replace(/(href|src)="\/(?!\/)/g, `$1="${site}`),
        })),
    });
};
