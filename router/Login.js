const express = require('express');
const { Login } = require('../control/Login');
const router = express.Router();

router.post('/login', Login)

module.exports = router