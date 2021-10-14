 const jwt = require('jsonwebtoken')

 module.exports = function (req, res, next) {
     const token = req.header ('Auth-token')
     if (!token) return res.status(401).send('Access denied')
     try {
         const verified = jwt.verify(token, process.env.SECRETE_KEY)
         req.userdata = verified
     } catch (error) {
        res.status(400).send('invalid token')
     }
 }