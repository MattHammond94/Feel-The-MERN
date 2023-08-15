const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000

// This line tells the server where to locate static files such as CSS/images
// path imported on line 3
app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

app.listen(PORT, console.log(`Listening on port ${PORT}`))