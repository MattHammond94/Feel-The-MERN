const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Gets all workouts' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'singular workout' })
})

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
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
