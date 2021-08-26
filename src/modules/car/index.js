const router = require('express').Router()
const {GET} = require('./controller')

router.route('/car')
.get(GET)

module.exports = router
