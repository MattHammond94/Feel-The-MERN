const express = require('express')
const app = express()

app.use('/login', (req, res) => {
  res.send("Login page")
})

app.listen(2400, console.log("Listening on port 2400"))