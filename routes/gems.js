const router = require('express').Router()

const GemsController = require('../controllers/Gems')
const VerifyToken = require('../middleware/VerifyToken')
const multipart = require('connect-multiparty')

router.get('/getGems', GemsController.getGems)
router.post('/getGems', GemsController.getGems)
router.post('/addGem', GemsController.createGem)
router.post('/getGem', GemsController.getGem)
router.post('/updateGem', GemsController.updateGem)
router.post('/deleteGem', GemsController.deleteGem)
router.use(multipart({
    uploadDir: 'tmp'
}))
router.post('/uploadphoto', GemsController.uploadPhotos)

module.exports = router
 /*En este caso también nos permite acceder a archivos y carpetas con 
 las funciones correspondientes al manejo de gemas, como podemos ver 
 también está el verifytoken en la parte superior ya que para acceder 
 a estas funciones se puede solicitar el token del usuario en cuestión
 pero al no requerirlo para este API no es muy necesario.*/