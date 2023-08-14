require('dotenv').config()

const express = require('express')
const app = express()

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
    username: 'Hayley',
    title: 'Hayleys post'
  }
]

app.get('/', (req, res) => {
  res.send("Homepage boiiii")
})

app.get('/posts', authenticateToken, (req, res) => {
  req.user
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
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

app.listen(4444, console.log("Listening on port 4444"))