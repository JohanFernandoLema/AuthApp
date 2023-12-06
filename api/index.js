import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())

// Creating database connection

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connection successfully towards the DB')
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

app.listen(PORT, () => {
  dbConnection()
  console.log(`Server is running successfully on port: ${PORT}`)
})
