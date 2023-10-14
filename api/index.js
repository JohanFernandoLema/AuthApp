// FRAMEWORKS REQUIRED
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import auth from './routes/auth.js'
import salesReps from './routes/salesReps.js'
import storesList from './routes/stores.js'
dotenv.config()
const app = express()
const PORT = 7000

// CONNECTING TO DATABASE
const cloudDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to mongoDB')
  } catch (err) {
    throw err
  }
}

// middleware
app.use(express.json())

app.use('/auth', auth)
app.use('/salesRepresentatives', salesReps)
app.use('/stores', storesList)

app.listen(PORT, () => {
  cloudDB()
  console.log(`App running successfully on port: ${PORT}`)
})
