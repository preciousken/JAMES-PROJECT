const Users = require('../models/user')

// get all users
const getAllUsers = async(req,res)=>{
 try {
  const users = await Users.find({})
  res.status(200).json(users)  
 } catch (error) {
  res.status(500).json(error)
 }
}

// get number of registered users
const getUsersCount = async(req,res)=>{
 try {
  const userCount = await Users.countDocuments({})
  res.status(200).json(userCount)
 } catch (error) {
  res.status(500).json(error)  
 }
}


module.exports = {getAllUsers,getUsersCount}