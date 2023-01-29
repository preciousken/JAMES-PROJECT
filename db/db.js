const mongoose = require("mongoose");
require('dotenv').config()

// fixing the depreciation warnings
mongoose. set ( "strictQuery" , true ) ;

  // Connecting to the database
 const connectDB = async()=>{
// await mongoose.connect(process.env.MONGO_URI)
await mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Successfully connected to database");
}).catch((error) => {
  console.log(error);
})
 }

 module.exports = {connectDB}