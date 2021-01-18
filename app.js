const express = require('express')
const app = express()

app.use('/users',(req,res,next)=>{
    console.log("The middleware of /users")
    res.send('<h1>Here is /users</h1>')
})

app.use('/',(req,res,next)=>{
    console.log("The middleware of /")
    res.send('<h1>Here is /</h1>')
})


app.listen(3000)