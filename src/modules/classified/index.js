const router = require('express').Router()
const {GET, WORK, CONFIG, DIRVER} = require('./controller')

router.route('/classified')
.post(GET)

router.route('/work')
.post(WORK)


router.route('/config')
.post(CONFIG)

router.route('/driver')
.post(DIRVER)

module.exports = router
