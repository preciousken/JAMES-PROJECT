const Message = require("../models/Message")

// send a message
const CreateMessage = async(req,res)=>{
const message = new Message({
 conversationId:req.params.conversationId,
 sender:req.params.senderId,
 text:req.body.text
})
 try {
  await message.save()
  res.status(200).send(message)
 } catch (error) {
  res.status(500).send(error)
 }
}

// get messages
const getMessage = async(req,res)=>{
 try {
  const message = await Message.find({conversationId:req.params.conversationId})
  res.status(200).json(message)
 } catch (error) {
  res.status(500).send(error)
 }
}

module.exports = {CreateMessage,getMessage}