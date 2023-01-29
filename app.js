const { hash } = require('bcrypt');
const express = require('express');
const { connectDB } = require('./db/db');
const SignupRouter = require('./router/Signup')
const cors = require('cors')

require('./db/db')
require('dotenv').config()

const app = express()

// importing from the utils

app.get('/',(req,res)=>{
  res.status(200).json({
    message:"This is the base url"
  })
})

// middlewares
app.use(cors())
app.use(express.json())

app.use('/', SignupRouter)

const port =  8800

const start = async()=>{
  await connectDB()
}

app.listen(port, ()=>{
  start()
  console.log(  `
  App listening on port ${port}
  `)
})

