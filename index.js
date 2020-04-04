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

/*index.js es de los más importantes ya que es el que corre 
nuestro API, aquí definimos el puerto por el que pasará la 
información así como llegar a establecer la conexión con 
nuestra base de datos, como podemos ver en la parte superior 
agregamos una URL que contiene nuestro usuario y contraseña 
para Mongo, ya que tenemos establecida nuestra base de datos
ahí.*/

/*Ya que no me deja comentar en la parte del package.json lo 
comentaré aquí, este nos permite ver todas las librerías y las
versiones que tenemos instaladas para nuestra API, también,
definimos "start" para que al ejecutar tal comando este nos permita
correr el API y lo podamos seguir editando al mismo tiempo. */