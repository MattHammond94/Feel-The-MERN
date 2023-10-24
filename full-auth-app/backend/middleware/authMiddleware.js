import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// IMPORTANT //
// This middleware - specifically where we access req.cookies.jwt is only do able because of importing cookieParser into our server.js

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // We can access any cookies stored by their name. We named our token cookie jwt in our generateToken.js file. 
  // calling cookies.jwt access' this specific cookie.
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // => userId was passed as a payload when token was generated

      req.user = await User.findById(decoded.userId).select('-password'); // => .select('-password) returns a User object of all attributes minus the password.

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

// sumarized what this middleware is doing: 
// It is called first in any routes which we dont want a user to access if they do NOT have an active token.
// It assigns a variable token equal to the jwt stored in its cookie.
// If there is no token there then it returns a 401 status and an error stating no token. 

// If THERE IS a token stored then the token is decoded using the jsonwebtoken method .verify.
// The verify method takes the current token(that is being decoded) and also the SECRET. 

// The userId was used to create the token initially (As it was passed as the payload.)
// by calling decoded.userId We can access the logged in users ID and use this to query the DB with. 

export { protect };