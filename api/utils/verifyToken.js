import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.MY_SECRET)
      req.user = await User.findById(decoded.email)

      next()
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, invalid token' })
    }
  } else {
    res
      .status(401)
      .json({ message: 'Not authorized, no token to be validated' })
  }
}

export { protect }
