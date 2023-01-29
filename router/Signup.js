const express = require('express');
const { Signup } = require('../control/Signup');
const router = express.Router();

router.post('/register', Signup)

module.exports = router