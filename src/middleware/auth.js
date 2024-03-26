const JWT = require('jsonwebtoken');
const { user} = require('../model/model');

// Create Token

const generateToken = async (body)=>{
    const {_id} = body;
    console.log(_id);
    const token = JWT.sign({id:_id},'LUFFY');
    return token
}

// verify token

const verifyToken = async (req,res,next)=>{
    const headers = req.headers;
    console.log(headers);

}


module.exports = {
    generateToken,
}