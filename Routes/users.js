const express = require("express")
const User = require("../models/users")
const bcrypt = require("bcrypt")
const aut = require("../middleware/authnticate")
const router = express.Router()
//middleware authnticate
router.get("/", aut, async (req, res) => {
    const users = await User.find();
    res.json(users) //user
})
router.get("/", async(req,res)=>{
    const users = await User.find()
    res.json(users)
})
router.get("/:id", async(req,res)=>{
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
})
router.post("/", async(req,res)=>{
    const {name,email,password} = req.body
    const hashed = await bcrypt.hash(password,10)
    if (!name) return res.status(400).send("name is required")
    const user = await User({name,email,password :hashed}).save() 
    res.json({email:user.email,name:user.name})
})
router.put("/:id", async(req,res)=>{
    const id = req.params.id 
    const {name,email,password} = req.body
    const hashed = await bcrypt.hash(password,10)
    const user = await User.findByIdAndUpdate(id,{name,email,password:hashed},{new: true})
    res.json(user)
})
router.delete("/:id", async(req,res)=>{
    const id = req.params.id 
    const user = await User.findByIdAndDelete(id)
    res.json(user)
})
module.exports = router
