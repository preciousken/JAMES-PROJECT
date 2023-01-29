const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  email:{
   type:String,
   unique:true,
   required:true,
  },
  password:{
   type:String,
   required:true
  },
  isAdmin:{
    type:Boolean,
    required:true,
    default:false
  },
  seller:{
    type:Boolean,
    required:true,
    default:false
  },
  buyer:{
    type:Boolean,
    required:true,
    default:false,
  },
  token:{
    type:String,
    default:null
  }
});

module.exports= mongoose.model('User',userSchema)