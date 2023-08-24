const express = require('express')
const Representative = require('../models/repsSchema.js')
const router = express.Router()

// CREATE A SALES REP
router.post('/', async (req, res) => {
  const newRep = new Representative(req.body)
  try {
    const savedRep = await newRep.save()
    res.status(200).json(savedRep)
  } catch (err) {
    res.status(500).json(err)
  }
})

//UPDATE A SALES REP
router.put('/:id', async (req, res) => {
  try {
    const updatedRep = await Representative.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedRep)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
