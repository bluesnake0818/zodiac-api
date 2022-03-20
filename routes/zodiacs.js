import { Router } from 'express'
import * as zodiacsCtrl from '../controllers/zodiacs.js'
const router = Router()

// index
router.get('/', zodiacsCtrl.index)

// create
router.post('/', zodiacsCtrl.create)

// update
router.put('/:id', zodiacsCtrl.update)

// delete
router.delete('/:id', zodiacsCtrl.delete)

// show
router.get('/:id', zodiacsCtrl.show)

export {
  router
}
