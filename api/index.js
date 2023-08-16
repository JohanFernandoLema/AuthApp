// FRAMEWORKS REQUIRED
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 7000

// CONNECTING TO DATABASE
const cloudDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO.URI)
  } catch (err) {
    console.log(err)
  }
}

app.listen(PORT, () => {
  cloudDB()
  console.log(`App running successfully on port: ${PORT}`)
})
