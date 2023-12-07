import User from '../models/userModel.js'

// Register User
const homePage = async (req, res) => {
  const { email, password } = req.body

  const validEmail = await User.findOne({ email })

  if (validEmail) {
    res.status(401).json({ message: 'Log in using valid credentials' })
  }

  const user = await User.create({
    email: email,
  })

  res.status(200).json(user)
}

export default homePage
