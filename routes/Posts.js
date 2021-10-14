const router = require("express").Router();
const verify = require('../verifyToken')

router.get('/', verify, (req, res) => {
    res.json({
        title : 'first post',
        decription : 'rnadom data'
    })
})
module.exports = router