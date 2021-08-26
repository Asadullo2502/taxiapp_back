const model = require('./model')

const LOGIN = async (req, res) => {
   res.json({message: await model.login(req.body)})
}

const VER = async (req, res) => {
   res.json({message: await model.verifyUser(req.body)})
}

const FORM = async (req, res) => {
   
   res.json({message: await model.formUser(req.body)})
}


const REG = async (req, res) => {
   res.json({message: await model.register(req.body)})
}

const SETTINGS_GET = async (req, res) => {
   res.json({message: await model.settinGet(req.body)})
}
const SETTINGS_POST = async (req, res) => {

}

module.exports = {
   REG,
   LOGIN,
   VER,
   FORM,
   SETTINGS_GET,
   SETTINGS_POST

}