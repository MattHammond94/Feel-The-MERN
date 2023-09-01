import asyncHandler from 'express-async-handler'

// Authenticates user and sets token
// POST /api/users/auth
// public
const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Auth User' })
})



export {
  authUser
};