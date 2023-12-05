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
    await mongoose.connect(`mongodb://127.0.0.1:27017/authenticationApp`)
    console.log('Connection successfully towards your db')
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}
app.get('/', (req, res) => {
  res.json({ message: 'Home Page Endpoint' })
})
app.listen(PORT, () => {
  dbConnection()
  console.log(`Server is running successfully on port: ${PORT}`)
})
