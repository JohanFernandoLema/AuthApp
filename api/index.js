const express = require('express')
const app = express()
const PORT = 7000

app.listen(PORT, () => {
  console.log(`App running successfully on port: ${PORT}`)
})
