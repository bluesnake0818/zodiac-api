import mongoose from 'mongoose'

const Schema = mongoose.Schema

const zodiacSchema = new Schema({
  name: {type: String, required: true},
  breed: {type: String, default: 'Mixed'},
  age: {type: Number, default: 0},
}, {
  timestamps: true
})

const Zodiac = mongoose.model('Zodiac', zodiacSchema)

export {Zodiac}