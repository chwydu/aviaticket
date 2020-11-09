const db = require('mongoose')
const mongo =require('mongodb')
const user = require('../models/test')



module.exports.login = function(req,res){
    res.status(200).json({
        login:{
            email:req.body.email,
            password:req.body.password
        }
     
  }) 
}



module.exports.register = async function(req,res) {
 const candidate =user.findOne({email:req.body.email})
 if(candidate){
     res.status(409).json({
         messange:'такой занят'
     })
 } else{
     const user =new User({
         email:req.body.email,
         password:req.body.password
     })
     try{
     await user.save()
     res.status(201).json(user)
 }catch(error){

 }


 //user.save().then (() =>console.log('user created'))
}
}

