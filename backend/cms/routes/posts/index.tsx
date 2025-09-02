import { Hono } from 'hono';
import { fetchPosts } from '#shared/utils/markdown.ts';

const postsRoute = new Hono();



postsRoute.get('/', (c) => {
  const posts = fetchPosts();
  return c.json(posts);
});



export default postsRoute;