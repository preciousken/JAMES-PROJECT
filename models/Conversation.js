const mongoose = require('mongoose')
const {Schema} = mongoose

const ConversationSchema = new Schema({
 members:Array
})

module.exports = mongoose.model('conversation', ConversationSchema)