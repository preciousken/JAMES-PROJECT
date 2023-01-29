const { CreateMessage, getMessage } = require('../controllers/Message')
const { VerifyUser } = require('../utils/verify')

const router = require('express').Router()

// create Message
router.post('/sendmessage/:conversationId/:senderId',VerifyUser,CreateMessage)
// get Message
router.get('/getmessage/:conversationId',VerifyUser,getMessage)
// delete Message
router.delete('/delete/:conversationId',)

module.exports = router