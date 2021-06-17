const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../models/users")
const bcrypt = require("bcrypt")
const router = express.Router()
const secretKey =process.env.secretKey
router.post("/login",async (req,res)=>{
    const { email , password} = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(401).send("Invalid email or password");
    const vPass = await bcrypt.compare(password , user.password)
    if (!vPass) return res.status(401).send("Invalid password")
    const token = jwt.sign({email:user.email, name:user.name},secretKey)
    res.json({token})
})
module.exports=router
