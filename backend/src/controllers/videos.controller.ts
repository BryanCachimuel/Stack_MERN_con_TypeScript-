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

export const editarVideo: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videoActualizado = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!videoActualizado){
            res.status(204).json({ messagge: "El video no se puede Actualizar" })
        }
        res.json(videoActualizado)
    } catch (error) {
        res.json(error)
    }
}

export const eliminarVideos: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videoporEliminar = await Video.findByIdAndDelete(req.params.id)
        if(!videoporEliminar){
            res.status(204).json()
        }
        return res.status(200).json({ messagge: "Video Eliminado Satisfactoriamente" })
    } catch (error) {
        res.json(error)
    }
}  