require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions)) //allows everything to be used publicly (Public API's return resources to any origin point)
// use cors options to control/secure which origins our API will respond to.

// This line tells the server where to locate static files such as CSS/images
// path imported on line 4
app.use('/', express.static(path.join(__dirname, '/public')))

// app.use(express.static('public')) => Alternate/refactored
// The above alternate will only work if the file path is relative.

app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'))

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

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, console.log(`Listening on port ${PORT}`))
})

mongoose.connection.on('error', err => {
  console.log(err)
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})