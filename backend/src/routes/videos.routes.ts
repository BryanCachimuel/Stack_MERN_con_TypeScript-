import { Router } from 'express'
const router = Router()

import * as videosCtrl from '../controllers//videos.controller'

router.get('/videos', videosCtrl.obteniendoVideos)
router.get('/videos/:id', videosCtrl.obteniendoVideoPorId)
router.post('/videos', videosCtrl.crearVideo)
router.put('/videos/:id', videosCtrl.editarVideo)
router.delete('/videos/:id', videosCtrl.eliminarVideos)


export default router 