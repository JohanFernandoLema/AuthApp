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
const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('We are live :)')
})

app.listen(PORT, () => {
  console.log(`We are successfully running on port ${PORT}`)
})
