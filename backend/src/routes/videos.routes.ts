import { Router } from 'express'
const router = Router()

router.get('/video', (req, res) => res.json('obteniendo videos'))

export default router 