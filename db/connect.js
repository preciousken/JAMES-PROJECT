const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async()=>{
await mongoose.set('strictQuery',true)
 await mongoose.connect(process.env.MONGO_URI).then((res)=>console.log(`Connected to the db`)).catch((err)=>console.log(err))
}

module.exports = {connectDB}