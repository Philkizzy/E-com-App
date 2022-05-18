import mongoose from 'mongoose'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
      },
      email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
      },
      hashed_password: {
        type: String,
        required: "Password is required"
      },
      salt: String,
      updated: Date,
      created: {
        type: Date,
        default: Date.now
      },
      seller: {
        type: Boolean,
        default: false
      }
})