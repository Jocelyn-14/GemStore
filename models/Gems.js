const mongoose = require('mongoose')
const meteorID = require('meteor-mongo-id')
const Random = require('meteor-random')
const Schema = mongoose.Schema
/*Declaramos las variables para mandar llamar algunas de 
las librerías para realizar ciertas acciones en el código. */
const ObjectId = mongoose.Types.ObjectId

/*Además, creamos las constantes que tendrán el tipo de 
variable para agregar información a la base de datos.

Podemos ver que separamos en 3 constantes diferentes 
agrupando las gemas con sus descripciones, sus valores 
y los comentarios que dejarían los usuarios.*/

const ReviewSchema = Schema({
    stars: {
        type: Number,
        allowedValues: [5,4,3,2,1]
    },
    body: {type: String},
    author: {type: String},
    createdOn: {type: String}
})
/*Como se puede ver en las constantes hay que declarar incluso los límites
de los valores que se van a aceptar al momento de ingresar los datos  */
const SpecsSchema = Schema({
    faces: {type: Number},
    color: {type: String},
    rarity: {
        type: Number,
        allowedValues: [1,2,3,4,5,6,7,8,9,10]
    },
    shine: {
        type: Number,
        allowedValues: [1,2,3,4,5,6,7,8,9,10]
    }
})

const GemsSchema = Schema({
    _id: {
        type: String,
    },
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    canPurchase: {type: Boolean},
    specs: {
        type: [SpecsSchema]        
    },
    images: {
        type: String,
        optional: true
    },
    reviews: {
        type: [ReviewSchema]
    }
})

mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString()
}
/*Debemos cambiar lo más posible las variables a tipo String, de esta manera
nos facilitará su manejo e interpretación */

module.exports = mongoose.model('Gems', GemsSchema)
