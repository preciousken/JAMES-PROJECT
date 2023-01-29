const express = require('express');
const { connectDB } = require('./db/connect');
const cors = require('cors')
const app = express();
// importing of the routers
const profileRouter = require('./router/approveProfile')

app.get('/',(req,res)=>{
 res.status(200).json({
  welcome:"Welcome to the base url"
 })
})

// middlewares goes in here
app.use(cors())
app.use(express.json())

// routers goes in here
app.use('/profiles',profileRouter)

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