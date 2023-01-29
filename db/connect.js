require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async()=>{
 mongoose.set('strictQuery',true)
 await mongoose.connect(process.env.MONGO_URI).then(()=>console.log('DB connected successfully')).catch(()=>console.log*('Unsuccessfull connection to DB'))
}
module.exports = {connectDB}