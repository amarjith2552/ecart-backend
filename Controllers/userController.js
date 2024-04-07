const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//logic for register
exports.register=async(req,res)=>{
    //get user details from request
    const {username,email,password}=req.body

    try{
        const existinguser = await users.findOne({email})
        if(existinguser){
            res.status(404).json("user already registered")
        }
        else{
            const newuser = new users({username,email,password})
            await newuser.save() //to save new user details in mongodb
            res.status(200).json(newuser)
        }
    }
    catch(err){
        response.status(404).json(err)
    }
}

exports.login=async(req,res)=>{
    const{email,password}= req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWTKEY)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(402).json("incorrect email or password")
        }
    }
    catch(err){
        res.status(404).json(err)
    }
}