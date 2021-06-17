const mongoose = require("mongoose")
//Create schema
const schema = new mongoose.Schema({
    name: {type:String, required: true},
    email: String,
    password: String
})
//Create Model 
const User = mongoose.model("User",schema)
module.exports = User

