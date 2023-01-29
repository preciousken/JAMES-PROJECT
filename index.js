const express = require('express')
const { connectDB } = require('./db/connect')
const app = express()
const cors = require('cors')

// importing the routers goes in here
const postRouter = require('./router/post')

// middlewares
app.use(cors())
app.use(express.json())
app.use('/post', postRouter)

const port = process.env.PORT || 4444

const start = async()=>{
 await connectDB()
}

app.listen(port,()=>{
 start()
 console.log(`
 App listening on port ${port}
 `)
})