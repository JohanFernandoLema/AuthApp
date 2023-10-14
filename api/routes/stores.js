import stores from '../models/storeSchema.js'
import express from 'express'

const router = express.Router()

//Create Store
router.post('/', async (req, res) => {
  const newStore = new stores(req.body)
  try {
    const savedStore = await newStore.save()
    res.status(200).json(savedStore)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update Store

// Delete store

// Get Single Store

// Get All Stores

export default router