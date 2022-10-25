import React, { useState, useEffect } from 'react'
import { Video } from '../Interface/VideoInterface'
import * as videosServicios from '../Services/VideoServicios'
import VideoItem from './VideoItem'


const ListaVideos = () => {
  
    // le tipeamos al state y le decimos que de tipo de dato arreglo de Video
  const [videos, setVideos] = useState<Video[]>([])
    
  const cargarVideos = async () => {
    const respuestaVideos = await videosServicios.obteniendoVideos()
    
    // proceso para transformar la fecha de string date
    const formatoVideos = respuestaVideos.data.map(video => {
      return{
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt): new Date()
      }
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatoVideos)
  }
    
  useEffect(() => {
    cargarVideos()
  },[])  


  return (
    <div className="row">
       {videos.map((video) => {
        return <VideoItem video={video}  key={video._id}/>
       })}  
    </div>
  )
}

export default ListaVideos