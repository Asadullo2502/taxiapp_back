const {fetch, fetchAll} = require('../../library/postgres')
const {getRandomInt} = require('../../library/mufunc')
const {code, decode} = require('../../library/mufunc')
const {
   RESERT,
   USERS,
   REGISTER,
   USERVERY,
   CLASSI,
   FORMUSER,
   CLASS_IS,
   LOGIN
} = require('./query')

const register = async({usernumber}) => {
   let user = await fetch(USERS, usernumber)
   let random_Number = getRandomInt(9999).toString().padStart(4, '0')
   console.log(random_Number);
   if(user) {
      let userRes = await fetch(RESERT, random_Number, user.user_id)
      return code(`${user.user_id}`)
   }else {
      let userAdd = await fetch(REGISTER, usernumber, random_Number,'a', 'b')
      console.log(userAdd);
      if(userAdd.user_id) {
         return  code(`${userAdd.user_id}`)
      }else {
         return 'error'
      }
   }

}

const verifyUser = async ({token, userCode}) => {
   let userVery = await fetch(USERVERY, +decode(token))
   let is_class = await fetch(CLASS_IS, +decode(token))
   if(is_class && userVery.password == userCode) {
      return token
   }
   else if(userVery.password == userCode) {
      let userVery = await fetch(CLASSI, +decode(token))
      return token
   }else {
      return 'error'
   }
}

const formUser = async ({token, userName, userSurname, password}) => {
   
  if(token) {
      let formUser = await fetch(FORMUSER, password, userName, userSurname, +decode(token))
      return token
  }else {
     return 'error'
  }
}

const login = async ({phone_number, password}) => {
   let user = await fetch(LOGIN, phone_number, password)
  if(user) {
     return code(`${user.user_id}`)
  }else {
     return 'error'
  }
}

const SETTIN_GET = `
   SELECT
    firstname,
    lastname,
    phone_number
   FROM users
   where user_id = $1
`

const settinGet = async ({token}) => {
   let user = await fetch(SETTIN_GET, +decode(`${token}`))
   if(user) {
      return user
   }else {
      return 'error'
   }
}

module.exports = {
   register,
   verifyUser,
   formUser,
   login,
   settinGet
}