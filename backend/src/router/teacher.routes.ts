import { Router } from 'express'
import {
  TeacherCreate,
  TeacherDelete,
  TeacherGet,
  TeacherGetOne,
  TeacherUpdate,
  ImgGet,
} from '../controller/teacher'
import upload from '../lib/multer'

const router = Router()

router.get('/all-teacher', TeacherGet)
router.get('/all-teacher/:id', TeacherGetOne)
router.post('/teacher/create', upload.single('img'), TeacherCreate)
router.put('/teacher/update/:id', upload?.single('img'), TeacherUpdate)
router.delete('/teacher/delete/:id', TeacherDelete)

// Img
router.get('/img/:file', ImgGet)

export default router
