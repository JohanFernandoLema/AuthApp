import express from 'express'
import {
  registerUser,
  logIn,
  deleteUser,
  userList,
  logOut,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js'
import { protect } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', logIn)

router.post('/logOut', logOut)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router.delete('/register/:id', deleteUser)

router.get('/users', userList)

export default router
