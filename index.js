const express = require('express');
const { connectDB } = require('./db/connect');
const app = express();
const cors = require('cors')
// importing of the routers
const usersRouter = require('./router/user')

app.get('/',(req,res)=>{
 res.status(200).json({
  welcome:"Welcome to the base url"
 })
})

// middlewares goes in here
app.use(cors())
app.use(express.json())

// routers goes in here
app.use('/users',usersRouter)

const start =async ()=>{
 await connectDB()
}

const port = process.env.PORT || 3333;
app.listen(port, ()=>{
 start()
 console.log(`
 App listening on port ${port}
 `)
})