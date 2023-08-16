// FRAMEWORKS REQUIRED
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

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

app.listen(PORT, () => {
  cloudDB('')
  console.log(`App running successfully on port: ${PORT}`)
})
