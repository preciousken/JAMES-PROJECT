const express = require('express')
const { connectDB } = require('./db/connect')
const app = express()
const cors = require('cors')

// importing the router goes in here
const conversationRouter = require('./router/Conversation')
const messageRouter = require('./router/Message')


require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
 try {
  res.status(200).send('Welcome to the home page 😍😂😛❣💞 Staunchng does loves you')
 } catch (error) {
  res.status(500).send(error)
 }
})

// middlewares
app.use('/conversation',conversationRouter)
app.use('/message',messageRouter)


const start = async()=>{
 await connectDB()
}

const port = process.env.PORT || 8983

app.listen(port,()=>{
 start()
 console.log(`
 SERVER is listening on port ${port}
 `)
})