import {Zodiac} from "../models/zodiac.js"

function create(req, res) {
  Zodiac.create(req.body)
  .then(zodiac => res.json(zodiac))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  Zodiac.find({})
  .then(zodiacs => res.json(zodiacs))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Zodiac.findById(req.params.id)
  .then(zodiac => res.json(zodiac))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  Zodiac.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(zodiac => res.json(zodiac))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteZodiac(req, res) {
  Zodiac.findByIdAndDelete(req.params.id)
  .then(zodiac => res.json(zodiac))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  create, 
  index,
  show, 
  update, 
  deleteZodiac as delete,
  
}