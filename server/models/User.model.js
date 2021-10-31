const { Schema, model } = require("mongoose")

const userSchema = new Schema({

  email: {
    type: String,
    unique: true,
    required: true,
    //check regEx to check if email format
    trim: true,
    default: 'unknown'
  },

  password: {
    type: String,
    //required: true,
  },

  name: {
    type: String,
    required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  surname: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true,
    default: 'unknown'
  },

  role: {
    type: String,
    enum: ['USER', 'VET', 'COMPANY'],
    default: 'USER',
    required: true
  },

  pets: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet',
  }],

}, { timestamps: true })


const User = model("User", userSchema)

module.exports = User
