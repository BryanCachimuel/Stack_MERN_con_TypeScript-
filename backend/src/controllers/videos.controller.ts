import { RequestHandler, Request, Response } from 'express'
import Video from '../models/video.model'

export const obteniendoVideos: RequestHandler = (req: Request, res: Response) => {
    res.json('Obteniendo videos desde controller')
}   

export const crearVideo: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videoEncontrado = await Video.findOne({url: req.body.url})
        if(videoEncontrado){
            return res.status(301).json({ message: "La URL de este video ya existe" })
        }

        const videoNuevo = new Video(req.body)
        const crearVideo = await videoNuevo.save()
        res.json(crearVideo)
             
    } catch (error) {
        console.log(error)
    }
}

export const obteniendoVideoPorId: RequestHandler = (req: Request, res: Response) => {
    res.json('Obteniendo video')
}  

export const editarVideo: RequestHandler = (req: Request, res: Response) => {
    res.json('Editar video')
} 

export const eliminarVideos: RequestHandler = (req: Request, res: Response) => {
    res.json('Eliminar video')
}  