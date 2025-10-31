const express = require("express")
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

router.post("/posts", (req, res) => {
  const { title, content, author } = req.body

  if (!title || !content || !author) {
    return res.status(400).json({
      message:
        "You must provide the title, content, and the author to create a blog post",
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
