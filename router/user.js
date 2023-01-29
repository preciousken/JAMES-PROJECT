const express = require('express')
const { getAllUsers, getUsersCount } = require('../controller/user')
const approveProfile = require('../models/user')
const { VerifyAdmin } = require('../utils/verify')
const router = express.Router()

// get all users
router.get('/getall',VerifyAdmin,getAllUsers)
// get all users count
router.get('/userscount',VerifyAdmin,getUsersCount)

module.exports = router