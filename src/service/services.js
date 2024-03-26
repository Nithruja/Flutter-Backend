const { user} = require('../model/model');
const Bcrypt = require('bcrypt');
const { category} = require('../model/model')
const { product} = require('../model/model');


// User Registration

const userRegister = async (req)=>{
    const {fisrtName,lastName,email,mobile,password} = req.body;
    let salt = await Bcrypt.genSaltSync(10);
    let hash = await Bcrypt.hash(password,salt);
    console.log(hash);  
    const creates = await user.create({...req.body,...{password:hash}});
    return creates;
}

//User Login

const userLogin = async (req)=>{
    const {email,password } = req.body;

    const findByEmail = await user.findOne({email:email});
    if(!findByEmail){
        return null
    }else{
        const comp = await Bcrypt.compare(password,findByEmail.password);
        if(comp){
            const log = comp && findByEmail !== null? findByEmail :null;
            return log
        }else{
            return null
        }
    }

}

// Create Category:
const createCate = async (req)=>{
    const body = req.body;
    const creates = await category.create(body);
    return creates
}

// create Products:
const createProduct = async (req)=>{
    const body = req.body;
    const findCate = await category.findById(body.CategoryId);
    if(!findCate){
        return {message:"Category Not Found"}
    }else{
        const creates = await product.create(body);
        return creates
    }
}
// get Product By Id:
const getProducts = async (req) =>{
    const id =  req.params.id;
    const findById = await product.findById(id);
    if(!findById){
        return {message:"Invalid Product Id"}
    }else{
        return findById
    }
}
module.exports = {
    userRegister,
    userLogin,
    createCate,
    createProduct,
    getProducts
}