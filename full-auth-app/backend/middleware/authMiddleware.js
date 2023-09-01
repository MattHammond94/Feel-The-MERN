import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // => userId was passed as a payload when token was generated

      req.user = await User.findById(decoded.userId).select('-password'); // => We can then find the user by extracting the payload and return an object minus the password.

      next();

    } catch (error) {
      res.status(401);
      throw new Error('Invalid token')
    }

  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };