const express = require('express')
// Line 1 requires the express package.

const workoutApp = express()
// Creates an express app by calling the funct express()
// const can be defined as anything.

workoutApp.get('/', (req, res) => {
  res.json({ message: 'Welcome' })
})

workoutApp.get('/anotherpage', (req, res) => {
  res.json({ message: 'another message' })
})
// routes defined as above

workoutApp.listen(4200, () => {
  console.log('listening on port 4200')
})
// Port number can be defined as number. The console log here is used to show in the terminal which port is being run.

// Running node Server.js from the command line starts Server.
// Alternatively use nodemon - Nodemon will reset server each time a change is made and saved
// in package.json line is added - "dev": "nodemon server.js"
// This allows ```npm run dev``` to be run from command line
