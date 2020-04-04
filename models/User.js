const mongoose = require('mongoose')
const Schema = mongoose.Schema 

/*Aquí simplemente se establece la constante que definirá la información 
que se recolectará de cada usuario y el tipo de información que se trabajará */

const UserProfileSchema = Schema({
    username: {
        type: String
    },
    phone:{
        type: String,
        optional: true
    },
    email: {
        type: String
    },
    roles: {
        type: [String],
        allowedValues: ['admin', 'manager', 'developer']
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Users', UserProfileSchema)