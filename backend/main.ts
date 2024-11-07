import { Hono } from 'https://deno.land/x/hono@v4.3.11/mod.ts';
import { config } from 'https://deno.land/x/dotenv@v3.2.2/mod.ts';

const env = config({ safe: true });
const port = env.PORT ? parseInt(env.PORT) : 1991;

const app = new Hono();

Deno.serve({ port }, app.fetch);

console.log(`Server running on http://localhost:${port}`);
