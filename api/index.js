import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

// Creating database connection

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connection successfully towards the DB')
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

// URIs
app.use('/', userRoutes)

app.listen(PORT, () => {
  dbConnection()
  console.log(`Server is running successfully on port: ${PORT}`)
})
