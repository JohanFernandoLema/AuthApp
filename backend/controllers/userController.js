import asyncHandler from 'express-async-handler'

const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Auth User' })
})

const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Register User' })
})

const logoutUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Logout User' })
})

const getUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: 'User profile' })
})

const updateUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Update user profile' })
})
export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
