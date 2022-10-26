import axios from 'axios'
import { Video } from '../Interface/VideoInterface'

const API = 'http://localhost:3002'

export const obteniendoVideos = async () => {
    return await axios.get<Video[]>(`${API}/videos`)
}

export const crearVideo = async (video:Video) => {
    return await axios.post(`${API}/videos`, video)
}

export const obtenerVideoId = async (id: string) => {
    return await axios.get<Video>(`${API}/videos/${id}`)
}

export const actualizarVideo = async (id: string, video: Video) => {
    return await axios.put<Video>(`${API}/videos/${id}`, video)
}

export const eliminarVideo = async (id: string) => {
    return await axios.delete<Video>(`${API}/videos/${id}`)
}