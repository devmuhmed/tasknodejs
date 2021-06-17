const jwt =require("jsonwebtoken")
const secretKey=process.env.secretKey
const aut = async (req, res, next) => {
    const token = req.headers.token
    try{
        jwt.verify(token,secretKey)
        next()
    } catch (error){
        res.status(401).send("Invalid-token")
    }
}
module.exports = aut
