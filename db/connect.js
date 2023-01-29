const mongoose = require('mongoose')
require('dotenv').config()

const connectDB= async()=>{
 try {
 
  await mongoose.set('strictQuery',true)
 await mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('connected to db')
 }).catch(()=>console.log(`unable to connect to the db`))
 } catch (error) {
  console.log(error)
 }
}

module.exports = {connectDB}