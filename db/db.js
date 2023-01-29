const mongoose = require("mongoose");
require('dotenv').config()


// fixing depreciation message
mongoose.set("strictQuery",true)
  // Connecting to the database
 mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });