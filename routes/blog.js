const express = require("express")
const router = express.Router()

router.get("/posts/:id", (req, res) => {
  res.status(200).json({
    id: 1,
    title: "Test",
    content: "This is the test blog post of this project",
    createdAt: new Date(),
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
  const blog = req.body
  res.status(201).json({
    message: "Post created successfully!",
    blog,
  })
})

module.exports = router
