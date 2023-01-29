const mongoose = require('mongoose')
const {Schema} = mongoose

const messageSchema = new Schema({
 conversationId: String,
 sender:String,
 text:String
})

module.exports = new mongoose.model('message',messageSchema)
