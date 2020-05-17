const express = require('express');
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.route('/')
    .get(userController.get)
    .post(userController.post)

    
module.exports=userRouter