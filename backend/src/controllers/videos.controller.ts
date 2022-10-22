import { RequestHandler } from 'express'

export const obteniendoVideos: RequestHandler = (req, res) => {
    res.json('Obteniendo videos desde controller')
}   

export const crearVideo: RequestHandler = (req, res) => {
    res.json('Crear Proyecto')
}

export const obteniendoVideoPorId: RequestHandler = (req, res) => {
    res.json('Obteniendo video')
}  

export const editarVideo: RequestHandler = (req, res) => {
    res.json('Editar video')
} 

export const eliminarVideos: RequestHandler = (req, res) => {
    res.json('Eliminar video')
}  