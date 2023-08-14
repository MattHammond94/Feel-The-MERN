const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.send("This is a redundant homepage")
})

app.get('/login', (req, res) => {
  res.render('index.ejs')
})

app.listen(2400, console.log("Listening on port 2400"))