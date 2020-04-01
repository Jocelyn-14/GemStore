'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000
const uat = 'mongodb+srv://Jocelyn:LpDKqTjG6EIzm8gw@carsdatabase-vhhqh.mongodb.net/test?retryWrites=true&w=majority'
const local = "mongodb://localhost:27017/Gems"

mongoose.connect(local, (err, res)=>{
    if (err){
        return console.log(`Error connecting to datebase: ${err}`)
    }
    console.log('Database connection established')
    app.listen(port, ()=>{
        console.log(`API Rest running at http://localhost:${port}`)
    })
})