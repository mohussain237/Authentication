const router = require('express').Router()


router.post('/register', (req, res) => {
    res.send ("we are at Register")
})

router.post('/login', (req, res) => {
    res.send ("login bla bla page")
})

module.exports = router;