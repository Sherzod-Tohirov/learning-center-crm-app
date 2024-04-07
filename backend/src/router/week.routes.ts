import { Router } from 'express'
import { WeekCreate, WeekDelete, WeekGet, WeekUpdate } from '../controller/week'

const router = Router()

router.get('/all-week', WeekGet)
router.post('/week/create', WeekCreate)
router.put('/week/update/:id', WeekUpdate)
router.delete('/week/delete/:id', WeekDelete)

export default router
