import express from 'express'
import homePage from '../controllers/userControllers.js'

const router = express.Router()

router.post('/register', homePage)

export default router
