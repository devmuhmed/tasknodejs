const jwt =require("jsonwebtoken")
const secretKey=process.env.secretKey
const aut = async (req, res, next) => {
    // const { email , password} = req.body;
    // const user = await User.findOne({ email })
    // if (!user) return res.status(401).send("Invalid email or password");
    // const vPass = await bcrypt.compare(password , user.password)
    // if (!vPass) return res.status(401).send("Invalid password");
    // next();
    //Enhance it by using token 
    const token = req.headers.token
    try{
        jwt.verify(token,secretKey)
        next()
    } catch (error){
        res.status(401).send("Invalid-token")
    }
}
module.exports = aut
