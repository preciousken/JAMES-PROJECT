const express = require('express')
const { connectDB } = require('./db/connect')
const app = express()
const cors = require('cors')
require('dotenv').config()

// importing routers
const profileRouter = require('./router/profile')



app.get('/',(req,res)=>{
 res.send('Welcome to the base url')
})


// middlewares
app.use(cors())
app.use(express.json())

// routers
app.use('/profile',profileRouter)

const start=async()=>{
 await connectDB()
}


const port = process.env.PORT || 3000
app.listen(port,()=>{
 start()
 console.log(
  ` App listening on port ${port}
  `
 )
})