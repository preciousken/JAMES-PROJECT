const { CreateConversation, DeleteConversation, GetConversation } = require('../controllers/Conversation')
const { VerifyUser } = require('../utils/verify')

const router = require('express').Router()

// create Conversation
router.post('/create/:senderId/:receiverId',VerifyUser,CreateConversation)
// get Conversation
router.get('/getconversation/:userId',VerifyUser,GetConversation)
// delete Conversation
router.delete('/delete/:conversationId',VerifyUser,DeleteConversation)

module.exports = router