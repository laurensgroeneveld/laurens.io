import { getCollection, type CollectionEntry } from 'astro:content';

type Dated = CollectionEntry<'posts' | 'learnings'>;

const newestFirst = (a: Dated, b: Dated) => b.data.date.valueOf() - a.data.date.valueOf();

export async function getPosts() {
    return (await getCollection('posts')).sort(newestFirst);
}

export async function getLearnings() {
    return (await getCollection('learnings')).sort(newestFirst);
}
