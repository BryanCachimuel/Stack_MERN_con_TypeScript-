import { RequestHandler, Request, Response } from 'express'
import Video from '../models/video.model'

export const obteniendoVideos: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videos = await Video.find()
        return res.json(videos)
    } catch (error) {
        res.json(error)
    }   
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
        res.json(error)
    }
}

export const obteniendoVideoPorId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videoporId = await Video.findById(req.params.id)
        if(!videoporId){
            res.status(204).json()
        }
        return res.json(videoporId)
    } catch (error) {
        res.json(error)
    }
}  

export const editarVideo: RequestHandler = (req: Request, res: Response) => {
    res.json('Editar video')
} 

export const eliminarVideos: RequestHandler = (req: Request, res: Response) => {
    res.json('Eliminar video')
}  