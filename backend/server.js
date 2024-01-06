import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use('/api/users', userRoutes)

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server is working' })
)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is connected to port: ${port}`))
