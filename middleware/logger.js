const logger = (req,res,next)=>{
    console.log(req.method,req.url,Date())
    next() 
}

module.exports = logger