import React from 'react'
import { Video } from '../Interface/VideoInterface'

// se importa la interfaz para poder acceder a los atributos del documento
interface Props {
    video: Video
}

const VideoItem = ({video}: Props) => {
  return (
    <div key={video._id}>
         <h2>{video.titulo}</h2>
         <p>{video.descripcion}</p>
         <p>{video.url}</p>
         <p>{video.createdAt}</p>
         <p>{video.updatedAt}</p>
    </div>
  )
}

export default VideoItem