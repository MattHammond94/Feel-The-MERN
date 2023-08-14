const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(logger)

const users = []

app.get('/', (req, res) => {
  res.send("Home Page")
})

app.get('/users', auth, (req, res) => {
  console.log(`User is admin = ${req.admin}`)
  console.log("Users page")
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send("User created")
  } catch {
    res.status(400).send("MAssive ErR0R M8")
  }
})

app.post("/users/login", async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user === null) {
    return res.status(400).send("Cannot find user")
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success")
    } else {
      res.send("Password is invalid")
    }
  } catch {
    res.status(500).send()
  }
})

function logger(req, res, next) {
  console.log('MiddleWare-Lesson')
  console.log(req.originalUrl)
  next()
}

// This is single action middleware passed to GET /users
function auth(req, res, next) {
  if (req.query.admin === 'true') {
    req.admin = true
    next()
  } else {
    res.send('No auth')
  }
}

app.listen(420, console.log("Listening on port 420"))
