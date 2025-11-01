# Lightweight Blog API

A minimal, secure, in-memory REST API for creating and retrieving blog posts. Built with express, Joi for validation, and sanitize-html for input sanitization.

## Clone the repository

Clone the repository from the project root:

```bash
git clone https://github.com/Nazmul1582/simple-blog-post-api.git
```

## Install

From the project root:

```bash
npm install
```

## Run the server

Run the server:

```bash
npm start
# or
node server.js
```

## API -- Endpoints & Examples

1. Create a post - POST /posts

- URL: http://localhost:3000/posts
- Headers: Content-Type: application/json
- Body (JSON):
  - title (string, min 3, required)
  - content (string, min 10, required)
  - author (string, required)

2. Get a post - GET /posts/:id

- URL example: http://localhost:3000/1

## Behavior & Notes

- Data is stored in-memory through an array.
- Input sanitization with sanitize-html.
- Input validation with Joi
