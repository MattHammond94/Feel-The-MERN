const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', updateWorkout)

module.exports = router

// The router defined on line 3 is an instance/object of express Router.
// This router object is used to define all of our routes.
// These routes can then be exported.
