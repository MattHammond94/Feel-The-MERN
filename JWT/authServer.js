require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const JWT = require('jsonwebtoken')

app.post('/login', (req, res) => { 
  // First of all authenticate user as per previous project in login folder
  
  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  const refreshToken = JWT.sign(user, process.env.REFRESH_TOKEN_SECRET)
  res.json({accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user) { 
  return JWT.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}

app.listen(1000, console.log("Listening on port 1000(Auth Server)"))
