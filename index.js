const express = require('express')
const path = require('path')
const port = 3000

const app = express()

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname+ '/views/homepage.html'))
})








app.listen(port)


