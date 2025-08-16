/** @jsx jsx */
/** @jsxFrag Fragment */
import { Hono } from 'https://deno.land/x/hono@v3.11.8/mod.ts'
import { jsx, Fragment } from 'https://deno.land/x/hono@v3.11.8/jsx/index.ts'

// Define a simple JSX component
function HelloMessage(props: { name: string }) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a reusable component.</p>
    </div>
  )
}

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <title>Component Example</title>
      </head>
      <body>
        <HelloMessage name="LargerArtz" />
      </body>
    </html>
  )
})

Deno.serve(app.fetch)
