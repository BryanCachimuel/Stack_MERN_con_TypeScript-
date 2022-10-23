import axios from 'axios'

export const obteniendoVideos = async () => {
    return await axios.get('http://localhost:3002/videos')
}