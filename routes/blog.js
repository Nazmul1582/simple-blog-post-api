const express = require("express")
const router = express.Router()
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
  const newBlog = {
    id: blogs.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    createdAt: new Date(),
  }
  blogs.push(newBlog)

  res.status(201).json({
    message: "Post created successfully!",
    blog: newBlog,
  })
})

module.exports = router
