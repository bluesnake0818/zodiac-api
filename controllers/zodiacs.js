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
  Puppy.find({})
  .then(puppies => res.json(puppies))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Puppy.findById(req.params.id)
  .then(puppy => res.json(puppy))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(puppy => res.json(puppy))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deletePuppy(req, res) {
  Puppy.findByIdAndDelete(req.params.id)
  .then(puppy => res.json(puppy))
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
  deletePuppy as delete,
  
}