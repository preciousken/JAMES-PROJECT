const CategoryModel = require('../model/category')
const { CATEGORY_ALREADY_EXIST } = require('../utils/Messages')

const CreateCategory = async(req,res)=>{
  const {category}=req.body 
  let categoryCapitalized = category.toUpperCase()
  
  const newCategory = new CategoryModel({category:categoryCapitalized})
  // checking the database for the stuff
  const check = await CategoryModel.find({categoryCapitalized})
  if(check.category === categoryCapitalized){
    console.log(check)
    return res.status(500).send(CATEGORY_ALREADY_EXIST)
  }else{
    const savedCategory = await newCategory.save()
  res.status(200).json(savedCategory)
  }
}
module.exports = {CreateCategory}