const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Posts = require("./models/post.model")
require('dotenv/config')

const port = process.env.PORT || 3000
const postRouter = require("./routes/post.router")


app.use(express.json())
app.use('/post', postRouter)
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("db is connected")})
.catch((err) => {console.log(err)});
app.listen(port, () => {
    console.log(`server is running in the port ${port}`)
})