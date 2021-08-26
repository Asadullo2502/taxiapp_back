const carRouter = require('./car')
const stateRouter = require('./state')
const classifiedRouter = require('./classified')
const authRouter = require('./auth')


module.exports = [
   carRouter,
   stateRouter,
   classifiedRouter,
   authRouter

]