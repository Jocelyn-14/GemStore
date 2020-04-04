let router = require('express').Router()

let AuthController = require('../controllers/Auth')

router.post('/login', AuthController.loginUser)
router.post('/logout', AuthController.logoutUser)
router.get('/me', AuthController.getCurrentUser)
router.post('/signup', AuthController.signInUser)

module.exports = router

/*Aquí podemos acceder a las carpetas y funciones para poder
realizar las acciones establecidas en dichas funciones, en 
este caso se acceden a las funciones que corresponden a los
usuarios.*/