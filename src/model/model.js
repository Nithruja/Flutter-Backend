const mongoose = require('mongoose');
const { v4} = require('uuid');

const userSchema = mongoose.Schema(
    {
      _id: {
        type: String,
        default: v4,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        default: true,
      },
    },
    { timestamps: true }
  );
  
  const categorySchema = mongoose.Schema(
    {
      _id: {
        type: String,
        default: v4,
      },
      categoryName: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        default: true,
      },
    },
    { timestaps: true }
  );

 

  const productSchema = mongoose.Schema(
    {
      _id:{
        type:String,
        default:v4
      },
      CategoryId:{
        type:String,
        required:true
      },
      productName:{
        type:String,
        required:true,
        trim:true
      },
      productPrice:{
        type:Number,
        required:true
      },
      productSpec:{
        type:String,
        required:true
      },
      active:{
        type:Boolean,
        default:true
      }
      
    },
    {timestamps:true}
  )
const user = mongoose.model('users',userSchema);
const category = mongoose.model('category',categorySchema);
const product = mongoose.model('products',productSchema);

module.exports = {
    user,category,product
}