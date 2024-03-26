const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const controller = require('./src/controller/controller');

const app = express();
const port = 2302;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('*',cors());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/fashion2day")
  .then(() => console.log("Connected to DataBase"))
  .catch((err) => console.log(err));


app.post('/user/register',controller.userRegister);
app.post('/user/login',controller.loginUser);
app.post('/category',controller.createCategory);
app.post('/products',controller.createProduct);
app.get('/get/products/:id',controller.getProduct);


app.listen(port,()=>console.log(`Server run on ${port}`));
