import { Router } from 'express'
import {
  StudentCreate,
  StudentDelete,
  StudentGet,
  StudentGetOne,
  StudentUpdate,
} from '../controller/student'

const router = Router()

router.get('/all-student', StudentGet)
router.get('/all-student/:id', StudentGetOne)
router.post('/student/create', StudentCreate)
router.put('/student/update/:id', StudentUpdate)
router.delete('/student/delete/:id', StudentDelete)

export default router
