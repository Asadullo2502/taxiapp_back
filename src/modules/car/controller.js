const model = require('./model')

const GET = async (req, res) => {
   res.json(await model.get())
}

module.exports = {
   GET
}