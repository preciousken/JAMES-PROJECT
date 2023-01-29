const express = require('express')
const { CreateProfile, getSingleProfile, updateProfile } = require('../controllers/profile')
const { VerifyUser, VerifyAdmin } = require('../utils/verify')
const router = express.Router()

// craete profile
router.post('/create/:userId',VerifyUser,CreateProfile)
// get single profile
router.get("/getsingle/:userId",getSingleProfile)
// update profile
router.put('/update/:profileId',VerifyUser,updateProfile)


module.exports = router