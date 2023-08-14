const express = require('express')
app = express()

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.send("Homepage boiiii")
})

app.get('/page', (req, res) => {
  res.send("A second page!")
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(444, console.log("Listening on port 444"))