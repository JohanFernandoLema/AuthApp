import asyncHandler from 'express-async-handler'

const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Auth User' })
})

export { authUser }
