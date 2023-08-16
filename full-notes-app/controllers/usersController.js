const User = require('../models/User')
const User = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')



const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean()
  if (!users) {
    return res.status(400).json({ message: 'No users found' })
  }
  res.json(users)
})


const createNewUser = asyncHandler(async (req, res) => {
  
})


const updateUser = asyncHandler(async (req, res) => {
  
})


const deleteUser = asyncHandler(async (req, res) => {
  
})

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}