const model = require('./model')

const GET  = async (req, res) => {
   res.json(await model.get(req.body))
}

const WORK = async (req, res) => {
   res.json({message: await model.work(req.body)}) 
}

const CONFIG = async (req,res) => {
   res.json({message: await model.config(req.body)})
}
const DIRVER = async (req, res) => {
   res.json( await model.driver(req.body))
}

module.exports = {
   GET,
   WORK,
   CONFIG,
   DIRVER
}