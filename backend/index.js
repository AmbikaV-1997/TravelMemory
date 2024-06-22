const express = require('express')
require('dotenv').config()

const app = express()
PORT = process.env.PORT

const conn = require('./conn')

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send('HELLO WORLD!!')
})

app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})