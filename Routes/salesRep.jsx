const express = require('express')
const router = express.Router()

router.get('/salesTeam', (req, res) => {
  res.send("You've reached our team")
})

module.exports = router
