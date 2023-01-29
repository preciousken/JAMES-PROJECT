const { hash } = require('bcrypt');
const express = require('express');
const LoginRouter = require('./router/Login')
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
app.use('/', LoginRouter)

const port = process.env.PORT || 5555

app.listen(port, ()=>{
  console.log(  `
  App listening on port ${port}
  `)
})