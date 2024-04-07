import { Router } from 'express'
import {
  GroupCreate,
  GroupDelete,
  GroupGet,
  GroupGetOne,
  GroupUpdate,
} from '../controller/group'

const router = Router()

router.get('/all-group', GroupGet)
router.get('/all-group/:id', GroupGetOne)
router.post('/group/create', GroupCreate)
router.put('/group/update/:id', GroupUpdate)
router.delete('/group/delete/:id', GroupDelete)

export default router
