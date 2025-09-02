import { Hono } from "hono";

const indexRoute = new Hono();

indexRoute.get("/", (c) => c.text("Welcome to the CMS!"));

export default indexRoute;