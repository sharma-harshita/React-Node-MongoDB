const UserModel= require('../models/userModel')

const get =(req,res)=>{
    UserModel.find({})
    .then((users)=>{
        return res.json(users)
    })
}

const post =(req,res)=>{
    UserModel.create(req.body)
    .then((user)=>{
        return res.json(user)
    })
}

module.exports.get= get
module.exports.post=post