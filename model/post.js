const{Schema, default: mongoose}=require('mongoose')

const postSchema = new Schema({
 userId:{
 type:String,
 required:true
 },
 category:{
  type:String,
  required:true
 },
 gigImage:{
  type:[String],
  required:true
 },
 description:{
  type:String,
  required:true
 },
 minPrice:{
  type:Number,
  required:true
 },
 maxPrice:{
  type:Number,
  required:true
 }
},{timestamps:true})

module.exports = new mongoose.model('post',postSchema)