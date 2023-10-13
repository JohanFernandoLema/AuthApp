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

// UPDATE A SALES REP
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

// DELETE SALES REP

router.delete('/:id', async (req, res) => {
  try {
    await Representative.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json('Representative has been removed out from the corporation')
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET SINGLE REP INFO
router.get('/:id', async (req, res) => {
  try {
    const singleRep = await Representative.findById(req.params.id)
    res.status(200).json(singleRep)
  } catch (err) {
    res.status(500).json('Representative does not exist')
  }
})

// GET ALL SALE REPS
router.get('/', async (req, res) => {
  try {
    const allReps = await Representative.find(req.params.id)
    res.status(200).json(allReps)
  } catch (err) {
    res.status(500).json('Representatives do not exist')
  }
})
module.exports = router
