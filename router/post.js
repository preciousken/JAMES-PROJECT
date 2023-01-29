const express = require('express')
const { createPost, deletePost, editPost } = require('../controller/post')
const { VerifyUser } = require('../utils/verify')
const router = express.Router()

// create post
router.post('/create/:userId',VerifyUser,createPost)
// delete post
router.delete('/delete/:postId',VerifyUser,deletePost)
// edit post
router.put('/edit/:postId',VerifyUser,editPost)

module.exports = router