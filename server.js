const express = require("express")
const app = express()
app.use(express.json())

const blogRouter = require("./routes/blog")
app.use(blogRouter)

app.listen(3000, () => {
  console.log("Server is running.....")
})
