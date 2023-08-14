require('dotenv').config()

const express = require('express')
app = express()

app.use(express.json())
app.use(logger)

const JWT = require('jsonwebtoken')
// require('crypto').randomBytes(64).toString('hex') => Run in node to return random list of chars

const posts = [
  {
    username: 'Matt',
    title: 'Post 1'
  },
  {
    username: 'Hayey',
    title: 'Hayelys post'
  }
]

app.get('/', (req, res) => {
  res.send("Homepage boiiii")
})

app.get('/posts', authenticateToken, (req, res) => {
  req.user
  res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => { 
  // First of all authenticate user as per previous project in login folder
  
  const username = req.body.username
  const user = { name: username }

  const accessToken = JWT.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken: accessToken })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]
  if (token === null) return res.sendStatus(401)

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(444, console.log("Listening on port 444"))