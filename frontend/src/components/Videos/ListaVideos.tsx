import React, { useState, useEffect } from 'react'
import { Video } from '../Interface/VideoInterface'
import * as videosServicios from '../Services/VideoServicios'
import VideoItem from './VideoItem'


const ListaVideos = () => {
  
    // le tipeamos al state y le decimos que de tipo de dato arreglo de Video
  const [videos, setVideos] = useState<Video[]>([])
    
  const cargarVideos = async () => {
    const respuestaVideos = await videosServicios.obteniendoVideos()
    setVideos(respuestaVideos.data)
  }
    
  useEffect(() => {
    cargarVideos()
  },[])  


  return (
    <div>
       <h1>Lista de Videos</h1>
       {videos.map((video) => {
        return <VideoItem video={video}/>
       })}  
    </div>
  )
}

export default ListaVideos