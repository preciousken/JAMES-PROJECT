const Post = require("../model/post")

// create post
const createPost = async(req,res)=>{
 const{gigImage,description,minPrice,maxPrice,category} = req.body
 const userId = req.params.userId
 const newPost = new Post({
  category,
  userId,
  gigImage,
  description,
  minPrice,
  maxPrice
 })
 try {
  const savedPost = await newPost.save()
  res.status(200).send(savedPost)
 } catch (error) {
  res.status(500).json(error)
 }
}
// delete post
const deletePost = async(req,res)=>{
 try {
  await Post.findOneAndDelete({_id:req.params.postId})
  res.status(200).json('Post deleted Successfully')
 } catch (error) {
  res.status(500).json(error)
 }
}
// edit post
const editPost = async(req,res)=>{
 try {
  await Post.findOneAndUpdate({_id:req.params.postId},req.body,{new:true})
  res.status(200).json('editPost')
 } catch (error) {
  res.status(500).json(error)  
 }
}

module.exports = {createPost,deletePost,editPost}