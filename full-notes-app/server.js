const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const { errorHandler } = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 4000

app.use(logger)
app.use(express.json())
app.use(cookieParser())

// This line tells the server where to locate static files such as CSS/images
// path imported on line 3
app.use('/', express.static(path.join(__dirname, '/public')))

// app.use(express.static('public')) => Alternate/refactored
// The above alternate will only work if the file path is relative.

app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 - Not found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.use(errorHandler)

app.listen(PORT, console.log(`Listening on port ${PORT}`))