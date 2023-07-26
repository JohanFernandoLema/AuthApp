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
const express = require('express')
const app = express()

const PORT = 5000

const salesTeam = require('./Routes/salesRep.jsx')

app.use('/salesTeam', salesTeam)

app.listen(PORT, () => {
  console.log(`We are successfully running on port ${PORT}`)
})
