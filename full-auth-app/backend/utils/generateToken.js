import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });

  // importing the jsonwebtoken as jwt allows us to chain the .sign method which is what generates the token and signs it with the passed data.
  // in cryptography, "to sign" means to apply a digital signature to a token.

  // signing it allows to confidently ensure the JWT has not been tampered with but also allows us to convey information
  // about the issuer within the token itself.

  // jwt.sign takes a:
  // Payload - We have passed the userId as our payload as we would need to access this later on. 
  // Secret Key - A password we have stored in our .env file
  // Options - An object of options, in our object we have set our token to expire 


  // After creating/signing the webtoken we then store is in cookies as below:

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict', 
    maxAge: 30 * 24 * 60 * 60 * 1000
  })

  // res.cookie allows us to store data within a cookie.
  // res.cookie takes 3 params
  // Name - We have named this cookie 'jwt' - Can be anything.
  // Whats being stored - In this instance we are storing the token we just generated above.
  // Options - Options in the form of an object. 
  // Options: httpOnly - Ensures this cookie is a http only cookie preventing it from being tampered with by JS
  //   -      secure - Means cookie will only be stored if https is being used (SSL certified sites.) - We are checking the ENV beause in development https is not used. Otherwise this would return true.
  //   -      sameSite - prevents CSRF attacks (Cross Site Request Forgery)
  //   -      maxAge - Sets expiration (in seconds) - used maths to make it the same as the token expiry.
}

export default generateToken;