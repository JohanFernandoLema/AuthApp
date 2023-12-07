import User from '../models/userModel.js'

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const validEmail = await User.findOne({ email })

  if (!validEmail) {
    const user = await User.create({
      name: name,
      email: email,
    })
    return res.status(200).json(user)
  } else {
    return res.status(401).json({ message: 'Log in using valid credentials' })
  }
}

// Log In User

const logIn = async (req, res) => {
  const { email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(200).json({
      email: email,
    })
  } else {
    res
      .status(401)
      .json({ message: 'Please make sure you are using valid credentials' })
  }
}

// Delete User

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: 'User has been removed successfully' })
}

// Get User List

const userList = async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
}

export { registerUser, logIn, deleteUser, userList }
