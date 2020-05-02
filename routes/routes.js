let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'hello ItECCCC 2560 web programmers!'})
})

module.exports = router