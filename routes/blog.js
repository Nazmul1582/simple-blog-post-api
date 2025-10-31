const express = require("express")
const router = express.Router()

router.get("/posts/1", (req, res) => {
  res.status(200).json({
    id: 1,
    title: "Test",
    content: "This is the test blog post of this project",
    createdAt: new Date(),
  })
})

module.exports = router
