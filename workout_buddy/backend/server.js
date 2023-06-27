require('dotenv').config()
// require dotenv and directly invoke the config method

const express = require('express')
// Line 3 requires the express package.

const workoutApp = express()
// Creates an express app by calling the funct express()
// const can be defined as anything.

workoutApp.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// Middleware is any code that executes between sending a request to the server and getting a response
// .use defines some global middleware which will be run each time a request is made
// next has be run/called at the end of this function.
// if next is not invoked then the function will not move onto the next Route/piece of middleware

// Each route defined below is technically also middleware
workoutApp.get('/', (req, res) => {
  res.json({ message: 'Welcome' })
})

workoutApp.get('/anotherpage', (req, res) => {
  res.json({ message: 'another message' })
})
// routes defined as above

workoutApp.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
// Port number can be defined as number. The console log here is used to show in the terminal which port is being run.

// Running node Server.js from the command line starts Server.
// Alternatively use nodemon - Nodemon will reset server each time a change is made and saved
// in package.json line is added - "dev": "nodemon server.js"
// This allows ```npm run dev``` to be run from command line

// ```npm install dotenv```
// This allows us to store sensitive information within a .env file which has been added to .gitignore
// loads env variables into a process object to be accessed accordingly.
// process.env => An object containing all ENV variables stored within .env
