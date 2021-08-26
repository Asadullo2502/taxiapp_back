function getRandomInt(items) {
   return Math.floor(Math.random() * items) + 1;
}
const code = (str) => {
   let finish = ''

   for (let i = 0; i < str.length; i++) {
      let string = str[i].charCodeAt().toString(2).padStart(8, 0)
      string = string.split('')

      string[string.length - 1] = string[string.length - 1] == 0 ? (1) : (0)
      string[0] = string[0] == 0 ? (1) : (0)
      string = string.join('')
      string = String.fromCharCode(parseInt(string, 2))
      let MathRandom = (((Math.random() * 1000) | 0) + '').padStart(3, 0)
      let ey = MathRandom.charCodeAt().toString(2).padStart(8, 0)
      ey = ey.split('')
      ey[0] = ey[0] == 0 ? (1) : (0)
      ey = ey.join('')
      finish += string + String.fromCharCode(parseInt(ey, 2)) + MathRandom

   }
   return finish
}

const decode = (str) => {
   let finish = ''
   let str2 = ''
   for (let j = 0; j < str.length - 1; j = j + 5) {
      str2 += str[j]
   }


   for (let i = 0; i <= str2.length - 1; i++) {
      let string = str2[i].charCodeAt().toString(2).padStart(8, 0)
      string = string.split('')
      string[string.length - 1] = string[string.length - 1] == 0 ? (1) : (0)
      string[0] = string[0] == 0 ? (1) : (0)
      string = string.join('')
      string = String.fromCharCode(parseInt(string, 2))
      finish += string
   }

   return finish
}





module.exports = {
   getRandomInt,
   code,
   decode
}