const express = require("express")
const app = express()
app.use(express.json())

const blogRoutes = require("./routes/blogRoutes")
app.use(blogRoutes)

app.listen(3000, () => {
  console.log("Server is running.....")
})
