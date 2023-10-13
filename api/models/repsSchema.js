// const mongoose = require('mongoose')
const mongoose = require('mongoose')
const repsSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String,
  languages: [String],
  phone: Number,
})

const repsInfo = mongoose.model('reps', repsSchema)
module.exports = repsInfo
