const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)

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
