const express = require("express")
const Joi = require("joi")
const sanitizeHtml = require("sanitize-html")
const router = express.Router()
const Blog = require("../model/Blog")
const blogs = []

// GET API
router.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    return res.status(404).json({
      message: "Blog not found",
    })
  }
  res.status(200).json({
    blog,
  })
})

// validation object using Joi
const blogSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(10).required(),
  author: Joi.string().required(),
})

// POST API
router.post("/posts", (req, res) => {
  const { title, content, author } = req.body

  // Validate the requested fields and handle the error.
  const { error } = blogSchema.validate(req.body)
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    })
  }

  // sanitize user inputs
  const sanitizeTitle = sanitizeHtml(title)
  const sanitizeContent = sanitizeHtml(content)
  const sanitizeAuthor = sanitizeHtml(author)

  // create new blog
  const blog = new Blog({
    id: blogs.length + 1,
    title: sanitizeTitle,
    content: sanitizeContent,
    author: sanitizeAuthor,
  })
  // store new blog in blogs array.
  blogs.push(blog)

  // send response
  res.status(201).json({
    message: "Post created successfully!",
    blog,
  })
})

module.exports = router
