const router = require('express').Router()
const {GET} = require('./controller')


router.route('/state')
.get(GET)

module.exports = router
