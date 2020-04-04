const jwt = require('jsonwebtoken')
/*Con este código se nos permite, como dice el nombre, verificar
el código y comprobar que el usuario que está logeado pueda realizar 
las operaciones disponibles, para la tienda de gemas optamos por no 
verificar el token para hacer todo más fluído pero esta opción 
nos garantiza más seguridad para que no cualquiera pueda modificar 
la información. */
function verifyToken(req, res, next){
    let token = req.headers['x-access-token']
    console.log(token)
    if(!token){
        return res.status(403).send({aut: false, message:'No token provided.'})
    }

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
        if(err)
            return res.status(500).send({aut: false, message:'Failede to authenticate token.'})

            req.userId = decoded.id
            
            next()
    })
}

module.exports = verifyToken
