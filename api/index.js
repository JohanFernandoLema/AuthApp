// FRAMEWORKS REQUIRED
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth.js')
const salesReps = require('./routes/salesReps.js')

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

app.use('/auth', authRoute)
app.use('/salesRepresentatives', salesReps)

app.listen(PORT, () => {
  cloudDB()
  console.log(`App running successfully on port: ${PORT}`)
})
