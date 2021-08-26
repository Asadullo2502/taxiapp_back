const express = require('express')
const PORT = process.env.PORT || 4100
const app = express()
const cors = require('cors')
const modules = require('./modules')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

 app.use(modules)

app.listen(PORT, () => console.log(PORT))
