import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const validEmail = await User.findOne({ email })
  const hashPassword = bcrypt.hashSync(password, 10)

  if (!validEmail) {
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    })
    const token = jwt.sign({ email }, process.env.MY_SECRET, {
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
    })

    const protectToken = {
      maxAge: Math.floor(Date.now() / 1000) + 60 * 60,
      httpOnly: true,
    }

    return res
      .status(200)
      .cookie('jwt', token, protectToken)
      .json({ user, token })
  } else {
    return res.status(401).json({ message: 'Log in using valid credentials' })
  }
}

// Log In User

const logIn = async (req, res) => {
  const { email, password } = req.body

  if (!(email && password)) {
    res
      .status(404)
      .json({ message: 'Request can not be complete "Fields missing"' })
  }

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ email }, process.env.MY_SECRET, {
      expiresIn: '1h',
    })

    const protectToken = {
      maxAge: Math.floor(Date.now() / 1000) + 60 * 60,
      httpOnly: true,
    }
    res.status(200).cookie('jwt', token, protectToken).json({
      user,
    })
  } else {
    res.status(404).json({ message: 'Credentials are not valid' })
  }
}

// Log Out User

const logOut = async (req, res) => {
  res.status(200).json({ message: 'Log out user endpoint' })
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

export { registerUser, logIn, deleteUser, userList, logOut }
