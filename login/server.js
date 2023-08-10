const express = require ('express')
const app = express()

const users = [
  { name: "Matt"},
  { name: "Hayley" },
  { name: "Rick Ross" }
]

app.get('/users', (req, res) => {
  res.json(users)
})

app.listen(420, console.log("Listening on port 420"))
