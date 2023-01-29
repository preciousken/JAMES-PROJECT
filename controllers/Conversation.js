const mongoose = require('mongoose')
const Conversation = require('../models/Conversation')

// createConversation
const CreateConversation = async(req,res)=>{
 try {
  const newConversation = new Conversation({members:[
   req.params.senderId,
   req.params.receiverId
  ]
  })

  await newConversation.save()
  res.status(200).json(newConversation)
 } catch (error) {
  res.status(500).send(error)
 }
}

// get Messages
const GetConversation =async(req,res)=>{
 // console.log(req.params.senderId)
 try {
  const conversation = await Conversation.find({ members: { $in : [req.params.userId]} })
  res.status(200).json(conversation)
 } catch (error) {
  res.status(500).send(error)    
 }
}

// deleteConversation
const DeleteConversation = async (req,res)=>{
 try {
  await Conversation.deleteOne(req.params.conversationI)
  res.status(200).send('delete a conversation')
  
 } catch (error) {
  res.status(500).send(error)  
 }
}


module.exports = {CreateConversation,DeleteConversation,GetConversation}