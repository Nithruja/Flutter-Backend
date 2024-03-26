const services = require('../service/services');
const { generateToken} = require('../middleware/auth')


// user Register
const userRegister = async (req,res) =>{
    const datas = await services.userRegister(req);
    res.send(datas);
}

// login User
const loginUser = async(req,res)=>{
    const datas = await services.userLogin(req);
    const token = await generateToken(req);

    if(datas == null){
        res.status(400).send({message:'Invalid Credentials'})
    }else{
        res.send({token:token,name:datas.firstName});
    }
}

// create Category:
const createCategory = async (req,res) =>{
    const datas = await services.createCate(req);
    res.send(datas);
}

// create products:
const createProduct = async (req,res)=>{
    const datas = await services.createProduct(req);
    res.send(datas);
}
// get Products:
const getProduct = async (req,res) =>{
    const datas = await services.getProducts(req);
    console.log(datas);
    res.send(datas);
}

module.exports = {
    userRegister,
    loginUser,
    createCategory,
    createProduct,
    getProduct
}