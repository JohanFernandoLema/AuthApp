// const mongoose = require('mongoose')
import mongoose from 'mongoose'
const repsSchema = new mongoose.Schema({
  name: String,
  location: { type: String, required: true },
  email: String,
  languages: Array,
  phone: Number,
})

export default mongoose.model('representatives', repsSchema)
