const express = require('express')
const { getUnapprovedProfiles,approveProfiles, deleteProfile } = require('../controller/approveProfile')
const approveProfile = require('../models/approveProfile')
const { VerifyAdmin } = require('../utils/verify')
const router = express.Router()

// get unapproved profiles
router.get('/unapproved',VerifyAdmin,getUnapprovedProfiles)
// approve profile
router.post('/approve/:profileId',VerifyAdmin,approveProfiles)
// delete profile
router.delete('/delete/:profileId',VerifyAdmin,deleteProfile)

module.exports = router