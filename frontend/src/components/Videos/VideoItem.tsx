import React from "react";
import { Video } from "../Interface/VideoInterface";
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import * as videoServicios from '../Services/VideoServicios'
import '../styles/VideoItem.css'

// se importa la interfaz para poder acceder a los atributos del documento
interface Props {
  video: Video;
  cargarVideos: () => void;
}

const VideoItem = ({ video, cargarVideos }: Props) => {

  const navegar = useNavigate()

  const handleDelete = async (id: string) => {
    await videoServicios.eliminarVideo(id)
    cargarVideos()
  }

  return (
    <div className="col-md-4">
      <div className="card card-body video-card mb-3">
        <div className="d-flex justify-content-between">
          <h2  onClick={() => navegar(`/editar/:${video._id}`)}>{video.titulo}</h2>
          <span className="text-danger" onClick={() => video._id && handleDelete(video._id)}>x</span>
        </div>
        <p>{video.descripcion}</p>
        <ReactPlayer url={video.url} width='100%' height='100%' /> 
      </div>
    </div>
  );
};

export default VideoItem;
