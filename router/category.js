const express = require('express');
const { VerifyAdmin, VerifyUser } = require('../utils/verify');
const {CreateCategory} =require('../control/category')
const router = express.Router();
// create category
router.post('/add',VerifyAdmin,CreateCategory )
// get category
// delete category

module.exports = router