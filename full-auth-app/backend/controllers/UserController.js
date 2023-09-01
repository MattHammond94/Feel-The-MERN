import asyncHandler from 'express-async-handler'

//  Authenticates user and sets token
//  POST /api/users/auth
//  public
const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Auth User' })
})

//  Register a new user
//  POST /api/users
//  public
const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Register User' })
})

//  Logout user
//  POST /api/users/logout
//  public
const logoutUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Logout User' })
})

//  User Profile
//  GET /api/users/profile
//  private
const getUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: 'User profile' })
})

//  Update user profile
//  PUT/PATCH - /api/users/profile
//  private
const updateUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Update user profile' })
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};