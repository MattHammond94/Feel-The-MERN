// Authenticates user and sets token
// POST /api/users/auth
// public
const authUser = (req, res) => {
  res.status(200).json({ message: 'Auth User' })
}

export {
  authUser
};