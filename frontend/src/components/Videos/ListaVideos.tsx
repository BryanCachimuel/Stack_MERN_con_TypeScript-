import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Video } from '../Interface/VideoInterface'



const ListaVideos = () => {
  
    // le tipeamos al state y le decimos que de tipo de dato arreglo de Video
  const [videos, setVideos] = useState<Video[]>([])
    
  const cargarVideos = async () => {
    const respuestaVideos = await axios.get('http://localhost:3002/videos')
    setVideos(respuestaVideos.data)
  }
    
  useEffect(() => {
    cargarVideos()
  },[])  


  return (
    <div>
       <h1>Lista de Videos</h1>
       {videos.map((video) => {
        return <div>
            <p>{video.createdAt}</p>
            <p>{video.titulo}</p>
        </div>
       })}  
    </div>
  )
}

export default ListaVideos