import { Router } from 'express'
import {
  SubjectCreate,
  SubjectDelete,
  SubjectGet,
  SubjectGetOne,
  SubjectUpdate,
} from '../controller/subject'
import upload from '../lib/multer'

const router = Router()

router.get('/all-subject', SubjectGet)
router.get('/all-subject/:id', SubjectGetOne)
router.post('/subject/create', SubjectCreate)
router.put('/subject/update/:id', SubjectUpdate)
router.delete('/subject/delete/:id', SubjectDelete)

export default router
