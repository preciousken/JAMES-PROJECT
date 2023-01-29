const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken')
const { USER_NOT_FOUND, WRONG_PASSWORD } = require('../utils/Messages');

require('dotenv').config();


const Login = async(req,res)=>{
  const {email,password} =req.body
  try {
    let user = await User.findOne({email:email})
    if(user){
      let match = bcrypt.compareSync(password, user.password);
      if(match){
        // asign jsonwebtoken
       let token =jwt.sign({
          data: {
          userId:user._doc._id,
          isAdmin:user._doc.isAdmin,
          seller:user._doc.seller,
          buyer:user._doc.buyer
          }
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
         const newUser = await User.findOneAndUpdate({email},{ token: token },{new:true})

        return res.status(200).json({
          user:{
            id:newUser._id,
            email:email,
            token:token
          }
        })
      }else{
        return res.send(WRONG_PASSWORD)
    }
    }else{
      return res.status(500).send(USER_NOT_FOUND)
    }
    

  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {Login}