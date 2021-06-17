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
    .catch(console.error) //it knows theat it will take first parameter and put in error message  



