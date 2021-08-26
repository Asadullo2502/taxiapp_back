const router = require('express').Router()
const {LOGIN, REG, VER, FORM, SETTINGS_GET, SETTINGS_POST} = require('./controller')

router.route('/register')
.post(REG)

router.route('/verify')
.post(VER)

router.route('/form')
.post(FORM)

router.route('/login')
.post(LOGIN)

router.route('/settings')
.post(SETTINGS_GET)


module.exports = router