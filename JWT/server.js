const express = require('express')
app = express()

app.use(express.json())
app.use(logger)

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

app.get('/posts', (req, res) => {
  res.json(posts)
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(444, console.log("Listening on port 444"))