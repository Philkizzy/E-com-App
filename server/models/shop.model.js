import mongoose from 'mongoose'

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  //The image field will store the logo image file uploaded by the user
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  //this field references the user who creates the shop
  owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

export default mongoose('Shop', ShopSchema)