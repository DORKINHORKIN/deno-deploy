import { Hono } from "hono";
import indexRoute from "./routes/index.tsx";
import postsRoute from './routes/posts/index.tsx';


const app = new Hono();

app.route("/", indexRoute);
app.route("/posts/", postsRoute);
app.route("/posts", postsRoute);

export default app;
  