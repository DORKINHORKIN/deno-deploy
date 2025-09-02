import { Hono } from 'hono';
import { fetchPosts } from '#shared/utils/markdown.ts';

export const postsRoute = new Hono();

postsRoute.get('/', async (c) => {
  const posts = await fetchPosts();
  return c.json(posts);
});
