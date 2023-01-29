const Profile = require('../models/approveProfile')

// get all unapproved profiles
const getUnapprovedProfiles = async(req,res)=>{
 try {
  const notApproved = await Profile.find({}).where({isApproved:false})
  res.status(200).json(notApproved)  
 } catch (error) {
  res.status(500).json(error)
 }
}

// approve profiles
const approveProfiles = async (req,res)=>{
 try {
  const approved = await Profile.findOneAndUpdate({_id:req.params.profileId},{isApproved:true},{new:true})
  res.status(200).json(approved)
 } catch (error) {
  res.status(500).json(error)
 }
}
// delete user profile
const deleteProfile = async(req,res)=>{
await Profile.findOneAndDelete({_id:req.params.profileId})
 try {
  res.status(200).json('Profile deleted Successfully')
 } catch (error) {
  res.status(500).json(error)
 }
}


module.exports = {getUnapprovedProfiles,approveProfiles,deleteProfile}