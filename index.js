const mongoose = require("mongoose")
const express = require("express")
const usersRouter = require("./Routes/users")
const authRouter = require("./Routes/login")
const logger = require("./middleware/logger")
const dbPass = process.env.dbPass
const PORT = process.env.PORT || 3000
const app = express()
//middleware
app.use(express.json())
//middle ware normal function has three paramter to login
app.use(logger)
//routes
app.use("/auth",authRouter)
app.use("/users",usersRouter)
mongoose.connect(`mongodb+srv://mohamed:${dbPass}@cluster0.n2rvd.mongodb.net/shop?retryWrites=true&w=majority`,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false})
    .then(()=>{
        console.log("connected to mongodb")
        app.listen(PORT,()=>{
            console.log(`listening on port ${PORT}`)
        })
    })

    // .catch((e)=>{
    //     console.error(e)
    // })
    //enhanced to be that meaning first parameter in console will pass to first paramter to error 
    .catch(console.error) //it knows theat it will take first parameter and put in error message  



    //for testing module
    //const User =require("./models/users") 
    //for testin add data in module records
    // const newUser = new User ({name:"Mohamed",email:"mohamedebrahim4221@gmail.com",password:"12345"})
    // return newUser.save()
    // middleware prevent any enter another req
    // if(req.url !== "/users") return res.status(400).send("only send request to /users")
    // console.log("Hello from the middleware")
