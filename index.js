const express = require('express')
const path = require('path')
const port = 3000

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')
app.get('/', (req, res) =>{
  res.render('homepage')
})








app.listen(port)


