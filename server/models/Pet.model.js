const { Schema, model } = require("mongoose")

const petSchema = new Schema({

  name: {
    type: String,
    required: true,
    maxlength: 16,
    trim: true,
    default: 'unknown'
  },

  age: Number,

  weight: Number,

  home: {
    type: String,
    enum: ['HOUSE', 'FLAT', 'OUTSIDE'],
  },

  species: {
    type: String,
    enum: ['DOG', 'CAT'], // Adaptable
    required: true
  },

  race: {
    type: String,
    required: true
  },

  img: String, // To be modified

  // vaccines: [{

  // }],

  // treatments: [{

  // }],

  // appointments: [{

  // }],

  sterilized: Boolean

}, { timestamps: true })


const Pet = model("Pet", petSchema)

module.exports = Pet
