// const mongoose = require('mongoose')
import mongoose from 'mongoose'
const repsSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String,
  languages: [String],
  phone: Number,
})

const repsInfo = mongoose.model('reps', repsSchema)

export default repsInfo
