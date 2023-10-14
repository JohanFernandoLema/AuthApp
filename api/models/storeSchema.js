import mongoose from 'mongoose'

const storeSchema = mongoose.Schema({
  name: String,
  location: String,
  phone: Number,
  pictures: [String],
  schedule: [String],
})

const stores = mongoose.model('storesManagement', storeSchema)
export default stores
