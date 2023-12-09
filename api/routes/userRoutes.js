import express from 'express'
import {
  registerUser,
  logIn,
  deleteUser,
  userList,
  logOut,
} from '../controllers/userControllers.js'

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', logIn)

router.post('/logOut', logOut)

router.delete('/register/:id', deleteUser)

router.get('/users', userList)

export default router
