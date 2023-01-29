const {Schema, default: mongoose} = require('mongoose');

const userSchema = new Schema({
 userId:{
  type:String,
  required:true
 },
 profilePicture:{
  type:String,
  required:true
 },
 serviceRendered:{
  type:String,
  required:true
 },
 name:{
  type:String,
  required:true
 },
 pix_pastWorks:{
  type:Array,
  required:true
 },
 location:{
  type:String,
  required:true
 },
 socialLink:[String],
 phoneNumber:{
  type:String,
  required:true
 },
 YearOfExperience:{
  type:Number,
  require:true
 },
 cvPicture:{
  type:String,
  require:true
 },
 isApproved:{
  type:Boolean,
  default:false
 }

},{timestamps:true})

module.exports = new mongoose.model('user',userSchema)