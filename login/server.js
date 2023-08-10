const express = require ('express')
const app = express()

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const user = { name: req.body.name, password: req.body.password }
  users.push(user)
  res.status(201).send("User created")
})

app.listen(420, console.log("Listening on port 420"))
