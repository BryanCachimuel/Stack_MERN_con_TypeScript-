import axios from 'axios'
import { Video } from '../Interface/VideoInterface'

const API = 'http://localhost:3002'

export const obteniendoVideos = async () => {
    return await axios.get<Video[]>(`${API}/videos`)
}

export const crearVideo = async (video:Video) => {
    return await axios.post(`${API}/videos`, video)
}