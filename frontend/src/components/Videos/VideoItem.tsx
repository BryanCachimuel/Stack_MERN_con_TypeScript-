import React from "react";
import { Video } from "../Interface/VideoInterface";
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import '../styles/VideoItem.css'

// se importa la interfaz para poder acceder a los atributos del documento
interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {

  const navegar = useNavigate()

  return (
    <div className="col-md-4">
      <div className="card card-body video-card mb-3" onClick={() => navegar(`/editar/:${video._id}`)}>
        <div className="d-flex justify-content-between">
          <h2>{video.titulo}</h2>
          <span className="text-danger">x</span>
        </div>
        <p>{video.descripcion}</p>
        <ReactPlayer url={video.url} width='100%' height='100%' /> 
      </div>
    </div>
  );
};

export default VideoItem;
