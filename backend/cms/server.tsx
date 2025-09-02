import { Hono } from 'hono';
import { postsRoute } from './routes/posts.tsx';

const app = new Hono();

app.get('/', (c) => c.text('Welcome to CMS backend'));
app.route('/posts', postsRoute);

export default app;
