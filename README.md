# Lightweight Blog API

A minimal, secure, in-memory REST API for creating and retrieving blog posts. Built with Express for routing, Joi for request validation, and sanitize-html to prevent stored XSS. Intended for learning, prototyping, and small demos.

## Prerequisites

- Node.js 14+ (includes npm)
- Git (optional)

## Install

From the project root:

```powershell
npm install
```

## Run the server

Start the server:

```powershell
npm start
# or
node server.js
```

The app listens on PORT environment variable or defaults to 3000:
Base URL: http://localhost:3000

## API — Endpoints & Examples

1. Create a post — POST /posts

- URL: POST http://localhost:3000/posts
- Headers: Content-Type: application/json
- Body (JSON):
  - title (string, min 3)
  - content (string, min 10)
  - author (string, required)

2. Get a post — GET /posts/:id

- URL example: GET http://localhost:3000/posts/1

## Behavior & Notes

- Data is stored in-memory (array in routes/blogRoutes.js). Restarting the server clears all posts.
- Inputs are validated with Joi and sanitized with sanitize-html before creating posts.
- Intended for learning — not production-grade persistence or authentication.

## Files of interest

- server.js — application entrypoint
- routes/blogRoutes.js — route handlers, validation, in-memory store
- model/Blog.js — Blog model/class
- package.json — scripts and dependencies
