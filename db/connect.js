const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async()=>{
 try {
  await mongoose.set('strictQuery',true)
  await mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Connected to DB')).catch(()=>console.log('Unsuccessful Connection'))
 } catch (error) {
  console.log(error)
 }
}

module.exports ={connectDB}