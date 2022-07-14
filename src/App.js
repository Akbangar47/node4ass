const express = require('express');
const auth = require('./route/auth')
const app = express()
app.use(express.json())
app.use('/auth',auth)
app.post('/',(req,res)=>{
    res.send('this is express sercer')
})

app.listen(5000, ()=>{
    console.log("applicaton is running")
})