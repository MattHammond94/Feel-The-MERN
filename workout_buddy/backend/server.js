require('dotenv').config()
// require dotenv and directly invoke the config method

const express = require('express')
// Line 4 requires the express package.

const mongoose = require('mongoose')
// run npm install mongoose before requiring
// mongoose is similar to sql - it is an ODM(Object data modeling)library used for communicating with DB
// Allows us to use methods to read and write database documents(documents are individual elements inside a MongoDB database)
// Also declares models and schemas to create these documents with certain params met.

const workoutRoutes = require('./routes/workouts')
// Line 13 requires our exported routes

const workoutApp = express()
// Creates an express app by calling the funct express()
// const can be defined as anything.

workoutApp.use(express.json())
// Further middleware added
// express.json allows us to send json format files as bodies in our HTTP requests
// Looks at each request and if a body is present it attaches it to the req
// allows req.body to be called.

workoutApp.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// Middleware is any code that executes between sending a request to the server and getting a response
// .use defines some global middleware which will be run each time a request is made
// next has be run/called at the end of this function.
// if next is not invoked then the function will not move onto the next Route/piece of middleware

workoutApp.use('/api/workouts', workoutRoutes)

// Each route defined below is technically also middleware
// After importing the router the original routes defined below are now redundant.
// I have kept these routes commented out for reference only.
// workoutApp.get('/', (req, res) => {
//   res.json({ message: 'Welcome' })
// })

// workoutApp.get('/anotherpage', (req, res) => {
//   res.json({ message: 'another message' })
// })
// routes defined as above

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Moved from line 63 into here:
    workoutApp.listen(process.env.PORT, () => {
      console.log(`connected to DB and listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
// This line connects to our mongoDB database which has been stored in .env
// As it takes time it is an async function and will return a Promise.

// workoutApp.listen(process.env.PORT, () => {
//   console.log(`listening on port ${process.env.PORT}`)
// })
// Port number can be defined as number. The console log here is used to show in the terminal which port is being run.

// Running node Server.js from the command line starts Server.
// Alternatively use nodemon - Nodemon will reset server each time a change is made and saved
// in package.json line is added - "dev": "nodemon server.js"
// This allows ```npm run dev``` to be run from command line

// ```npm install dotenv```
// This allows us to store sensitive information within a .env file which has been added to .gitignore
// loads env variables into a process object to be accessed accordingly.
// process.env => An object containing all ENV variables stored within .env
