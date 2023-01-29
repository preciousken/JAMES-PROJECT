
const Profile = require('../models/profile')


// CREATE PROFILE
const CreateProfile = async(req,res)=>{
 const{
  profilePicture,
  serviceRendered,
  name,
  pix_pastWorks,
  location,
  socialLink,
  phoneNumber,
  YearOfExperience,
  cvPicture
 }= req.body
 const userId = req.params.userId


 const newProfile = new Profile({
  userId,
  profilePicture,
  serviceRendered,
  name,
  pix_pastWorks,
  location,
  socialLink,
  phoneNumber,
  YearOfExperience,
  cvPicture
 })
 try {
  const savedProfile = await newProfile.save()
  res.status(200).json(savedProfile)
 } catch (error) {
  res.status(500).json(error)
 }
}


// GET SINGLE PROFILE
const getSingleProfile=async(req,res)=>{
 try {
  const profile = await Profile.find({userId:req.params.userId}).where({isApproved:true})
  res.status(200).json(profile)
 } catch (error) {
  res.status(500).json(error)
 }
}

// UPDATE PROFILE
const updateProfile = async(req,res)=>{
 try {
  const updatedProfile = await Profile.findOneAndUpdate({_id:req.params.profileId},req.body,{new:true})
  res.status(200).send(updatedProfile)
 } catch (error) {
  res.status(500).json(error)
 }
}

module.exports = {CreateProfile,getSingleProfile,updateProfile}