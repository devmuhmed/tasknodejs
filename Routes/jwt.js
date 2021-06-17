//server side 
const jwt = require("jsonwebtoken")
const user = {
    name: "mohamed",
    email: "email@gmail.com",
    type: "admin",
    Password: ""
}
const token = jwt.sign({
    name:user.name, 
    email:user.email, 
    type:user.type
},"myPrivatekey")
console.log(token)
//client side 
const result = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9oYW1lZCIsImVtYWlsIjoiZW1haWxAZ21haWwuY29tIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjIzOTA3MjY3fQ.rmi6f_SmoBB6fuGqpufdklZa20sAQiLa4zi8nMDLMCE")
console.log(result)
