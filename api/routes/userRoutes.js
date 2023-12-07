import express from 'express'
import {
  registerUser,
  logIn,
  deleteUser,
  userList,
} from '../controllers/userControllers.js'

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', logIn)

router.delete('/register/:id', deleteUser)

router.get('/users', userList)

export default router
