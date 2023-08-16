// SERVER ON NODE

// const http = require('http')

// const PORT = 5000

// const server = http.createServer((req, res) => {
//   res.end('Hello World')
// })

// server.listen(PORT, () => {
//   console.log(`Running on port: ${PORT}`)
// })

// SERVER ON EXPRESS

// Importing module
import { express } from 'express'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const app = express()

const PORT = 5000

import salesTeam from './Routes/salesRep.jsx'

app.use('/salesTeam', salesTeam)

app.listen(PORT, () => {
  console.log(`We are successfully running on port ${PORT}`)
})
