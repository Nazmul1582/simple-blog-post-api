const express = require("express")
const Joi = require("joi")
const router = express.Router()
const Blog = require("../model/Blog")
const blogs = []

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

const blogSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  author: Joi.string().required(),
})

router.post("/posts", (req, res) => {
  const { title, content, author } = req.body

  const { error } = blogSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    })
  }

  const blog = new Blog({
    id: blogs.length + 1,
    title,
    content,
    author,
  })
  blogs.push(blog)

  res.status(201).json({
    message: "Post created successfully!",
    blog,
  })
})

module.exports = router
