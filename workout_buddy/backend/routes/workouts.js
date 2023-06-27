const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Gets all workouts' })
})

router.get('/:id', (res, req) => {
  res.json({ message: 'singular workout' })
})

router.post('/', (req, res) => {
  res.json({ message: 'post a new workout' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'deletes a workout' })
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'updates a workout' })
})

module.exports = router

// The router defined on line 3 is an instance/object of express Router.
// This router object is used to define all of our routes.
// These routes can then be exported.
