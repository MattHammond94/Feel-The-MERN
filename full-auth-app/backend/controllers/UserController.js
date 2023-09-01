import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


//  Authenticates user and sets token
//  POST /api/users/auth
//  public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if(user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
})

//  Register a new user
//  POST /api/users
//  public
const registerUser = asyncHandler(async (req, res) => {
  
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  });

  if(user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//  Logout user
//  POST /api/users/logout
//  public
const logoutUser = asyncHandler(async (req, res) => {

  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })

  res.status(200).json({ message: 'User logged out' })
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