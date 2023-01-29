const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../model/userModel');
const { EMAIL_EXIST } = require('../utils/Message');

const Signup = async(req,res)=>{
 const {email,password}= req.body
 let emailExist = await User.find({email})
 if(emailExist.email === req.body.email){
  return res.status(500).send(EMAIL_EXIST)
 }
 try {
    bcrypt.hash(password, saltRounds, async function(err, hash) {
     if(err){
       console.log(err)
     }else{
       const user = await User.create({
         email:email,
         password:hash
       })
       return res.status(200).json(user)
     }
    });
   
 } catch (error) {
  res.send(error.message) 
 }
}

module.exports = {Signup}