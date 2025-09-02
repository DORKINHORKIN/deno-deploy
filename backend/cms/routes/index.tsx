import { Hono } from "hono";
const postsRoute = new Hono();

postsRoute.get('/', (c) => {
  return c.text('Hello from CMS posts route!');
});
